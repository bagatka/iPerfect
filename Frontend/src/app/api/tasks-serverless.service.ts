import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { MetadataBase, Subject } from '../components/tasks/models';
import { TestAnswer, TestSetItem } from '../pages/centralized-testing/test-state.service';
import { TasksService } from './tasks.service';


@Injectable()
export class TasksServerlessService extends TasksService {
  protected override apiPath = 'assets/Tasks';

  override getTaskMetadata<T extends MetadataBase>(
    subject: Subject,
    taskCatalog: string,
    taskId: string,
    seed: number
  ): Observable<T> {
    const values = this.httpClient.get<T[]>(`${this.apiPath}/${subject}/${taskCatalog}/${taskId}.json`)

    return values.pipe(
      map(item => item[seed])
    );
  }

  override getFullTestAnswers(subject: Subject, testSetItems: Array<TestSetItem>): Observable<Array<TestAnswer>> {
    const observables = testSetItems.map(
      item =>
        this.getTaskMetadata(subject, item.catalog, item.taskId, item.seed)
    );

    return combineLatest(observables)
      .pipe(
        switchMap(items =>
          of(
            items.map(
              (item, index) => ({
                taskId: testSetItems[index].taskId,
                correctAnswer: item.correctAnswer
              } as TestAnswer)
            )
          )
        )
      );
  }
}
