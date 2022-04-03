import { Directive, Input, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
@Input('appHideHeader') header: any;
private headerHeight = isPlatform('android') ? 44 : 56;
private children: any;
private segment: any;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
  ) { }
  ngAfterViewInit(): void {
    this.segment = this.segment.el;
    this.header = this.header.el;
    this.children = this.header.children;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('ionScroll', ['$event']) onContentScroll(event: any) {
    const scrollTop: number = event.detail.scrollTop;
    let newPosition = -scrollTop;

    if (newPosition < -this.headerHeight) {
      newPosition = -this.headerHeight;
    }

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.segment, 'top', newPosition + 'px');
    });
  }
}


