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
    const newName = (document.getElementById('task_name') as HTMLInputElement).value;
    const newCategory = (document.getElementById('task_category') as HTMLInputElement).value;
    const newDataEnd = (document.getElementById('task_dateEnd') as HTMLInputElement).value;
    const newStatus = (document.getElementById('task_status') as HTMLInputElement).value;
    this.editEmitter.emit(new Task(newName, newCategory, this.task.dateStart, newDataEnd, newStatus));
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
