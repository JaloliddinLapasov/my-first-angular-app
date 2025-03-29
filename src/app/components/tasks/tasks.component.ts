import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Tasks List</h1>
    <ul>
      <li><a routerLink="/task/1">Task 1</a></li>
      <li><a routerLink="/task/2">Task 2</a></li>
    </ul>
  `
})
export class TasksComponent {

}
