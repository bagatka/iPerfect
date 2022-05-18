import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';


@NgModule({
  providers: [
    TasksService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ApiModuleModule { }
