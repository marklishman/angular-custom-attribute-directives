import { Directive, ElementRef, HostBinding, HostListener, Optional, Renderer2 } from '@angular/core';
import { GroupComponent } from './group.component';
import { Selectable } from './Selectable';
import { Subject } from 'rxjs/Subject';
import { GroupDirective } from './group.directive';

@Directive({
  selector: 'button [appItem]'
})
export class ButtonDirective implements Selectable {

  private static id = 0;
  private instanceId = ButtonDirective.id++;

  // TODO notify
  // private selectedEvent: Subject<number> = new Subject<number>();

  @HostBinding('class.selected')
  buttonSelected = false;

  constructor(@Optional() private group: GroupDirective) {
    if (this.group) {
      this.group.registerItem(this);
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLButtonElement) {
    this.buttonSelected = !this.buttonSelected;
    // this.selectedEvent.next(this.instanceId);

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
}
