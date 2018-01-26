import { Directive } from '@angular/core';
import { Selectable } from './Selectable';

@Directive({
  selector: '[appGroup]'
})
export class GroupDirective {
  private items: Selectable[] = [];

  registerItem(item: Selectable): void {
    this.items.push(item);
  }

  itemSelected(id: number): void {
    this.items
      .filter( i => i.getId() !== id)
      .forEach(i => i.select(false));
  }
}
