import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextSelector]',
  exportAs: 'appTextSelector'
})
export class TextSnippetDirective {

  private _snippets: string[] = [];

  @Output() selected = new EventEmitter<string>();

  @HostListener('mouseup')
  onSelected() {
    const text = window.getSelection().toString();
    if (text) {
      this._snippets.push(text);
      this.selected.emit(text);
    }
  }

  get snippets(): string[] {
    return this._snippets;
  }

  clear(): void {
    this._snippets = [];
  }

}
