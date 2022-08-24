import { TodoInterface } from './../../types/todo.interface';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class TodosFooterComponent implements OnInit {
  isTodosEmpty$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filterEnum = FilterEnum;
  activeFilter$: Observable<FilterEnum>;

  constructor(private todosService: TodosService) {}

  changeFilter(e: Event, filterType: FilterEnum) {
    e.preventDefault();
    this.todosService.toggleFilter(filterType);
  }

  ngOnInit(): void {
    this.activeFilter$ = this.todosService.filter$;

    this.activeCount$ = this.todosService.todos$.pipe(
      map(
        (todos) =>
          todos.filter((todo: TodoInterface) => !todo.isCompleted).length
      )
    );

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => (activeCount > 1 ? 's' : ''))
    );

    this.isTodosEmpty$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
  }
}
