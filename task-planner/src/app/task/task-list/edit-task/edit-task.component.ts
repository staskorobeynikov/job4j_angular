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
      this.taskStore.getById(+params.id).subscribe((data: Task) => {
        if (data.status === 'Выполнено') {
          alert('Нельзя изменить выполненную задачу');
          setTimeout(() => this.cancel());
        } else {
          this.editedTask = data;
        }
      });
    });
  }

  editTask() {
    this.taskStore.updateTask(this.editedTask.id, this.editedTask).subscribe(() => {
      this.location.back();
    });
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
