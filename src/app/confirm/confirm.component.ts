import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    <p>
      <button [appConfirm]="setMessage('Button confirmed')">Do Something</button>
    </p>
    <p>
      <a [appConfirm]="setMessage('Link confirmed')" href="#/confirm">Click me</a>
    </p>
    <h2>{{message}}</h2>
  `,
  styles: ['h2 {color: green}']
})
export class ConfirmComponent {
  message: string;

  setMessage(message: string) {
    return () => this.message = message;
  }
}
