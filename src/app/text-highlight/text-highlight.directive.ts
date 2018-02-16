import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective implements OnChanges {

  @Input('appTextHighlight') textToHighlight: string;
  @Input() highlightColor = 'yellow';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.elementRef.nativeElement.innerText) {
      return;
    }

    const innerText = this.elementRef.nativeElement.innerText;
    const html = innerText
      .split(this.textToHighlight)
      .join(`<mark style="background-color: ${this.highlightColor};">${this.textToHighlight}</mark>`);
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
}
