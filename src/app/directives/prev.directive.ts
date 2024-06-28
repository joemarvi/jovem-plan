import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
  standalone: true
})
export class PrevDirective {

  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('click')
  nextFunc() {
    const slider = this.el.nativeElement.closest('.slider-wrap').querySelector('.slider-main');
    slider.scrollLeft -= 324; // Ajuste o valor conforme necessário
  }

}
