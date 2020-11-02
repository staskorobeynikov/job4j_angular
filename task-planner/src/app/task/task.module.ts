import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotesListComponent } from './tasks/notes-list/notes-list.component';

@NgModule({
  declarations: [NotesListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
