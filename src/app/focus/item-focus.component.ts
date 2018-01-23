import { Component } from '@angular/core';

@Component({
  selector: 'app-item-focus',
  template: `
    <form>
      <label>One: <input appFocus type="text"></label>
      <label>Two: <input type="text"></label>
      <label>Three: <input type="text"></label>
    </form>
  `,
  styles: [`
    form {
      padding: 10px;
    }
    label {
      display: block;
      margin-bottom: 10px;
    }`]
})
export class ItemFocusComponent {
}
