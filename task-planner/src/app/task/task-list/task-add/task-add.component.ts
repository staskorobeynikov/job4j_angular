import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../task.model';
import {TaskStorageService} from '../../../shared/services/task-storage.service';


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
  constructor(
    private taskStore: TaskStorageService
  ) { }

  ngOnInit(): void {
  }
  addNewTask() {
    this.taskStore.addTask(new Task(
      this.name, this.category, this.dateStart, this.dateEnd, this.status
    )).subscribe((task) => {
      console.log('Задача с именем: ' + task.name + ' была создана');
    });
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
  }
}
