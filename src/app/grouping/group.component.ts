import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `
    <p>
      <button appItem #bt1="appButtonItem">one</button>
      <button appItem #bt2="appButtonItem">two</button>
      <button appItem #bt2="appButtonItem">three</button>
    </p>
    <p appGroup [single]="true" #group="appGroup">
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
