import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    <header>Click the button and link to see the confirmation message</header>
    <p>
      <button [appConfirm]="setMessage('Button confirmed')">Do Something</button>
    </p>
    <p>
      <a [appConfirm]="setMessage('Link confirmed')" href="#/confirm">Click me</a>
    </p>
    <h3>{{message}}</h3>
  `
})
export class ConfirmComponent {
  message: string;

  setMessage(message: string) {
    return () => this.message = message;
  }
}
