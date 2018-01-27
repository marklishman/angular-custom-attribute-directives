import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header>
      <ul>
        <li>Mouse over box to change color, mouse out to change back</li>
        <li>Click box to keep color, double click to remove color</li>
        <li>Enter text boxes to see border, use esc key to remove border</li>
        <li>Click Disable button to toggle enable / disable</li>
      </ul>
    </header>
    <section class="container">
      <input type="text">
      <input type="text">
      <input type="text">
    </section>
    <button #btn
            (click)="btn.innerText = btn.innerText === 'Enable' ? 'Disable' : 'Enable'"
            id="disable">
      Disable
    </button>
  `,
  styles: [`
    section.container {
      display: inline-block;
      border: 1px solid DimGray;
      padding: 20px;
    }
    input {
      outline: none;
    }
  `]
})
export class HostComponent {
}
