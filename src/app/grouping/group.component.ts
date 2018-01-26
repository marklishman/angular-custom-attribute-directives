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
    <p><input #single (change)="0" type="checkbox">Single</p>
    <p appGroup [single]="single.checked" #group="appGroup">
      <button appItem>one</button>
      <button appItem>two</button>
      <button appItem>three</button>
    </p>
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
