import { Component } from '@angular/core';

@Component({
  selector: 'app-host',
  template: `
    <header>Enter the text boxes, use esc key to remove border</header>
    <section class="hover-container">
      <input type="text">
      <input type="text">
      <input type="text">
    </section>
    <button id="clear">Clear</button>
  `,
  styles: [`
    section.hover-container {
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
