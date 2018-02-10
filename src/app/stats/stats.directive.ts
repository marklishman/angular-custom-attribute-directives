import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStats]'
})
export class StatsDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const text = this.elementRef.nativeElement.innerText;
    const stats = `Words: ${text.split(' ').length}\n` +
      `Characters (with spaces): ${text.length}\n` +
      `Characters (no spaces): ${text.replace(/ /g, '').length} `;
    this.renderer.setProperty(this.elementRef.nativeElement, 'title', stats);
  }

}
