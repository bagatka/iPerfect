import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksServerlessService } from './tasks-serverless.service';
import { TasksService } from './tasks.service';


@NgModule({
  providers: [
    {
      provide: TasksService, useClass: TasksServerlessService
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ApiModuleModule { }
