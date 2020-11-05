import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from './task/tasks/task-list/task-list.component';
import {NotesListComponent} from './task/tasks/notes-list/notes-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {EditTaskComponent} from './task/tasks/task-list/edit-task/edit-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent, children: [
    {path: ':id', component: EditTaskComponent}
    ]
  },
  {path: 'notes', component: NotesListComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
