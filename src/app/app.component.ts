import { Component } from '@angular/core';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  template: `
    <section *ngIf="dev">
      <a routerLink="/toggle-button" routerLinkActive="disabled">Toggle Button</a> |
      <a routerLink="/toggle-para" routerLinkActive="disabled">Toggle Para</a> |
      <a routerLink="/host" routerLinkActive="disabled">Host</a> |
      <a routerLink="/confirm" routerLinkActive="disabled">Confirm</a> |
      <a routerLink="/text-snippets" routerLinkActive="disabled">Text Snippet</a> |
      <a routerLink="/item-focus" routerLinkActive="disabled">Item Focus</a> |
      <a routerLink="/stats" routerLinkActive="disabled">Stats</a> |
      <a routerLink="/toc" routerLinkActive="disabled">TOC</a> |
      <a routerLink="/text-highlight" routerLinkActive="disabled">Text Highlight</a> |
      <a routerLink="/glossary" routerLinkActive="disabled">Glossary</a> |
      <a routerLink="/star-rating" routerLinkActive="disabled">Star Rating</a> |
      <a routerLink="/group-focus" routerLinkActive="disabled">Group Focus</a> |
      <a routerLink="/group" routerLinkActive="disabled">Group</a> |
      <a routerLink="/editable" routerLinkActive="disabled">Editable</a>
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
  dev = !environment.production;
}
