import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStats]'
})
export class StatsDirective implements AfterViewInit {

  @Input('appStats') text: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const stats = `Words: ${this.text.split(' ').length}\n` +
      `Characters (with spaces): ${this.text.length}\n` +
      `Characters (no spaces): ${this.text.replace(/ /g, '').length} `;
    this.renderer.setProperty(this.elementRef.nativeElement, 'title', stats);
  }

}
