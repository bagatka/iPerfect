import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../../../api/tasks.service';
import { MetadataBase } from '../../../models';
import { TaskComponentBase } from '../../../task-component-base.directive';


@Component({
  selector: 'a4_2015',
  templateUrl: './a4_2015.component.html',
  styleUrls: ['./a4_2015.component.scss']
})
export class A4_2015Component extends TaskComponentBase implements OnInit {
  model?: MetadataBase;

  constructor(
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subject = 'math';
    this.id = 'A4';
    this.catalog = '2015';

    this.tasksService
      .getTaskMetadata<MetadataBase>(this.subject, this.catalog, this.id, this.seed)
      .subscribe(value => {
        this.model = value;
      });
  }
}
