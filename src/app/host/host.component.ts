import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header [hidden]="show.innerText === 'Hide'">
        Click in the box to change hover color, double click to remove hover color
    </header>
    <header [hidden]="show.innerText === 'Show'">
        Enter a date field to see the border, press 'esc' key to remove the border
    </header>
    <article>
      <section class="container border">
        <input type="date">
        <input type="date">
      </section>
      <section>
        <p>
          <button #show
                  id="show"
                  (click)="show.innerText = show.innerText === 'Show' ? 'Hide' : 'Show'">
            Show
          </button>
        </p>
        <header>Click the button</header>
      </section>
    </article>
  `,
  styles: [`
    article {
      display: flex;
      align-items: center;
    }
    section.container {
      display: flex;
      justify-content: space-around;
      height: 24px;
      margin-left: 20px;
      padding: 30px 20px;
      width: 450px;
    }
  `]
})
export class HostComponent {
}
