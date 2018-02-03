import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective implements OnInit {

  private stars: HTMLSpanElement[] = [];

  // TODO @Output


  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const div = this.renderer.createElement('span');

    for (let i = 0; i < 5; i++) {
      const span = this.renderer.createElement('span');
      this.renderer.setProperty(span, 'innerHTML', '&star;');
      this.renderer.setAttribute(span, 'data-pos', i.toString());
      this.renderer.addClass(span, 'star');
      this.renderer.appendChild(div, span);
      this.stars.push(span);
    }

    this.renderer.appendChild(this.elementRef.nativeElement, div);
  }

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    if (target.classList.contains('star')) {
      const pos = target.getAttribute('data-pos');

      for (let i = 0; i < 5; i++) {
        const star = this.stars[i];
        if (i <= pos) {
          this.renderer.setProperty(star, 'innerHTML', '&starf;');
          this.renderer.addClass(star, 'selected');
        } else {
          this.renderer.setProperty(star, 'innerHTML', '&star;');
          this.renderer.removeClass(star, 'selected');
        }
      }
    }
  }
}
