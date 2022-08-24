import { TodosService } from './../../services/todos.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnChanges {
  @ViewChild('textInput') textInput: ElementRef;
  @Input('todo') todoProps: TodoInterface;
  @Input('isEditing') isEditingProp: boolean;
  @Output('onDblClicked') fireDblClickEvent: EventEmitter<string | null> =
    new EventEmitter();
  isEditRequired: boolean = false;

  constructor(private todoService: TodosService) {}

  openEditField() {
    this.isEditRequired = true;
    this.fireDblClickEvent.emit(this.todoProps.id);
  }

  isValidContent(todoContent: string): boolean {
    return todoContent.trim() !== '' || todoContent !== todoContent;
  }

  saveTodoEdit(event: Event, id: string): void {
    const target = event.target as HTMLInputElement;

    if (this.isValidContent(target.value)) {
      this.todoService.setTodoItem(target.value, id);
    }

    this.fireDblClickEvent.emit(null);
  }

  toggleTodoStatus(todoId: string) {
    this.todoService.toggleTodoStatus(todoId);
  }

  removeTodo(id: string): void {
    this.todoService.removeTodoById(id);
  }

  testViewChild() {
    console.log('i am @viewChild and triggered!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { isEditingProp } = changes;
    if (isEditingProp.currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }
}
