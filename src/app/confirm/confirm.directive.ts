import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @Input('appConfirm') functionToRun = () => {};

  @HostListener('click')
  confirm() {
    if(window.confirm('Are you sure?')) {
      this.functionToRun();
    }
  }

}
