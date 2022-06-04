import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RfeCheckboxComponent } from '../../components/rfe-checkbox/rfe-checkbox.component';
import { RfeTasksModuleModule } from '../../components/tasks/rfe-tasks-module.module';

import { CentralizedTestingRoutingModule } from './centralized-testing-routing.module';
import { CentralizedTestingComponent } from './centralized-testing.component';
import { TestStateService } from './test-state.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TestInitializationComponent } from './test-initialization/test-initialization.component';
import { TestingFlowComponent } from './testing-flow/testing-flow.component';
import { TestingResultsComponent } from './testing-results/testing-results.component';
import { TestAnswerSheetComponent } from './test-answer-sheet/test-answer-sheet.component';


@NgModule({
  declarations: [
    CentralizedTestingComponent,
    WelcomePageComponent,
    TaskPageComponent,
    TestInitializationComponent,
    TestingFlowComponent,
    TestingResultsComponent,
    TestAnswerSheetComponent,
    RfeCheckboxComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CentralizedTestingRoutingModule,
    ReactiveFormsModule,
    RfeTasksModuleModule,
    MatDialogModule
  ],
  providers: [
    TestStateService
  ]
})
export class CentralizedTestingModule {
}
