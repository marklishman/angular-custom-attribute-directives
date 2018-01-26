import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `
    <p>
      <button appItem #btn1="appButtonItem">one</button>
      <button appItem #btn2="appButtonItem">two</button>
      <button appItem #btn3="appButtonItem">three</button>
    </p>
    <div>
      One: {{btn1.isSelected()}}<br>
      Two: {{btn2.isSelected()}}<br>
      Three: {{btn3.isSelected()}}
    </div>
    <hr>
    <div>
      <label>
        <input #single (change)="0" type="checkbox">
        Single
      </label>
    </div>
    <div appGroup [single]="single.checked" #group="appGroup">
      <button appItem>one</button>
      <button appItem>two</button>
      <button appItem>three</button>
    </div>
    <p>Selected items: {{group.selectedItems}}</p>
  `,
  styles: [`
    button {
      background: transparent;
    }
    button.selected {
      background: LightGray;
    }
  `]
})
export class GroupComponent {
}
