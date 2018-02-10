import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header [hidden]="show.innerText === 'Hide'">
        Click in the box to change hover color, double click to remove hover color
    </header>
    <header [hidden]="show.innerText === 'Show'">
        Enter an input field to see the border, press 'esc' key to remove
    </header>
    <article>
      <section class="container border">
        <input type="text">
        <input type="text">
        <input type="text">
      </section>
      <button #show
              id="show"
              (click)="show.innerText = show.innerText === 'Show' ? 'Hide' : 'Show'">
        Show
      </button>
    </article>
  `,
  styles: [`
    article {
      display: flex;
      align-items: center;
    }
    section.container {
      height: 24px;
      margin: 0 20px;
      padding: 30px 20px;
      width: 530px;
    }
  `]
})
export class HostComponent {
}
