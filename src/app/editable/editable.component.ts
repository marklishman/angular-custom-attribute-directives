import { Component } from '@angular/core';

@Component({
  selector: 'app-editable',
  template: `
    <p appEditable>
      <span>Some text</span>
    </p>
  `,
  styles: []
})
export class EditableComponent {
}
