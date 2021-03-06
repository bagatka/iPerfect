import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModuleModule } from '../../api/api-module.module';
import { A1_2015Component } from './math/2015/a1/a1_2015.component';
import { RfeCoordinateLineComponent } from './shared/rfe-coordinate-line/rfe-coordinate-line.component';
import { RfeTaskPlayComponent } from './shared/rfe-answers/rfe-task-play.component';
import { RfeTextTaskComponent } from './shared/rfe-text-task/rfe-text-task.component';
import { RfeImageAnswersTaskComponent } from './shared/rfe-image-answers-task/rfe-image-answers-task.component';


@NgModule({
  declarations: [
    RfeCoordinateLineComponent,
    RfeTaskPlayComponent,
    A1_2015Component,
    RfeTextTaskComponent,
    RfeImageAnswersTaskComponent
  ],
  exports: [
    A1_2015Component,
    RfeTextTaskComponent,
    RfeImageAnswersTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApiModuleModule
  ]
})
export class RfeTasksModuleModule {
}
