import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleButtonDirective {

  @HostBinding('class.selected')
  hostSelected = false;

  @HostListener('click')
  onClick() {
    this.hostSelected = !this.hostSelected;
  }
}
