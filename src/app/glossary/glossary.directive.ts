import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { GlossaryTerm } from './glossary-term';

@Directive({
  selector: '[appGlossary]'
})
export class GlossaryDirective implements OnInit {

  @Input('appGlossary') private text: string;
  @Input() private glossary: GlossaryTerm[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
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
