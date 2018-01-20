import { Directive } from '@angular/core';
import { EditableItemDirective } from './editable-item.directive';

@Directive({
  selector: '[appEditableGroup]',
  exportAs: 'appEditableGroup, editableGroup'
})
export class EditableGroupDirective {

  items: EditableItemDirective[] = [];

}
