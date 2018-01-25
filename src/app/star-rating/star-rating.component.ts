import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="container">
      <div appStarRating>
        <img src="/assets/images/shawshank.jpg" alt="shawshank redemption">
      </div>
      <div appStarRating>
        <img src="/assets/images/godfather.jpg" alt="sgodfather">
      </div>
      <div appStarRating>
        <img src="/assets/images/dark-knight.jpg" alt="dark knight">
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
}
