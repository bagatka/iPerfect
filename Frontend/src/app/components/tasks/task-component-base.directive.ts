import { Directive, Input } from '@angular/core';

export enum TaskComponentMode {
  Create,
  Edit,
  Play
}

@Directive({})
export abstract class TaskComponentBase {
  @Input() mode: TaskComponentMode = TaskComponentMode.Play;

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }
}
