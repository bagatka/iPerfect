import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../../../../api/tasks.service';
import { MetadataBase } from '../../models';
import { Task, TaskComponentBase } from '../../task-component-base.directive';

@Component({
  selector: 'rfe-text-task',
  templateUrl: './rfe-text-task.component.html',
  styleUrls: ['./rfe-text-task.component.scss']
})
export class RfeTextTaskComponent extends TaskComponentBase implements OnInit {
  @Input() identity!: Task;

  model?: MetadataBase;

  constructor(
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    this.tasksService
      .getTaskMetadata<MetadataBase>(this.identity.subject, this.identity.catalog, this.identity.id)
      .subscribe(value => {
        this.model = value;
      });
  }
}
