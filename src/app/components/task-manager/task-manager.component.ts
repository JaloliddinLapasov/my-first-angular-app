// 4-dars
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent {
  tasks: string[];
  newTask: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number): void {
    this.taskService.deleteTask(index);
  }
}
