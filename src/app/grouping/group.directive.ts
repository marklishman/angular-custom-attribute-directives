import { Directive, Input } from '@angular/core';
import { Selectable } from './Selectable';

@Directive({
  selector: '[appGroup]',
  exportAs: 'appGroup'
})
export class GroupDirective {

  private items: Selectable[] = [];

  @Input('single') singleSelection = false;

  registerItem(item: Selectable): void {
    this.items.push(item);
  }

  itemSelected(id: number): void {
    if (this.singleSelection) {
      this.items
        .filter( i => i.getId() !== id)
        .forEach(i => i.select(false));
    }
  }

  get selectedItems(): number[] {
    return this.items
      .filter(i => i.isSelected())
      .map( i => i.getId());
  }
}
