import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleButtonDirective {

  @HostBinding('class.selected')
  private hostSelected = false;

  @HostListener('click')
  private onClick() {
    this.hostSelected = !this.hostSelected;
  }
}
