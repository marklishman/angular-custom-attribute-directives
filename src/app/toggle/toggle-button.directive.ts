import { Directive, HostBinding, HostListener, Optional } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleButtonDirective {

  @HostBinding('class.selected')
  buttonSelected = false;

  @HostListener('click')
  onClick() {
    this.buttonSelected = !this.buttonSelected;
  }

}
