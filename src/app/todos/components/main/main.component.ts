import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatestWith, debounceTime, map, Observable } from 'rxjs';

import { TodoInterface } from './../../types/todo.interface';
import { TodosService } from './../../services/todos.service';
import { FilterEnum } from './../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  isTodosEmpty$: Observable<boolean>;
  visibleTodos$: Observable<TodoInterface[]>;
  isAllTodosSelected$: Observable<boolean>;
  editingId: string | null = null;

  searchText: string;

  @ViewChild(TodoComponent) tdComponent: TodoComponent;
  @ViewChild('inputRef') markAllInput: ElementRef;

  constructor(private todosService: TodosService) {
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );
    this.isTodosEmpty$ = todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.visibleTodos$ = this.todosService.todos$.pipe(
      combineLatestWith(this.todosService.filter$),
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        } else {
          return todos;
        }
      })
    );
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.todosService.toggleAll(target.checked);
  }

  fireDblClick(id: string | null): void {
    this.editingId = id;
  }

  ngOnInit(): void {
    this.todosService.todoInputText$.subscribe(
      (val) => (this.searchText = val)
    );
  }

  ngAfterViewInit(): void {}
}
