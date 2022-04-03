import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appStickySegment]'
})
export class StickySegmentDirective {
  @Input('appStickySegment') segment: any;
  private headerHeight = isPlatform('android') ? 44 : 56;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
  ) { }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    this.segment = this.segment.el;
  }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('androidScroll', ['$event']) onContentScroll({ $event }: { $event: any}): void {
    const scrollTop: number = $event.detail.scrollTop;
    let newPosition = -scrollTop;

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.segment, 'top', newPosition + 'px');
    });
  }
}
