import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appValidDate]'
})
export class ValidDateDirective {
  @Input() dateStart: string;
  @Output() dateStartChange = new EventEmitter<string>();

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('input', ['event'])
  onInput(event: Event) {
    this.dateStart = this.elRef.nativeElement.value.replace(/[^-:0-9]+/, '');
    this.dateStartChange.emit(this.dateStart);
  }
}
