import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
  constructor(
    private todosService: TodosService
  ){}

  todoInput: string = '';

  addTodo(){
    this.todosService.addTodos({
      title: this.todoInput
    })
    this.todoInput = ''
  }
}
