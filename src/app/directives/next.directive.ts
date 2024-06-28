import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
  standalone: true
})
export class NextDirective {

  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('click')
  nextFunc() {
    const slider = this.el.nativeElement.closest('.slider-wrap').querySelector('.slider-main');
    slider.scrollLeft += 324; // Ajuste o valor conforme necessário
  }
}
