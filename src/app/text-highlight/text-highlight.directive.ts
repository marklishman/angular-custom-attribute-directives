import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

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
    if (!this.elementRef.nativeElement.innerText) {
      return;
    }

    const text = this.elementRef.nativeElement.innerText;
    const searchTerm = new RegExp(this.textToHighlight, 'g');
    const color = this.highlightColor || 'yellow';
    const html = text.replace(
      searchTerm,
      `<mark style="background-color: ${color};">${this.textToHighlight}</mark>`
    );
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
}
