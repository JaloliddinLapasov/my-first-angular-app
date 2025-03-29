// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }

// 4-dars
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Singleton xizmat
})
export class TaskService {
  private tasks: string[] = [];

  getTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
