import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-star-rating',
  template: `
    <header>Click on the starts to rate the movie</header>
    <div class="container">
      <div appStarRating *ngFor="let movie of movies">
        <img src="{{root}}/assets/images/{{movie}}.jpg">
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
    }
    .star {
      cursor: pointer;
      font-size: 22px;
    }
    .selected {
      color: gold;
    }
  `]
})
export class StarRatingComponent {

  root = environment.imageRoot;

  movies: string[] = [
    'shawshank-redemption',
    'the-godfather',
    'the-dark-knight'
  ];
}
