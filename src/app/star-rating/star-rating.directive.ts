import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective implements OnInit {

  @Input('appStarRating') numberOfStars = 3;

  private seq: IterableIterator<number> = seqGen(0);
  private starElements: HTMLSpanElement[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.starElements = [...Array(this.numberOfStars)]
      .map( () => this.createStarElement());

    const starGroup = this.renderer.createElement('section');
    this.starElements
      .forEach( starEl =>
        this.renderer.appendChild(starGroup, starEl)
      );

    this.renderer.appendChild(this.elementRef.nativeElement, starGroup);
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (! target.classList.contains('star')) { return; }
    const selectedStarPos = +target.getAttribute('data-pos');
    this.setStarGroupState(selectedStarPos);
  }

  @HostListener('dblclick', ['$event.target'])
  onDoubleClick(target: HTMLElement) {
    if (target.nodeName !== 'IMG') { return; }
    this.setStarGroupState();
  }

  private createStarElement(): HTMLSpanElement {
    const span = this.renderer.createElement('span');
    this.renderer.setAttribute(span, 'data-pos', this.seq.next().value.toString());
    this.renderer.addClass(span, 'star');
    this.setStarState(span, false);
    return span;
  }

  private setStarGroupState(selectedStarCount = -1): void {
    this.starElements
      .forEach( starEl =>
        this.setStarState(
          starEl,
          +starEl.getAttribute('data-pos') <= selectedStarCount
        )
      );
  }

  private setStarState(starEl: HTMLSpanElement, isSet: boolean): void {
    this.renderer.setProperty(starEl, 'innerHTML', isSet ? '&starf;' : '&star;');
    isSet ?
      this.renderer.addClass(starEl, 'selected') :
      this.renderer.removeClass(starEl, 'selected');
  }
}

function* seqGen(from: number): IterableIterator<number> {
  let i = from;
  while (true) {
    yield i++;
  }
}
