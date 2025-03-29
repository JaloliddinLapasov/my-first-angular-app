import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../components/tasks/tasks.component';

const routes: Routes = [{ path: '', component: TasksComponent }];

@NgModule({
  imports: [TasksComponent,CommonModule, RouterModule.forChild(routes)],
  declarations: []
})
export class TasksModule {}
