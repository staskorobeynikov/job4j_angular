import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskContainerService} from './shared/services/task-container.service';
import {HelperService} from './shared/services/helper.service';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {TaskModule} from './task/task.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    TaskModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [
    HelperService,
    TaskContainerService
  ],
  exports: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
