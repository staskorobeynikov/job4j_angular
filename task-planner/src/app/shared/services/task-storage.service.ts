import {Injectable} from '@angular/core';
import {Task} from '../../task/tasks/task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  tasks: Task[] = [
    new Task('Попытаться изучить Angular',
      'Работа',
      '2020-10-07 10:00',
      '2020-10-30 12:00',
      'Запланировано',
      1
    ),
    new Task('Научиться играть на гитаре',
      'Хобби',
      '2020-04-01 21:00',
      '2021-09-22 14:00',
      'Запланировано',
      2
    ),
    new Task('Выучить английский язык',
      'Работа',
      '2020-10-07 00:00',
      '2021-10-08 00:00',
      'Запланировано',
      3
    ),
    new Task('Название 1',
      'Категория 1',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Выполнено',
      4
    ),
    new Task('Название 2',
      'Категория 2',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Выполнено',
      5
    ),
    new Task('Название 3',
      'Категория 3',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Запланировано',
      6
    ),
    new Task('Название 4',
      'Категория 4',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Запланировано',
      7
    ),
    new Task('Название 5',
      'Категория 5',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Просрочено',
      8
    ),
    new Task('Название 6',
      'Категория 6',
      '2018-08-10 18:15',
      '2018-08-10 20:15',
      'Просрочено',
      9
    )
  ];
  constructor() { }

  getById(id: number) {
    return this.tasks.find(t => t.id === id);
  }
  getAllTasks() {
    return this.tasks;
  }
  updateTask(id: number, task: Task) {
    const index = this.tasks.findIndex(t => t.id === id);
    this.tasks[index] = task;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
  getMaxId() {
    return this.tasks.reduce((max, item) => max > item.id ? max : item.id, 0);
  }
}
