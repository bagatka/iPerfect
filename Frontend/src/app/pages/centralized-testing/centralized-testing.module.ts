import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../api/tasks.service';
import { A1_2015Component } from '../../components/tasks/math/2015/a1/a1_2015.component';

import { CentralizedTestingRoutingModule } from './centralized-testing-routing.module';
import { CentralizedTestingComponent } from './centralized-testing.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TaskPageComponent } from './task-page/task-page.component';


@NgModule({
  declarations: [
    CentralizedTestingComponent,
    WelcomePageComponent,
    TaskPageComponent,
    A1_2015Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CentralizedTestingRoutingModule
  ],
  providers: [
    TasksService
  ]
})
export class CentralizedTestingModule { }
