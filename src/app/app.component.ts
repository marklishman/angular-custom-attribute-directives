import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <a routerLink="/selected" routerLinkActive="disabled">Selected</a> |
      <a routerLink="/text-highlight" routerLinkActive="disabled">Text Highlight</a> |
      <a routerLink="/text-snippets" routerLinkActive="disabled">Text Snippet</a> |
      <a routerLink="/confirm" routerLinkActive="disabled">Confirm</a> |
      <a routerLink="/stats" routerLinkActive="disabled">Stats</a> |
      <a routerLink="/toc" routerLinkActive="disabled">TOC</a> |
      <a routerLink="/glossary" routerLinkActive="disabled">Glossary</a> |
      <a routerLink="/multi-choice" routerLinkActive="disabled">Multi-choice</a> |
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
