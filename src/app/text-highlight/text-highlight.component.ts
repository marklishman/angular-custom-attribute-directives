import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p [appTextHighlight]="input.value" [highlightColor]="color.value">
      I walk the streets of Japan till I get lost.
      Cause it doesn't remind me of anything.
      With a graveyard tan carrying a cross.
      Cause it doesn't remind me of anything.
      I like studying faces in a parking lot.
      Cause it doesn't remind me of anything.
      I like driving backwards in the fog.
      Cause it doesn't remind me of anything.
    </p>
    <input #input
           (keyup)="0"
           type="text"
           placeholder="enter text to highlight">
    <select #color (change)="0">
      <option value="yellow" selected>Yellow</option>
      <option value="pink">Red</option>
      <option value="lightgreen">Green</option>
    </select>
  `
})
export class TextHighlightComponent {
}
