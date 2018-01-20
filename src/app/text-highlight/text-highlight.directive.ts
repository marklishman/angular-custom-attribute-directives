import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnChanges {

  @Input('appTextHighlight') textToHighlight: string;
  @Input() highlightColor: string;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const text = this.elementRef.nativeElement.innerText;
    const searchTerm = new RegExp(this.textToHighlight, 'g');
    const color = this.highlightColor || 'yellow';
    const html = text.replace(searchTerm, `<span style="background-color: ${color};">${this.textToHighlight}</span>`);
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
}
