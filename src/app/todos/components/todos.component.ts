import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnInit,
} from '@angular/core';
import { TodosHeaderComponent } from './header/header.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements AfterViewInit, OnInit {
  @ViewChildren(TodosHeaderComponent)
  todosHeader: QueryList<TodosHeaderComponent>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('ngafterviewinit');
    // this.todosHeader.changes.subscribe((changes) => changes);
    // console.log('1', this.todosHeader.toArray());
  }
}
