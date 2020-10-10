import { Component, OnInit } from '@angular/core';
import {findIndex} from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [
    {
      name: 'Попытаться изучить Angular',
      category: 'Работа',
      dateStart: '07.10.2020',
      dateEnd: '30.10.2020',
      status: 'Запланировано'
    },
    {
      name: 'Научиться играть на гитаре',
      category: 'Хобби',
      dateStart: '01.04.2020',
      dateEnd: '22.09.2021',
      status: 'Запланировано'
    },
    {
      name: 'Выучить английский язык',
      category: 'Работа',
      dateStart: '07.10.2020',
      dateEnd: '08.10.2021',
      status: 'Запланировано'
    },
    {
      name: 'Название 1',
      category: 'Категория 1',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Выполнено'
    },
    {
      name: 'Название 2',
      category: 'Категория 2',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Выполнено'
    },
    {
      name: 'Название 3',
      category: 'Категория 3',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Запланировано'
    },
    {
      name: 'Название 4',
      category: 'Категория 4',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Запланировано'
    },
    {
      name: 'Название 5',
      category: 'Категория 5',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Просрочено'
    },
    {
      name: 'Название 6',
      category: 'Категория 6',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Просрочено'
    }
  ];
  allTasks = true;

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
}
