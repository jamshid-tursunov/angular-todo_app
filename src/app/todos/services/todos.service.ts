import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodosService {
  todoInputText$ = new BehaviorSubject<string>('');
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  isTodoFound$ = new BehaviorSubject<boolean>(false);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);

    this.todoInputText$.next('');
  }

  toggleAll(isCompleted: boolean): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });

    this.todos$.next(updatedTodos);
  }
  setInputText(text: string) {
    this.todoInputText$.next(text);
  }

  setTodoItem(text: string, id: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      }
      return todo;
    });

    this.todos$.next(updatedTodos);
  }

  toggleFilter(filterType: FilterEnum): void {
    this.filter$.next(filterType);
  }

  toggleTodoStatus(id: string) {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    this.todos$.next(updatedTodos);
  }

  removeTodoById(id: string): void {
    const updatedTodos = this.todos$
      .getValue()
      .filter((todo) => todo.id !== id);

    this.todos$.next(updatedTodos);
  }

  setFilteredTodos(todos: TodoInterface[]) {
    if (todos.length) {
      this.isTodoFound$.next(true);
    } else {
      this.isTodoFound$.next(false);
    }
  }
}
