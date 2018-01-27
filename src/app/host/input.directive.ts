import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"]'
})
export class InputDirective {

  private border: boolean;
  private disabled: boolean;

  @HostBinding('style.border')
  private get borderStyle(): string {
    return this.border ? '2px solid OrangeRed' : '';
  }

  @HostBinding('disabled')
  private get isDisabled(): boolean {
    return this.disabled;
  }

  @HostListener('focus')
  private onClick() {
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
    if (target.id === 'disable') {
      this.disabled = !this.disabled;
    }
  }
}
