import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '.hover-container'
})
export class DivHostDirective {

  private keepColor: boolean;

  @HostBinding('style.background-color')
  private color;

  @HostListener('click', ['$event'])
  @HostListener('mouseover', ['$event'])
  private onMouseAction(event: MouseEvent) {
    this.color = 'LightBlue';
    if (event.type === 'click') {
      this.keepColor = true;
    }
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    if (!this.keepColor) {
      this.color = 'White';
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: HTMLElement) {
    if (target.id === 'clear') {
      this.keepColor = false;
      this.onMouseLeave();
    }
  }
}
