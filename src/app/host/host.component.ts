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
      <section class="container">
        <input type="text">
        <input type="text">
        <input type="text">
      </section>
      <button #show
              (click)="show.innerText = show.innerText === 'Show' ? 'Hide' : 'Show'"
              id="show">
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
      border: 1px solid DimGray;
      display: inline-block;
      height: 24px;
      margin-left: 20px;
      padding: 30px 20px;
      width: 530px;
    }
    input {
      outline: none;
    }
    button {
      margin-left: 10px;
    }
  `]
})
export class HostComponent {
}
