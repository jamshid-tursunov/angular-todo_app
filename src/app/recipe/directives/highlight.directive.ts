import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[recipeHighlight]',
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    const bgGreyColor = 'rgba(0,0,0,0.05)';
    this.eleRef.nativeElement.style.backgroundColor = bgGreyColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.eleRef.nativeElement.style.backgroundColor = 'transparent';
  }

  @HostListener('mousedown') onMouseActive() {
    const bgGreyColor = 'rgba(0,0,0,0.2)';
    this.eleRef.nativeElement.style.backgroundColor = bgGreyColor;
  }

  @HostListener('mouseup') onMouseUp() {
    const bgGreyColor = 'rgba(0,0,0,0.05)';
    this.eleRef.nativeElement.style.backgroundColor = bgGreyColor;
  }
}
