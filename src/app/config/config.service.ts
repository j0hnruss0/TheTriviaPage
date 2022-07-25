import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn:  'root' })
export class HttpService {
  private url = 'https://the-trivia-api.com/api/questions?limit=10';
  constructor(private http: HttpClient) { }

  getQuestions(category: string) {
    switch(category) {
      case 'none':
        this.url = 'https://the-trivia-api.com/api/questions?limit=10';
        break;
      case "arts-lit":
        this.url = 'https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10';
        break;
      case "film-tv":
        this.url = 'https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10';
        break;
      case 'food-drink':
        this.url = 'https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=10';
        break;
      case 'general':
        this.url = 'https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=10';
        break;
      case 'geography':
        this.url = 'https://the-trivia-api.com/api/questions?categories=geography&limit=10';
        break;
      case 'history':
        this.url = 'https://the-trivia-api.com/api/questions?categories=history&limit=10';
        break;
      case 'music':
        this.url = 'https://the-trivia-api.com/api/questions?categories=music&limit=10';
        break;
      case 'science':
        this.url = 'https://the-trivia-api.com/api/questions?categories=science&limit=10';
        break;
      case 'society':
        this.url = 'https://the-trivia-api.com/api/questions?categories=society_and_culture&limit=10';
        break;
      case 'sports':
        this.url = 'https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=10';
        break;

    };

    return this.http.get<any>(this.url);
    
  }
}