import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Output() editEmitter = new EventEmitter<Task>();
  @Input() task: Task;
  constructor() { }

  ngOnInit(): void {
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
}
