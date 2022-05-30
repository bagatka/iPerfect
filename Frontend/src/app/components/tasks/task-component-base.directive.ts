import { Directive, Input } from '@angular/core';
import { Subject } from './models';


export enum TaskComponentMode {
  Create,
  Edit,
  Play
}

@Directive()
export abstract class TaskComponentBase {
  @Input() mode: TaskComponentMode = TaskComponentMode.Play;
  @Input() seed: number = 0;
  @Input() id!: string;
  @Input() subject!: Subject;
  @Input() catalog!: string;

  get TaskComponentMode(): typeof TaskComponentMode {
    return TaskComponentMode;
  }
}
