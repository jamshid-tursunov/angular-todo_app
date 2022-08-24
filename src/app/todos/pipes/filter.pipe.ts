import { TodosService } from './../services/todos.service';
import { TodoInterface } from './../types/todo.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  constructor(private todoService: TodosService) {}

  transform(value: TodoInterface[] | null, searchText: string) {
    if (!value || !searchText) {
      return value;
    }

    const filteredItems = value.filter(
      (val: TodoInterface) =>
        val.text.toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1
    );

    this.todoService.setFilteredTodos(filteredItems);

    return filteredItems;
  }
}
