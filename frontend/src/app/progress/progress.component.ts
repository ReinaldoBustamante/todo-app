import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-progress',
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit{


  constructor(
    private todosService: TodosService
  ){}
  
  todos:any = []
  percent: string = '0%'
  todosCompleted: number = 0;
  totalTodos: number = 0;

  ngOnInit(): void {
    this.todosService.allTodos$.subscribe(res => {
      this.todos = res
      this.todosCompleted = res.filter(todo => todo.isCompleted).length 
      this.totalTodos = res.length
      this.percent = this.totalTodos > 0 ? `${(this.todosCompleted / this.totalTodos) * 100}%` : '0%'
    });
  }

  
}
