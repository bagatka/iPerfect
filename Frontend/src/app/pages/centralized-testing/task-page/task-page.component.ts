import { Component, Input } from '@angular/core';
import { TaskComponentMode } from 'src/app/components/tasks/task-component-base.directive';
import { Subject } from '../../../components/tasks/models';


@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent {
  @Input() taskId!: string;
  @Input() taskCatalog!: string;
  @Input() taskSeed!: number;
  @Input() taskSubject!: Subject;

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }

  isImageAnswers(subject: Subject, catalog: string, id: string): string {
    if (subject === 'math') {
      if (catalog === '2015') {
        if (id === 'A4' || id === 'A6') {
          return id;
        }
      }
    }

    return '';
  }
}
