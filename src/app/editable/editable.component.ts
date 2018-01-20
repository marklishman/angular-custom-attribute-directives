import { Component } from '@angular/core';

@Component({
  selector: 'app-editable',
  template: `
    <div appEditableGroup #group="editableGroup">
      <div>
        <span appEditableItem>Some text</span>
      </div>
      <div>
        <span appEditableItem>Some more text</span>
      </div>
      <div>
        <span appEditableItem>And a bit more</span>
      </div>
    </div>
    <ul>
      <li *ngFor="let item of group.items">
        {{item.value}}
      </li>
    </ul>
  `
})
export class EditableComponent {
}
