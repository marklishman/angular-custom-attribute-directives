import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <a routerLink="/selected" routerLinkActive="disabled">Selected</a> |
      <a routerLink="/text-highlight" routerLinkActive="disabled">Text Highlight</a> |
      <a routerLink="/text-snippets" routerLinkActive="disabled">Text Snippet</a> |
      <a routerLink="/confirm" routerLinkActive="disabled">Confirm</a> |
      <a routerLink="/stats" routerLinkActive="disabled">Stats</a> |
      <a routerLink="/toc" routerLinkActive="disabled">TOC</a> |
      <a routerLink="/glossary" routerLinkActive="disabled">Glossary</a> |
      <a routerLink="/star-rating" routerLinkActive="disabled">Star Rating</a> |
      <a routerLink="/editable" routerLinkActive="disabled">Editable</a> |
      <a routerLink="/item-focus" routerLinkActive="disabled">Item Focus</a> |
      <a routerLink="/group-focus" routerLinkActive="disabled">Group Focus</a> |
      <a routerLink="/group" routerLinkActive="disabled">Group</a> |
    </section>
    <router-outlet></router-outlet>`,
  styles: [`
    section {
      margin: 10px 0;
    }
    .disabled {
      pointer-events: none;
      cursor: default;
      color: #404040;
      text-decoration: none;
    }`]
})
export class AppComponent {
}
