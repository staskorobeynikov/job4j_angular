import { Component, OnInit } from '@angular/core';
import {Task} from './task.model';
import {TaskContainerService} from '../../../shared/services/task-container.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Попытаться изучить Angular',
      'Работа',
      '2020-10-07 10:00',
      '2020-10-30 12:00',
      'Запланировано'
    ),
    new Task('Научиться играть на гитаре',
      'Хобби',
      '2020-04-01 21:00',
      '2021-09-22 14:00',
      'Запланировано'
    ),
    new Task('Выучить английский язык',
      'Работа',
      '2020-10-07 00:00',
      '2021-10-08 00:00',
      'Запланировано'
    ),
    new Task('Название 1',
      'Категория 1',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Выполнено'
    ),
    new Task('Название 2',
      'Категория 2',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Выполнено'
    ),
    new Task('Название 3',
      'Категория 3',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Запланировано'
    ),
    new Task('Название 4',
      'Категория 4',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Запланировано'
    ),
    new Task('Название 5',
      'Категория 5',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Просрочено'
    ),
    new Task('Название 6',
      'Категория 6',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Просрочено'
    )
  ];
  allTasks = true;
  isEdit = false;
  taskForEdit: Task;
  selectedIndex: number;

  constructor(private taskContainerService: TaskContainerService) { }

  ngOnInit(): void {
    this.taskContainerService.dataUpdate$.subscribe(
      (data: Task) => {
        this.changedTask(data);
      }
    );
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
  addNewTaskInStore(task: Task) {
    this.tasks.push(task);
  }
  getTaskForEdit(idx: number) {
    if (!this.isEdit) {
      this.isEdit = !this.isEdit;
    }
    this.taskForEdit = {...this.tasks[idx]};
    this.selectedIndex = idx;
  }
  changedTask(task: Task) {
    if (task.name === '') {
      this.isEdit = !this.isEdit;
      return;
    }
    if (this.selectedIndex > -1) {
      this.tasks[this.selectedIndex] = task;
    }
    this.isEdit = !this.isEdit;
  }
}
