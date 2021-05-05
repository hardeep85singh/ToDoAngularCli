import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListTodosComponent, ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: any){
    return this.http.get<ToDo[]>(`http://localhost:8082/users/${username}/todos`);
  }

  deleteToDo(username: any, id:any){
    return this.http.delete(`http://localhost:8082/users/${username}/todos/${id}`);

  }

  retrieveToDo(username: any, id:any){
    return this.http.get<ToDo>(`http://localhost:8082/users/${username}/todos/${id}`);

  }

  updateToDo(username: any, id:any, todo: any){
    return this.http.put(`http://localhost:8082/users/${username}/todos/${id}`
    , todo);

  }

  createToDo(username: any, todo: any){
    return this.http.post(`http://localhost:8082/users/${username}/todos`
    , todo);

  }

}

