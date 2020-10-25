import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appValidDate]'
})
export class ValidDateDirective {

  constructor(private elRef: ElementRef) { }
  @Input() dateStart: string;
  @HostListener('input', ['$event'])
  onInput(event: Event) {
    this.elRef.nativeElement.value = (event.target as HTMLInputElement).value.replace(/[^-:0-9]+/, '');
  }
}
