import { Directive, HostListener, Input } from '@angular/core';

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
