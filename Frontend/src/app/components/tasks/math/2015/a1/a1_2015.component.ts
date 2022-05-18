import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../../../stories/components/tasks/tasks.model';
import { TasksService } from '../../../../../api/tasks.service';
import { TaskComponentBase, TaskComponentMode } from '../../../task-component-base.directive';


interface A1_2015Metadata {
  strokes: {
    interval: number;
    values: Array<Stroke>
  }
}

interface Stroke {
  name: string;
  value: string;
}

@Component({
  selector: 'a1_2015',
  templateUrl: './a1_2015.component.html',
  styleUrls: ['./a1_2015.component.scss']
})
export class A1_2015Component extends TaskComponentBase implements OnInit {
  model: Task<A1_2015Metadata> = {
    id: 'A1-2015',
    catalog: '2015'
  };

  get strokesValues(): Array<Stroke> {
    return this.model.metadata?.strokes.values ?? [];
  }

  get strokesInterval(): number {
    return this.model.metadata?.strokes.interval ?? 0;
  }

  constructor(
    private readonly tasksService: TasksService
  ) {
    super();
  }

  ngOnInit(): void {
    switch (this.mode) {
      case TaskComponentMode.Create:
        this.initializeCreateState()
        break;
      case TaskComponentMode.Edit:
        this.initializeEditMode();
        break;
      case TaskComponentMode.Play:
        this.initializePlayMode();
        break;
    }
  }

  private initializeCreateState(): void {
    console.log('TEST!!!!!!');
    const defaultInterval = 40;
    const defaultStrokesCount = 10;
    const strokesArray: Array<Stroke> = Array.from(
      { length: defaultStrokesCount },
      () => ({
        name: 'A',
        value: '1'
      })
    );

    this.model.metadata = {
      strokes: {
        interval: defaultInterval,
        values: strokesArray
      }
    };
  }

  private initializeEditMode(): void {
    this.tasksService.getTaskMetadata<A1_2015Metadata>(this.model.catalog, this.model.id)
      .subscribe(
        taskMetadata => {
          this.model.metadata = taskMetadata;
        }
      );
  }

  private initializePlayMode(): void {

  }
}
