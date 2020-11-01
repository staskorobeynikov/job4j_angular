import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Task} from '../../task/tasks/task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskContainerService {
  private dataSource = new Subject<Task>();
  dataUpdate$ = this.dataSource.asObservable();
  constructor() { }

  update(data: Task) {
    this.dataSource.next(data);
  }
}
