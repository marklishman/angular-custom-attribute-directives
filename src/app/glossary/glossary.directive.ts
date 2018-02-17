import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { GlossaryTerm } from './glossary-term';

@Directive({
  selector: '[appGlossary]'
})
export class GlossaryDirective implements AfterViewInit {

  @Input('appGlossary') glossary: {[term: string]: string};
  private text: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.text = this.elementRef.nativeElement.innerText;
    const root = this.renderer.selectRootElement(this.elementRef.nativeElement);

    const terms = Object.keys(this.glossary);
    const term = new RegExp(`(${terms.join('|')})`, 'g');

    this.text
      .split(term)
      .forEach( item => {
        const section = terms.includes(item) ?
            this.createTermSpan(item) :
            this.renderer.createText(item);
        this.renderer.appendChild(root, section);
      });
  }

  private createTermSpan(term: string): HTMLSpanElement {
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(term);
    this.renderer.appendChild(span, text);
    this.renderer.setStyle(span, 'color', 'tomato');
    this.renderer.setStyle(span, 'cursor', 'pointer');
    this.renderer.setProperty(span, 'title', this.glossary[term]);
    return span;
  }
}
