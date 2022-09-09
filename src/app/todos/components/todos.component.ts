import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnInit,
} from '@angular/core';
import { TodosHeaderComponent } from './header/header.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements AfterViewInit, OnInit {
  @ViewChildren(TodosHeaderComponent) todosHeader: QueryList<TodosHeaderComponent>;

  ngOnInit(): void {
    console.log('init', this.todosHeader)
  }

  ngAfterViewInit(): void {
    // this.todosHeader.changes.subscribe((changes) => changes);
    // console.log('1', this.todosHeader.toArray());
  }
}
