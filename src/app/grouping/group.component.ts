import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  template: `
    <p appGroup>
      <button #bt1 appItem>one</button>
      <button #bt1 appItem>two</button>
      <button #bt1 appItem>three</button>
    </p>
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
