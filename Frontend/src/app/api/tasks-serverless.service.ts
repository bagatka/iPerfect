import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Subject } from '../components/tasks/models';
import { TasksService } from './tasks.service';


@Injectable()
export class TasksServerlessService extends TasksService {
  protected override apiPath = 'assets/Tasks';

  override getTaskMetadata<T>(subject: Subject, taskCatalog: string, taskId: string): Observable<T> {
    const values = super.getTaskMetadata<T[]>(subject, taskCatalog, `${taskId}.json`);

    return values.pipe(
      map(item => item[this.getRandom(item.length)])
    )
  }

  private getRandom(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
