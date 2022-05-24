import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class TasksService {
  protected readonly apiPath = `${environment.apiBaseUrl}/tasks`

  constructor(
    protected readonly httpClient: HttpClient
  ) {
  }

  getTaskMetadata<T>(subject: string, taskCatalog: string, taskId: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiPath}/${subject}/${taskCatalog}/${taskId}`)
  }
}
