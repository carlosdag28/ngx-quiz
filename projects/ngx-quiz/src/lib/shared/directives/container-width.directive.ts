import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[containerWidth]'
})
export class ContainerWidthDirective implements AfterViewInit, OnDestroy {
  // sm: rem-calc(576),
  private resizeObserver: ResizeObserver;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver((event: ResizeObserverEntry[]) => {
      let width = event[0].target.getBoundingClientRect().width;
      if (width > 576) {
        this.renderer.addClass(this.element.nativeElement, 'partial-width');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'partial-width');
      }
    });
    this.resizeObserver.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver.unobserve(this.element.nativeElement);
  }
}
