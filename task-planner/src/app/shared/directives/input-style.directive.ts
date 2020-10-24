import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInputStyle]'
})
export class InputStyleDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'green');
  }
  @HostListener('input') onInput() {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-color', 'blue');
  }
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'border-color', null);
  }
}
