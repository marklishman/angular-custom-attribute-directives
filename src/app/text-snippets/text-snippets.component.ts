import { Component } from '@angular/core';

@Component({
  selector: 'app-text-selector',
  template: `
    <header>Select some text from below</header>
    <p appTextSelector #speech="appTextSelector">
      Didn’t see the first shark for about a half-hour. Tiger. 13-footer. You know how you know that in the water, Chief?
      You can tell by lookin’ from the dorsal to the tail. What we didn’t know, was that our bomb mission was so secret,
      no distress signal had been sent. They didn’t even list us overdue for a week. Very first light, Chief, sharks come
      cruisin’ by, so we formed ourselves into tight groups. It was sorta like you see in the calendars, you know the infantry
      squares in the old calendars like the Battle of Waterloo and the idea was the shark come to the nearest man, that man
      he starts poundin’ and hollerin’ and sometimes that shark he go away… but sometimes he wouldn’t go away.
    </p>
    <ol>
      <li *ngFor="let snippet of speech.snippets">{{snippet}}</li>
    </ol>
    <a [hidden]="!speech.snippets.length"
       (click)="speech.clear(); false" href="">
      Clear
    </a>
  `,
  styles: [`
    div, p {
      max-width: 550px;
    }
  `]
})
export class TextSnippetComponent {
}

