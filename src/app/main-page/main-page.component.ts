import { Component, OnInit } from '@angular/core';
import { Question } from '../app.models';
import { HttpService } from '../config/config.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  selection: string = 'none';
  data: any;
  question: Question;
  questions: Question[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.buildQuestions(this.selection);
  }

  buildQuestions(category: string): void {
    this.questions = [];
    this.httpService.getQuestions(category).subscribe(
      (response) => { 
        this.data = response;
        for (let i = 0; i < response.length; i++) {
          let allAnswers = this.data[i].incorrectAnswers;
          allAnswers.push(this.data[i].correctAnswer)
          this.questions.push({
            category: this.data[i].category,
            id: this.data[i].id,
            type: this.data[i].type,
            difficulty: this.data[i].difficulty,
            tags: this.data[i].tags,
            question: this.data[i].question,
            possibleAnswers: this.mix(allAnswers),
            answer: this.data[i].correctAnswer
          });
        } 
      
      },
      (error) => { console.log(error); }); 
  }

  seeData(): void {
    //console.log(this.questions)
    console.log(this)
  };

  mix(array: string[]): string[] {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;

 }
}
