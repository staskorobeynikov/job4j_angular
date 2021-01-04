import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // показать элементы
      this.viewContainer.createEmbeddedView(this.temlateRef)
    } else {
      // скрыть
      this.viewContainer.clear()
    }
  }

  constructor(private temlateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
