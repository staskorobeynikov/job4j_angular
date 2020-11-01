import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  status = 'Запланировано';
  @Output() addTaskEmitter = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewTask() {
    const task: Task = new Task(
      this.name, this.category, this.dateStart, this.dateEnd, this.status
    );
    this.addTaskEmitter.emit(task);
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
  }
}
