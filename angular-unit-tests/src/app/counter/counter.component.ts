import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})

export class CounterComponent {
  counter = 0;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  @Output() counterEmitter = new EventEmitter<number>();

  increment(): void {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }

  decrement(): void {
    this.counter--;
  }
}
