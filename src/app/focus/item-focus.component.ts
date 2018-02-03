import { Component } from '@angular/core';

@Component({
  selector: 'app-item-focus',
  template: `
    <header>Focus is on second input</header>
    <form>
      One: <input type="text">
      Two: <input appFocus type="text">
      Three: <input type="text">
    </form>
  `
})
export class ItemFocusComponent {
}
