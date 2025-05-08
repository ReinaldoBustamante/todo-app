import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-filters',
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  constructor(
    private todosService: TodosService
  ){}

  filters = [
    'Todas',
    'Pendientes',
    'Completadas',
    'Prioritarias'
  ]

  filterSelected = 'Todas'

  changeFilter(filter: string){
    this.todosService.setFilter(filter)
    this.todosService.filter$.subscribe(res => this.filterSelected = res)
  }
}
