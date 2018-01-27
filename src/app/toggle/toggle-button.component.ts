import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  template: `
    <header>Toggle the button below</header>
    <p>
      <button appToggle>Click me!</button>
    </p>
  `,
  styles: [`
    button.selected {
      color: White;
      background: SeaGreen ;
    }
  `]

})
export class ToggleButtonComponent {
}
