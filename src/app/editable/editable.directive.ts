import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDirective {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('click')
  onClick() {
    const span = this.renderer.selectRootElement('span');
    this.renderer.setStyle(this.elementRef.nativeElement, 'hidden', true);

    const input = this.renderer.createElement('input');
    this.renderer.appendChild(this.elementRef.nativeElement, input);
  }

}
