import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { GlossaryTerm } from './glossary-term';

@Directive({
  selector: '[appGlossary]'
})
export class GlossaryDirective implements AfterViewInit {

  @Input('appGlossary') glossary;
  private text: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.text = this.elementRef.nativeElement.innerText;

    this.glossary.forEach(
      (glossaryTerm) => this.substituteTerms(
        glossaryTerm.term,
        glossaryTerm.definition
      )
    );

    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.text);
  }

  private substituteTerms(term: string, definition: string): void {
    const searchTerm = new RegExp(term, 'g');
    this.text = this.text.replace(
      searchTerm,
      `<span style="color: tomato; cursor: pointer;" title="${definition}">${term}</span>`
    );
  }

}
