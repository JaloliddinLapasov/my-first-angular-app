import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Bosh sahifa
  { path: 'tasks', component: TasksComponent }, // Vazifalar ro'yxati
  { path: 'task/:id', component: TaskDetailComponent } // Vazifa tafsilotlari
];
