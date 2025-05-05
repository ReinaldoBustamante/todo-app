import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { ProgressComponent } from './progress/progress.component';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { FiltersComponent } from "./filters/filters.component";
import { TodosComponent } from "./todos/todos.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProgressComponent, AddTodoComponent, FiltersComponent, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = "frontend"
}
