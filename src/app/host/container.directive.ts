import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'section.container'
})
export class ContainerDirective {

  private keepColor: boolean;

  @HostBinding('style.background-color')
  private color;

  @HostListener('mouseover')
  private onMouseOver() {
    this.color = 'LightBlue';
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    if (!this.keepColor) {
      this.color = 'White';
    }
  }

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  @HostListener('contextmenu', ['$event'])
  private onMouseAction(event: MouseEvent) {
    if (event.type === 'click') {
      this.keepColor = true;
    } else if (event.type === 'dblclick') {
      this.keepColor = false;
    } else {
      alert('Context menu is not supported');
      return false;
    }
  }
}
