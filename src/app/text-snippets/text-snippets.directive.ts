import { Directive, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appTextSelector]',
  exportAs: 'appTextSelector'
})
export class TextSnippetDirective {

  private _snippets: string[] = [];

  @HostListener('mouseup')
  onSelected() {
    const text = window.getSelection().toString();
    if (text) {
      this._snippets.push(text);
    }
  }

  get snippets(): string[] {
    return this._snippets;
  }

  clear(): void {
    this._snippets =[];
  }

}
