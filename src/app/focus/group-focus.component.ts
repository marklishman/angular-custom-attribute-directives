import { Component } from '@angular/core';

@Component({
  selector: 'app-group-focus',
  template: `
    <form appFocus>
      <label>One: <input type="text" disabled></label>
      <label>Two: <input type="text" value="Some text"></label>
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
export class GroupFocusComponent {
}
