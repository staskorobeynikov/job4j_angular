import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task.model';
import {TaskContainerService} from '../../../shared/services/task-container.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: Task;
  constructor(
    private taskContainerService: TaskContainerService
  ) { }

  ngOnInit(): void {
    this.taskContainerService.dataUpdate$.subscribe(
      (data: Task) => {
        this.task = data;
      }
    );
    console.log(this.task);
    console.log('onInit');
  }
  editTask() {
    this.taskContainerService.update(this.task);
  }
  cancel() {
    this.taskContainerService.update(new Task(
      this.task.name,
      this.task.category,
      this.task.dateStart,
      this.task.dateEnd,
      this.task.status)
    );
  }

  ngOnChanges(): void {
    console.log('onChanges');
    if (this.task.status === 'Выполнено') {
      alert('Нельзя изменить выполненную задачу');
      setTimeout(() => this.cancel());
    }
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
