import { Directive, HostBinding, HostListener, Optional } from '@angular/core';
import { Selectable } from './Selectable';
import { GroupDirective } from './group.directive';

@Directive({
  selector: 'button [appItem]',
  exportAs: 'appButtonItem'
})
export class ButtonDirective implements Selectable {

  // TODO id from group?

  private static id = 0;
  private instanceId = ButtonDirective.id++;

  @HostBinding('class.selected')
  buttonSelected = false;

  constructor(@Optional() private group: GroupDirective) {
    if (this.group) {
      this.group.registerItem(this);
    }
  }

  @HostListener('click')
  onClick() {
    this.buttonSelected = !this.buttonSelected;
    if (this.group && this.buttonSelected) {
      this.group.itemSelected(this.instanceId);
    }
  }

  getId(): number {
    return this.instanceId;
  }

  select(selected: boolean): void {
    this.buttonSelected = selected;
  }

  isSelected(): boolean {
    return this.buttonSelected;
  }
}
