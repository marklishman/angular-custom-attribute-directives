import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"]'
})
export class InputDirective {

  private border: boolean;

  @HostBinding('style.outline')
  private outline = 'none';

  @HostBinding('style.border')
  private get borderStyle(): string {
    return this.border ? '2px solid OrangeRed' : '';
  }

  @HostBinding('hidden')
  private hidden = true;

  @HostListener('focus')
  private onFocus() {
    this.border = true;
  }

  @HostListener('blur')
  private onBlur() {
    this.border = false;
  }

  @HostListener('keydown', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.border = false;
    }
  }

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  @HostListener('contextmenu', ['$event'])
  private onMouseClicks() {
    if (event.type === 'contextmenu') {
      alert('Context menu is not supported');
      return false;
    }
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: HTMLElement) {
    if (target.id === 'show') {
      this.hidden = !this.hidden;
    }
  }
}
