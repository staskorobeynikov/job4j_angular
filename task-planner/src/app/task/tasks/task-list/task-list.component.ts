import { Component, OnInit } from '@angular/core';
import {Task} from './task.model';
import {TaskContainerService} from '../../../shared/services/task-container.service';
import {TaskStorageService} from '../../../shared/services/task-storage.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  allTasks = true;
  isEdit = false;

  constructor(
    private taskContainerService: TaskContainerService,
    private taskStore: TaskStorageService
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskStore.getAllTasks();
    console.log('onInit');
  }
  filterTasks($event) {
    this.allTasks = !this.allTasks;
    if ($event.target.checked) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
  getTaskListsSize() {
    return this.tasks.length;
  }
  deleteTaskFromArray(name: string) {
    const index = this.tasks.findIndex(t => t.name === name);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log('Задача ' + name + ' удалена');
    }
  }
  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }
}
