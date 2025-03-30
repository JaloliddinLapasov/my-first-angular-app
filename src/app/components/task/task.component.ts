// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task',
//   imports: [],
//   templateUrl: './task.component.html',
//   styleUrl: './task.component.scss'
// })
// export class TaskComponent {

// }


// 7-dars
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Task Manager</h2>
    <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="New Task">
    <ul>
      <li *ngFor="let task of tasks$ | async">{{ task }}</li>
    </ul>
  `
})
export class TaskComponent {
  tasks$: Observable<string[]>;  // Observable sifatida aniqlash
  newTask = '';

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();  // Xatolikdan qochish uchun shunday yozing
  }

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask).subscribe(() => {
        this.tasks$ = this.taskService.getTasks(); // Yangilash
        this.newTask = ''; // Inputni tozalash
      });
    }
  }
}
