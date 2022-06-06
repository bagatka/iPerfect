import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../../api/tasks.service';
import { MetadataBase } from '../../models';
import { TaskComponentBase } from '../../task-component-base.directive';


@Component({
  selector: 'rfe-image-answers-task',
  templateUrl: './rfe-image-answers-task.component.html',
  styleUrls: ['./rfe-image-answers-task.component.scss']
})
export class RfeImageAnswersTaskComponent extends TaskComponentBase implements OnInit {
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
