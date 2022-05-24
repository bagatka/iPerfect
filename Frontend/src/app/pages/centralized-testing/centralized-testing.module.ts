import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RfeTasksModuleModule } from '../../components/tasks/rfe-tasks-module.module';

import { CentralizedTestingRoutingModule } from './centralized-testing-routing.module';
import { CentralizedTestingComponent } from './centralized-testing.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TestInitializationComponent } from './test-initialization/test-initialization.component';


@NgModule({
  declarations: [
    CentralizedTestingComponent,
    WelcomePageComponent,
    TaskPageComponent,
    TestInitializationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CentralizedTestingRoutingModule,
    ReactiveFormsModule,
    RfeTasksModuleModule
  ]
})
export class CentralizedTestingModule {
}
