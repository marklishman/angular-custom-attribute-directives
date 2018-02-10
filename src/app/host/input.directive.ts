import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"]'
})
export class InputDirective {

  private border: boolean;

  @HostBinding('style.border')
  private get borderStyle(): string {
    return this.border ? '2px solid OrangeRed' : '';
  }

  @HostBinding('disabled')
  private disabled = false;

  @HostBinding('hidden')
  private hidden = false;

  @HostListener('click', ['$event'])
  private onClick() {
    event.stopPropagation();
  }

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

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: HTMLElement) {
    if (target.id === 'lock') {
      this.disabled = !this.disabled;
    } else if (target.id === 'show') {
      this.hidden = !this.hidden;
    }
  }
}
