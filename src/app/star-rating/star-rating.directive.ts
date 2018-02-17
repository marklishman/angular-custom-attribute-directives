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
    if (! target.classList.contains('star')) {
      return;
    }

    const selectedStarPos = +target.getAttribute('data-pos');
    this.starElements
      .forEach( starEl => {
          +starEl.getAttribute('data-pos') <= selectedStarPos ?
            this.selectStar(starEl) :
            this.unselectStar(starEl);
        }
      );
  }

  private createStarElement(): HTMLSpanElement {
    const span = this.renderer.createElement('span');
    this.renderer.setAttribute(span, 'data-pos', this.seq.next().value.toString());
    this.renderer.addClass(span, 'star');
    this.unselectStar(span);
    return span;
  }

  private selectStar(starEl: HTMLSpanElement): void {
    this.setStarChar(starEl, '&starf;');
    this.renderer.addClass(starEl, 'selected');
  }

  private unselectStar(starEl: HTMLSpanElement): void {
    this.setStarChar(starEl, '&star;');
    this.renderer.removeClass(starEl, 'selected');
  }

  private setStarChar(starEl: HTMLSpanElement, starChar: string): void {
    this.renderer.setProperty(starEl, 'innerHTML', starChar);
  }
}

function* seqGen(from: number): IterableIterator<number> {
  let i = from;
  while (true) {
    yield i++;
  }
}
