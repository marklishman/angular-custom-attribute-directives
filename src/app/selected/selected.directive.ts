import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective {

  private isSelected = false;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick() {
    this.isSelected = !this.isSelected;
    this.isSelected ?
      this.renderer.addClass(this.elementRef.nativeElement, 'selected') :
      this.renderer.removeClass(this.elementRef.nativeElement, 'selected');
  }

}
