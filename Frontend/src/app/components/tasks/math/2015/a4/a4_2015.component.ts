import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../../../api/tasks.service';
import { MetadataBase } from '../../../models';
import { Task, TaskComponentBase } from '../../../task-component-base.directive';


@Component({
  selector: 'a4_2015',
  templateUrl: './a4_2015.component.html',
  styleUrls: ['./a4_2015.component.scss']
})
export class A4_2015Component extends TaskComponentBase implements OnInit {
  protected identity: Task = {
    id: 'A4',
    catalog: '2015',
    subject: 'math'
  };

  model?: MetadataBase;

  constructor(
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    this.tasksService
      .getTaskMetadata<MetadataBase>(this.identity.subject, this.identity.catalog, this.identity.id, this.seed)
      .subscribe(value => {
        this.model = value;
      });
  }
}
