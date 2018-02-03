import { Component } from '@angular/core';

@Component({
  selector: 'app-item-focus',
  template: `
    <header>Click outside the text boxes</header>
    <form>
      One: <input type="text">
      Two: <input appFocus type="text">
      Three: <input type="text">
    </form>
  `
})
export class ItemFocusComponent {
}
