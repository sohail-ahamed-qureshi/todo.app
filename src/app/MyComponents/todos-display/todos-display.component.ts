import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/BusinessObjects/Todo';

@Component({
  selector: 'app-todos-display',
  templateUrl: './todos-display.component.html',
  styleUrls: ['./todos-display.component.scss'],
})
export class TodosDisplayComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() markAsDoneTodo: EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todoObj: Todo) {
    this.todoDelete.emit(todoObj);
  }

  markAsDone(todo:Todo){
    this.markAsDoneTodo.emit(todo);
  }
}
