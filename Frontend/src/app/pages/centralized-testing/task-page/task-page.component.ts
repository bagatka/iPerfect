import { Component, OnInit } from '@angular/core';
import { TaskComponentMode } from 'src/app/components/tasks/task-component-base.directive';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
