import { Component } from '@angular/core'
import {boxAnimation} from "./app.animations"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start'
  visible = true

  animate(): void {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStarted(event: AnimationEvent): void {
    console.log('animationStarted', event)
  }

  animationDone(event: AnimationEvent): void {
    console.log('animationDone', event)
  }
}
