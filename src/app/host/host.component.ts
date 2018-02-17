import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header [hidden]="show">
      Click the box to change hover color, double click to remove.
    </header>
    <header [hidden]="!show">
      Enter an input field to see the border, press 'esc' key to remove.
    </header>
    <main>
      <section class="container border">
        <input type="date">
        <input type="date">
      </section>
      <section>
        <p>
          <button id="show" (click)="show = !show">{{show ? 'Hide' : 'Show'}}</button>
        </p>
        <header>Click the button</header>
      </section>
    </main>
  `,
  styles: [`
    main {
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
  show: boolean;
}
