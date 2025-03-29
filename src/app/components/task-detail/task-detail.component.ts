import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
  standalone: true,
  template: `<h1>Task Detail</h1> <p>Task ID: {{ id }}</p>`
})
export class TaskDetailComponent {
  id: string;
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id') || 'N/A';
  }
}

