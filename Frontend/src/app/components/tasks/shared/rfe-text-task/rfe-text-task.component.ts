import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../../api/tasks.service';
import { MetadataBase } from '../../models';
import { TaskComponentBase } from '../../task-component-base.directive';

@Component({
  selector: 'rfe-text-task',
  templateUrl: './rfe-text-task.component.html',
  styleUrls: ['./rfe-text-task.component.scss']
})
export class RfeTextTaskComponent extends TaskComponentBase implements OnInit {
  model?: MetadataBase;

  constructor(
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    this.tasksService
      .getTaskMetadata<MetadataBase>(this.subject, this.catalog, this.id, this.seed)
      .subscribe(value => {
        this.model = value;
      });
  }
}
