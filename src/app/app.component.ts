
// 1-dars:
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true, // Standalone komponent
//   imports: [CommonModule], // CommonModule ni import qilish
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   showText = false;

//   // *ngIf – Shartli ko‘rinish
//   toggleText() {
//     this.showText = !this.showText;
//   }

//   // *ngFor – Ro‘yxat chiqarish
//   fruits = ['Olma', 'Banan', 'Nok', 'Uzum'];

//   // [ngStyle] va [ngClass] bilan dinamik stil qo‘shish
//   isActive = true;
// }


// 2-dars
// import { Component } from '@angular/core';
// import { HelloComponent } from './components/hello/hello.component';

// @Component({
//   selector: 'app-root',
//   standalone: true, // ✅ Standalone component sifatida ishlatiladi
//   imports: [HelloComponent], // ✅ `HelloComponent` ni import qiling
//   template: `
//     <h1>Angular 19 Standalone Component</h1>
//     <app-hello></app-hello> <!-- ✅ HelloComponent ishlatilmoqda -->
//   `
// })
// export class AppComponent {}


// 3-dars
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   selector: 'app-root',
//   template: `
//     <h1>To-Do List</h1>
//     <input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Yangi vazifa qo'shing">
//     <button (click)="addTask()">Qo'shish</button>
    
//     <ul>
//       @for (task of tasks; track task) {
//         <li>
//           {{ task }}
//           <button (click)="removeTask(task)">❌</button>
//         </li>
//       }
//     </ul>
    
//     @if (tasks.length === 0) { <p>Vazifalar yo'q!</p> }
//   `,
//   styles: [`
//     h1 { text-align: center; }
//     input { width: 70%; padding: 8px; }
//     button { margin-left: 10px; padding: 8px; }
//     ul { list-style: none; padding: 0; }
//     li { display: flex; justify-content: space-between; padding: 5px; background: #f4f4f4; margin: 5px 0; border-radius: 4px; }
//     li button { background: red; color: white; border: none; cursor: pointer; }
//   `]
// })
// export class AppComponent {
//   tasks: string[] = [];
//   newTask = '';

//   addTask() {
//     if (this.newTask.trim()) {
//       this.tasks.push(this.newTask.trim());
//       this.newTask = '';
//     }
//   }

//   removeTask(task: string) {
//     this.tasks = this.tasks.filter(t => t !== task);
//   }
// }



// 4-dars
// import { Component } from '@angular/core';
// import { TaskManagerComponent } from './components/task-manager/task-manager.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [TaskManagerComponent],
//   template: '<app-task-manager></app-task-manager>',
// })
// export class AppComponent {}


// 5-dars
// import { Component } from '@angular/core';
// import { TemplateFormComponent } from './components/template-form/template-form.component';
// import { TaskFormComponent } from './components/task-form/task-form.component';
// import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Welcome to My First Angular App</h1>
//     <app-template-form></app-template-form>
//     <br>
//     <app-task-form></app-task-form>
//     <app-reactive-form></app-reactive-form>
//   `,
//   imports: [TemplateFormComponent, TaskFormComponent, ReactiveFormComponent]
// })
// export class AppComponent {}


// 6-dars
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/tasks">Tasks</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
