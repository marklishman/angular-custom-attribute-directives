import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'form[appFocus]'
})
export class GroupFocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const inputs = this.elementRef.nativeElement.getElementsByTagName('input');
    const input = <HTMLInputElement> Array.from(inputs)
      .find( (inp: HTMLInputElement) => !inp.disabled && !inp.value);

    if (input) {
      input.focus();
    }
  }
}
