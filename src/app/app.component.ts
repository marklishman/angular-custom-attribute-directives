import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <a routerLink="/selected" routerLinkActive="disabled">Selected</a> |
      <a routerLink="/text-highlight" routerLinkActive="disabled">Text Highlight</a> |
    </p>
    <router-outlet></router-outlet>`,
  styles: [`
    .disabled {
      pointer-events: none;
      cursor: default;
      color: #404040;
      text-decoration: none;
    }`]
})
export class AppComponent {
}
