import { Component, Input } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-todo',
  imports: [CommonModule, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() title: string | undefined
  @Input() id!: number 
  @Input() isCompleted: boolean | undefined
  @Input() isImportant: boolean | undefined

  constructor(
    private todosService: TodosService
  ){}

  deleteTodo(id: number){
    this.todosService.removeTodo(id)
  }

  toggleStatus(id: number, status: boolean){
    this.todosService.completeTodo(id, status)
  }

  toggleImportant(id: number, status: boolean){
    this.todosService.importantTodo(id, status);
  }
}
