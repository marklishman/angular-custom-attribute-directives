import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'section.container'
})
export class ContainerDirective {

  private colors = colorGenerator();
  private boxColor = null;

  @HostBinding('style.background-color')
  private color: string;

  @HostBinding('title')
  private get title() {
    return `${this.color ? this.color : 'Blank'} box`;
  }

  @HostListener('mouseover')
  private onMouseOver() {
    this.color = this.boxColor;
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.color = null;
  }

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  @HostListener('contextmenu', ['$event'])
  private onMouseClicks(event: MouseEvent) {
    if (event.type === 'click') {
      this.boxColor = this.colors.next().value;
    } else if (event.type === 'dblclick') {
      this.boxColor = null;
    } else if (event.type === 'contextmenu') {
      alert('Context menu is not supported');
      return false;
    }
    this.onMouseOver();
  }
}

function* colorGenerator(): IterableIterator<String> {
  const colors = ['LightBlue', 'Pink', 'LightGreen'];
  let i = -1;
  while (true) {
    i < colors.length - 1 ? i++ : i = 0;
    yield colors[i];
  }
}
