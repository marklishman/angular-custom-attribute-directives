import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStats]'
})
export class StatsDirective implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const text = this.elementRef.nativeElement.innerText;
    const stats = `Words: ${text.split(' ').length}\n` +
      `Characters (with spaces): ${text.length}\n` +
      `Characters (no spaces): ${text.replace(/ /g, '').length} `;
    this.renderer.setProperty(this.elementRef.nativeElement, 'title', stats);
  }

}
