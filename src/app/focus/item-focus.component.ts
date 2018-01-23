import { Component } from '@angular/core';

@Component({
  selector: 'app-item-focus',
  template: `
    <form>
      <label>One: <input appFocus type="text"></label>
      <label>Two: <input type="text"></label>
      <label>Three: <input type="text"></label>
    </form>
  `
})
export class ItemFocusComponent {
}
