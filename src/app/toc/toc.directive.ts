import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToc]'
})
export class TocDirective implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    let toc = 'Table of Contents';
    const headingElements = this.elementRef.nativeElement.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for (let i = 0; i < headingElements.length; i++) {
      const heading = headingElements.item(i);
      const level = heading.tagName[1];
      toc += '\n' + ' '.repeat(level) + heading.textContent;
    }
    this.renderer.setProperty(this.elementRef.nativeElement, 'title', toc);
  }

}
