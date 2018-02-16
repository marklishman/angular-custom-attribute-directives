import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      Enter some text such as 'rule' or 'Club' to highlight (case sensitive)
    </header>
    <div>
      <input #text
             (keyup)="0"
             type="text"
             placeholder="enter text to highlight">
      <select #color (change)="0">
        <option value="yellow" selected>Yellow</option>
        <option value="pink">Red</option>
        <option value="lightgreen">Green</option>
      </select>
    </div>
    <p [appTextHighlight]="text.value" [highlightColor]="color.value">
      {{movieQuote}}
    </p>
  `
})
export class TextHighlightComponent {
  movieQuote = `
      The first rule of Fight Club is: You do not talk about Fight Club.
      The second rule of Fight Club is: You do not talk about Fight Club.
      Third rule of Fight Club: someone yells stop, goes limp, taps out, the fight is over.
      Fourth rule: only two guys to a fight. Fifth rule: one fight at a time, fellas.
      Sixth rule: no shirts, no shoes.
      Seventh rule: fights will go on as long as they have to.
      And the eighth and final rule: if this is your first night at Fight Club,
      you have to fight.
  `;
}
