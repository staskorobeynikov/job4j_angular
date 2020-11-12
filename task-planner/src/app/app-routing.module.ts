import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotesListComponent} from './task/tasks/notes-list/notes-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {EditTaskComponent} from './task/task-list/edit-task/edit-task.component';
import {TaskListComponent} from './task/task-list/task-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {GuestGuard} from './guest.guard';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard], children: [
    {path: ':id', component: EditTaskComponent}
    ]
  },
  {path: 'notes', component: NotesListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [GuestGuard]}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
