import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class TasksService {
  private readonly apiPath = `${environment.apiBaseUrl}/tasks`

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getTaskMetadata<T>(taskCatalog: string, taskId: string): Observable<T> {
    return this.httpClient.get<T>(`${this.apiPath}/${taskCatalog}/${taskId}`)
  }
}
