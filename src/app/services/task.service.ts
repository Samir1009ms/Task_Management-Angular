import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://task-management-backend-eight.vercel.app/api/tasks';

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.baseUrl}`);
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.baseUrl, task);
  }

  assignTask(taskId: string, userId: string): Observable<TaskModel> {
    const url = `${this.baseUrl}/${taskId}/assign`;
    return this.http.patch<TaskModel>(url, { assignedTo: userId });
  }

  deleteTask(taskId: string): Observable<TaskModel> {
    const url = `${this.baseUrl}/${taskId}`;
    return this.http.delete<TaskModel>(url);
  }
}
