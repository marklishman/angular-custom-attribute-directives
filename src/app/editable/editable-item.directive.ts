import { ApplicationRef, Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { EditableGroupDirective } from './editable-group.directive';

enum Mode {
  Edit,
  View
}

@Directive({
  selector: '[appEditableItem]'
})
export class EditableItemDirective implements OnInit {

  private mode: Mode = Mode.View;
  private input: HTMLInputElement;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private applicationRef: ApplicationRef,
              private group: EditableGroupDirective) {
    if (this.group) {
      this.group.items.push(this);
    }
  }

  ngOnInit(): void {
    this.input = this.renderer.createElement('input');
    this.setInputValue();
  }

  @HostListener('click')
  onClick(): void {
    if (this.mode === Mode.Edit) {
      return;
    }
    this.setInputValue();
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', '');
    this.renderer.appendChild(this.elementRef.nativeElement, this.input);

    // const link = this.createLinkElement('Save');
    // this.renderer.appendChild(this.elementRef.nativeElement, link);

    this.mode = Mode.Edit;
  }

  @HostListener('keyup.enter')
  onReturn(): void {
    this.applicationRef.tick();
  }

  get value() {
    return this.input.value;
  }

  private setInputValue() {
    const value = this.elementRef.nativeElement.innerText;
    this.renderer.setProperty(this.input, 'value', value);
  }

  private createLinkElement(text: string, url?: string) {
    const href = url || '#';
    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', href);
    const linkText = this.renderer.createText(text);
    this.renderer.appendChild(link, linkText);
    return link;
  }
}
