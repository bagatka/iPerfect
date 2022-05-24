import { Directive, Input } from '@angular/core';
import { Subject } from './models';


export enum TaskComponentMode {
  Create,
  Edit,
  Play
}

export interface Task {
  id: string;
  catalog: string;
  subject: Subject;
}

@Directive()
export abstract class TaskComponentBase {
  protected abstract identity: Task;
  @Input() mode: TaskComponentMode = TaskComponentMode.Play;

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }
}
