import { Component } from '@angular/core';
import { Todo } from 'src/app/BusinessObjects/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  localItem = localStorage.getItem("todosList");
  todosList!: Todo[];
  
 constructor(){
  if(this.localItem == null){
    this.todosList = [];
  }else{
    this.todosList = JSON.parse(this.localItem);
  }
 }

 DeleteTodo(todo: Todo){
  var index = this.todosList.indexOf(todo);
  this.todosList.splice(index, 1);
  localStorage.setItem("todosList", JSON.stringify(this.todosList));
 }

 AddTodo(todo: Todo){
  if(this.todosList.length ===0){
    todo.sno = 1;
  }else{
    todo.sno = this.todosList.length+1;
  }
  this.todosList.push(todo);
  localStorage.setItem("todosList", JSON.stringify(this.todosList));
 }

 ToggleTodo(todo: Todo){
  var index = this.todosList.indexOf(todo);
  this.todosList[index].isActive = !this.todosList[index].isActive;
  localStorage.setItem("todosList", JSON.stringify(this.todosList));
 }

}
