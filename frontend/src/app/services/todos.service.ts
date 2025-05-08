import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

export interface TodoType{
  id: number,
  title: string,
  isImportant: boolean,
  isCompleted: boolean,
  date_created: Date
}

@Injectable({
  providedIn: 'root'
})

export class TodosService {
 
  constructor(private http: HttpClient) {}

  private api_url = "http://localhost:3000/api/todos"

  todosSubject = new BehaviorSubject<TodoType[]>([]);
  todos$ = this.todosSubject.asObservable();

  filterSubject = new BehaviorSubject<string>('Todas');
  filter$ = this.filterSubject.asObservable();

  allTodosSubject = new BehaviorSubject<TodoType[]>([]);
  allTodos$ = this.allTodosSubject.asObservable();

  private updateTodo(id: number, res: any){
    this.allTodosSubject.next(this.allTodosSubject.getValue().map(todo => todo.id === id ? res : todo))
    this.applyFilter()
  }

  getTodos() {
    this.http.get<TodoType[]>(this.api_url).subscribe(res => {
      this.allTodosSubject.next(res)
      this.applyFilter()
    });
  }

  addTodos(payload: { title: string }) {
    this.http.post<TodoType>(this.api_url, payload).subscribe(res => {
      this.allTodosSubject.next([res, ...this.allTodosSubject.getValue()])
      this.applyFilter()
    });
  }

  removeTodo(id: number) {
    this.http.delete<TodoType>(`${this.api_url}/${id}`)
    .pipe(
      catchError(error => {
        console.error('Error al eliminar todo:', error);
        return throwError(() => error);
      })
    )
    .subscribe(res => {
      const updatedTodos = this.allTodosSubject.getValue().filter(todo => todo.id !== res.id)
      this.allTodosSubject.next(updatedTodos)
      this.applyFilter()
    });
  }

  completeTodo(id: number, status: boolean) {
    this.http.put<TodoType>(`${this.api_url}/${id}`, { isCompleted: status }).subscribe(res => {
      this.updateTodo(id, res)
    });
  }

  importantTodo(id: number, status: boolean) {
    this.http.put<TodoType>(`${this.api_url}/${id}`, { isImportant: status }).subscribe(res => {
      this.updateTodo(id, res)
    });
  }

  setFilter(filter: string){
    this.filterSubject.next(filter)
  }

  applyFilter(){
    const allTodos = this.allTodosSubject.getValue()
    const filter = this.filterSubject.getValue()

    let filteredTodos: TodoType[];

    switch (filter) {
      case 'Pendientes':
        filteredTodos = allTodos.filter(todo => !todo.isCompleted);
        break;
      case 'Completadas':
        filteredTodos = allTodos.filter(todo => todo.isCompleted);
        break;
      case 'Prioritarias':
        filteredTodos = allTodos.filter(todo => todo.isImportant);
        break;
      default:
        filteredTodos = allTodos;
    }
    this.todosSubject.next(filteredTodos);
  }
}
