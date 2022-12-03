import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/BusinessObjects/Todo';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
title:string = '';
desc: string = '';
@Output() addTodo: EventEmitter<Todo>= new EventEmitter();  

ngOnInit(){}

AddTodo(){
  const todo = {
    sno: 4,
    description: this.desc,
    title: this.title,
    isActive: true,
  };
  this.addTodo.emit(todo);
  this.title ='';
  this.desc = '';
}
}
