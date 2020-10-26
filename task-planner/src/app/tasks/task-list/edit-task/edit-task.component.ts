import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges, OnDestroy {
  @Output() editEmitter = new EventEmitter<Task>();
  @Input() task: Task;
  constructor() { }

  ngOnInit(): void {
    console.log('onInit');
  }
  editTask() {
    this.editEmitter.emit(this.task);
  }
  cancel() {
    this.editEmitter.emit(new Task(
      this.task.name,
      this.task.category,
      this.task.dateStart,
      this.task.dateEnd,
      this.task.status
    ));
  }

  ngOnChanges(): void {
    console.log('onChanges');
    if (this.task.status === 'Выполнено') {
      alert('Нельзя изменить выполненную задачу');
      setTimeout(() => this.cancel());
    }
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
