// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }

// 4-dars
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // Singleton xizmat
// })
// export class TaskService {
//   private tasks: string[] = [];

//   getTasks(): string[] {
//     return this.tasks;
//   }

//   addTask(task: string): void {
//     this.tasks.push(task);
//   }

//   deleteTask(index: number): void {
//     this.tasks.splice(index, 1);
//   }
// }


// 7-dars

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private url = 'http://localhost:3000/tasks'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getTasks(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }

  addTask(task: string): Observable<any> {
    return this.http.post(this.url, { task });
  }

  updateTask(id: number, task: string): Observable<any> {
    return this.http.put(`${this.url}/${id}`, { task });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

