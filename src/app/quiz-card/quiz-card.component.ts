import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../app.models';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  animations: [
    trigger('makeChoice', [
      state('right', style({
        backgroundColor: 'green'
      })),
      state('wrong', style({
        backgroundColor: 'red'
      })),
      transition('* => *', [
        animate(1000)
      ])
    ])
  ]
})
export class QuizCardComponent implements OnInit {
  @Input() question: Question;
  isClicked: boolean = false;
  isCorrect: boolean;

  constructor() { }

  ngOnInit() {
  }

  chooseThis(guess: string): void {
    if (!this.isClicked) {
      this.isClicked = true;
      if (guess === this.question.answer) {
        this.isCorrect = true;
      } else {
        this.isCorrect= false;
      }
    }
  }

  stateMaker(): string {
    if (this.isClicked) {
      if (this.isCorrect) {
        return 'right'
      } else {
        return 'wrong'
      }
    } else {
      return ''
    }
  }

}
