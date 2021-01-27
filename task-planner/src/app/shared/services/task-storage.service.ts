import {Injectable} from '@angular/core';
import {Task} from '../../task/task-list/task.model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  constructor(
    private http: HttpClient
  ) { }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${environment.urlClient}/tasks/${id}`);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.urlClient}/tasks`);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.patch<Task>(`${environment.urlClient}/tasks/${id}`, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${environment.urlClient}/tasks`, task);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlClient}/tasks/${id}`);
  }
}
