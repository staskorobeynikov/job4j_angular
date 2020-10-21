import { Component, OnInit } from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Попытаться изучить Angular',
      'Работа',
      '07.10.2020',
      '30.10.2020',
      'Запланировано'
    ),
    new Task('Научиться играть на гитаре',
      'Хобби',
      '01.04.2020',
      '22.09.2021',
      'Запланировано'
    ),
    new Task('Выучить английский язык',
      'Работа',
      '07.10.2020',
      '08.10.2021',
      'Запланировано'
    ),
    new Task('Название 1',
      'Категория 1',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'
    ),
    new Task('Название 2',
      'Категория 2',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'
    ),
    new Task('Название 3',
      'Категория 3',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Запланировано'
    ),
    new Task('Название 4',
      'Категория 4',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Запланировано'
    ),
    new Task('Название 5',
      'Категория 5',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Просрочено'
    ),
    new Task('Название 6',
      'Категория 6',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Просрочено'
    )
  ];
  allTasks = true;
  isEdit = false;
  taskForEdit: Task;
  selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    console.log('Задача создана');
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
  getTaskForEdit(task: Task) {
    this.isEdit = !this.isEdit;
    this.taskForEdit = task;
    this.selectedIndex = this.tasks.findIndex(t => t.name === task.name);
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
