import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TaskComponentMode } from 'src/app/components/tasks/task-component-base.directive';
import { Subject } from '../../../components/tasks/models';


@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  @Input() taskId!: string;
  @Input() taskCatalog!: string;
  @Input() taskSeed!: number;
  @Input() taskSubject!: Subject;

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
