import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="container">
      <div appStarRating *ngFor="let movie of movies">
        <img src="/assets/images/{{movie}}.jpg">
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

  movies: string[] = [
    'shawshank-redemption',
    'the-godfather',
    'the-dark-knight'
  ];
}
