// 8-dars
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { FilterTasksPipe } from '../../pipes/filter-tasks.pipe'; // ✅ Pipe import qilinadi

// @Component({
//   standalone: true,
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   imports: [CommonModule, FormsModule, FilterTasksPipe] // ✅ Pipe imports ichida bo‘lishi kerak!
// })
// export class TaskListComponent {
//   tasks = ['Learn Angular', 'Build App', 'Test Pipe'];
//   query = '';
// }


//9-dars
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  template: `
    <button (click)="toggle()">Show/Hide</button>
    @if (visible) {
      <ul>
        @for (task of tasks; track task) {
          <li appHighlight [ngStyle]="{'color': taskColor}">{{ task }}</li>
        }
      </ul>
    }
  `
})
export class TaskListComponent {
  tasks = ['Learn Directives', 'Build App'];
  visible = false;
  taskColor = 'blue';

  toggle() {
    this.visible = !this.visible;
  }
}
