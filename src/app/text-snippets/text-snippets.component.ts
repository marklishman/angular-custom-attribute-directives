import { Component } from '@angular/core';

@Component({
  selector: 'app-text-selector',
  template: `
    <header [hidden]="quote.snippets.length">Select some of the text below</header>
    <header [hidden]="!quote.snippets.length">Select some more to add to the list</header>
    <p appTextSelector
       #quote="appTextSelector"
       (selected)="onSelected($event)">
      {{movieQuote}}
    </p>
    <p>Last selection: <em>{{text || 'none'}}</em></p>
    <div>
      <a [hidden]="!quote.snippets.length"
         (click)="quote.clear(); false" href="">
        Clear
      </a>
      <ol>
        <li *ngFor="let snippet of quote.snippets">{{snippet}}</li>
      </ol>
    </div>
  `,
  styles: [`
    em {
      color: Green;
      font-style: normal;
    }
  `]
})
export class TextSnippetComponent {
  movieQuote = `
      Didn’t see the first shark for about a half-hour. Tiger. 13-footer.
      You know how you know that in the water, Chief? You can tell by lookin’
      from the dorsal to the tail. What we didn’t know, was that our bomb
      mission was so secret, no distress signal had been sent. They didn’t
      even list us overdue for a week. Very first light, Chief, sharks come
      cruisin’ by, so we formed ourselves into tight groups. It was sorta
      like you see in the calendars, you know the infantry squares in the
      old calendars like the Battle of Waterloo and the idea was the shark
      come to the nearest man, that man he starts poundin’ and hollerin’
      and sometimes that shark he go away… but sometimes he wouldn’t go away.`;

  text: string;

  onSelected(text: string) {
    this.text = text;
  }

}
