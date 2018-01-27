import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"]'
})
export class InputHostDirective {

  private _border: boolean;
  private _disabled: boolean;

  @HostBinding('style.border')
  private get border(): string {
    return this._border ? '2px solid OrangeRed' : '';
  }

  @HostBinding('disabled')
  private get disable(): boolean {
    return this._disabled;
  }

  @HostListener('focus')
  private onClick() {
    this._border = true;
  }

  @HostListener('blur')
  private onBlur() {
    this._border = false;
  }

  @HostListener('keydown', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this._border = false;
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: HTMLElement) {
    if (target.id === 'disable') {
      this._disabled = !this._disabled;
    }
  }
}
