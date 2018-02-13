import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appFocus]'
})
export class ItemFocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const inputField: HTMLInputElement = this.elementRef.nativeElement;
    inputField.focus();
  }
}
