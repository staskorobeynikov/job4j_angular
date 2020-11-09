import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotesListComponent } from './tasks/notes-list/notes-list.component';
import {TaskListComponent} from './task-list/task-list.component';
import {StatisticComponent} from './tasks/statistic/statistic.component';
import {ListRowComponent} from './tasks/list-row/list-row.component';
import {TaskAddComponent} from './task-list/task-add/task-add.component';
import {EditTaskComponent} from './task-list/edit-task/edit-task.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NotesListComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class TaskModule { }
