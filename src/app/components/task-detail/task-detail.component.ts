import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Task Detail</h1>
    <p>Task ID: {{ id }}</p>
  `
})
export class TaskDetailComponent {
  id: string;

  constructor() {
    const route = inject(ActivatedRoute);
    this.id = route.snapshot.paramMap.get('id') || 'N/A';
  }
}
