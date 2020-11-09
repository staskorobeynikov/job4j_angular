import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ValidDateDirective} from './directives/valid-date.directive';
import {InputStyleDirective} from './directives/input-style.directive';
import {MyTitleCasePipe} from './pipes/my-title-case.pipe';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    ValidDateDirective,
    InputStyleDirective,
    MyTitleCasePipe
  ],
  exports: [
    MyTitleCasePipe,
    ValidDateDirective,
    InputStyleDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class SharedModule { }
