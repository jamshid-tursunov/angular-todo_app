import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class TodosHeaderComponent implements OnInit, OnDestroy {
  textSubscription$: Subscription;
  inputValue: string;
  isTodoFound: boolean;
  errMsg = '';
  constructor(private todoService: TodosService) {}

  isTodoExist(): boolean {
    return this.isTodoFound;
  }

  isTextEmpty(event: string): boolean {
    return event.trim() === '';
  }

  changeValueFunc(text: string) {
    this.inputValue = text;
    this.todoService.setInputText(text);
  }

  addTodo(): void {
    if (this.isTextEmpty(this.inputValue) || this.isTodoExist()) {
      this.errMsg =
        'Invalid attemp, pls check your input or add non-exist todo!';
      throw new Error(this.errMsg);
    }

    this.todoService.addTodo(this.inputValue);
    this.inputValue = '';
    this.errMsg = '';
  }

  ngOnInit(): void {
    this.textSubscription$ = this.todoService.todoInputText$.subscribe(
      (val) => (this.inputValue = val)
    );

    this.todoService.isTodoFound$.subscribe((val) => {
      this.isTodoFound = val;
    });
  }

  ngOnDestroy(): void {
    this.textSubscription$.unsubscribe();
  }
}
