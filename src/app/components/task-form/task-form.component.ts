import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone:true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  tasks: string[] = [];
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.tasks.push(this.taskForm.value.task);
      this.taskForm.reset();
    }
  }
}
