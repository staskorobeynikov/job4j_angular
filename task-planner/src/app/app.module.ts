import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { StatisticComponent } from './task/tasks/statistic/statistic.component';
import { ListRowComponent } from './task/tasks/list-row/list-row.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidDateDirective } from './shared/directives/valid-date.directive';
import { InputStyleDirective } from './shared/directives/input-style.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import {TaskContainerService} from './shared/services/task-container.service';
import {HelperService} from './shared/services/helper.service';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {TaskModule} from './task/task.module';
import {BrowserModule} from '@angular/platform-browser';
import {TaskListComponent} from './task/task-list/task-list.component';
import {TaskAddComponent} from './task/task-list/task-add/task-add.component';
import {EditTaskComponent} from './task/task-list/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    EditTaskComponent,
    ValidDateDirective,
    InputStyleDirective,
    MyTitleCasePipe
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    TaskModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    HelperService,
    TaskContainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
