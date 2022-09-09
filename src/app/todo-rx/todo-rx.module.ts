import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRxComponent } from './todo-rx.component';

const routes: Routes = [
  {
    path: 'todo-rx',
    component: TodoRxComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoRxModule { }
