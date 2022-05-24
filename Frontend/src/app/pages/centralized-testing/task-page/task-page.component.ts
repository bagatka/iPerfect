import { Component, OnInit } from '@angular/core';
import { Task, TaskComponentMode } from 'src/app/components/tasks/task-component-base.directive';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  identityA2: Task = {
    id: 'A2',
    catalog: '2015',
    subject: 'math'
  };

  identityA3: Task = {
    id: 'A3',
    catalog: '2015',
    subject: 'math'
  };

  identityA5: Task = {
    id: 'A5',
    catalog: '2015',
    subject: 'math'
  };

  identityA7: Task = {
    id: 'A7',
    catalog: '2015',
    subject: 'math'
  };

  identityA8: Task = {
    id: 'A8',
    catalog: '2015',
    subject: 'math'
  };

  identityA9: Task = {
    id: 'A9',
    catalog: '2015',
    subject: 'math'
  };

  identityA10: Task = {
    id: 'A10',
    catalog: '2015',
    subject: 'math'
  };

  identityA13: Task = {
    id: 'A13',
    catalog: '2015',
    subject: 'math'
  };

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
