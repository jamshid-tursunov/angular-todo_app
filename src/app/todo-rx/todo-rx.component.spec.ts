import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRxComponent } from './todo-rx.component';

describe('TodoRxComponent', () => {
  let component: TodoRxComponent;
  let fixture: ComponentFixture<TodoRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
