import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  constructor(
    private todosService: TodosService
  ){
    this.todosService.getTodos();
  }

  complete = true
  todos:any = []
  ngOnInit(): void {
    this.todosService.todos$.subscribe(res => {
      this.todos = res
    });
    this.todosService.filter$.subscribe(() => this.todosService.applyFilter())
    
  }


}
