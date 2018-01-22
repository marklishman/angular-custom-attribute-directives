import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @Input('appConfirm') message = 'Are you sure?';
  @Input() functionToRun = () => {};

  @HostListener('click')
  confirm() {
    if(window.confirm(this.message)) {
      this.functionToRun();
    }
  }

}
