import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { MetadataBase } from '../components/tasks/models';
import { TestAnswer, TestSetItem } from '../pages/centralized-testing/test-state.service';


@Injectable()
export class TasksService {
  protected readonly apiPath = `${environment.apiBaseUrl}/tasks`

  constructor(
    protected readonly httpClient: HttpClient
  ) {
  }

  getTaskMetadata<T extends MetadataBase>(subject: string, taskCatalog: string, taskId: string, seed: number): Observable<T> {
    return this.httpClient.get<T>(`${this.apiPath}/${subject}/${taskCatalog}/${taskId}${seed}`);
  }

  getFullTestAnswers(subject: string, testSetItems: Array<TestSetItem>): Observable<Array<TestAnswer>> {
    // TODO: Implement endpoint
    return of([]);
  }
}
