import { FilterPipe } from './pipes/filter.pipe';
import { TodosHeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodosFooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodosHeaderComponent,
    MainComponent,
    TodosFooterComponent,
    FilterPipe,
  ],
  providers: [TodosService],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
})
export class TodosModule {}
