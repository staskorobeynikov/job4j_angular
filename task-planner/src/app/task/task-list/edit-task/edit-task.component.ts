import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {TaskContainerService} from '../../../shared/services/task-container.service';
import {TaskStorageService} from '../../../shared/services/task-storage.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnChanges, OnDestroy {
  editedTask: Task;
  constructor(
    private taskContainerService: TaskContainerService,
    private route: ActivatedRoute,
    private taskStore: TaskStorageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const byId = this.taskStore.getById(+params.id);
      if (byId.status === 'Выполнено') {
        alert('Нельзя изменить выполненную задачу');
        setTimeout(() => this.cancel());
      } else {
        this.editedTask = new Task(
          byId.name,
          byId.category,
          byId.dateStart,
          byId.dateEnd,
          byId.status,
          byId.id
        );
      }
    });
  }
  editTask() {
    this.taskContainerService.dataUpdate$.subscribe((data: Task) => {
      this.taskStore.updateTask(data.id, data);
      this.location.back();
    });
    this.taskContainerService.update(this.editedTask);
  }
  cancel() {
    this.location.back();
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }
}
