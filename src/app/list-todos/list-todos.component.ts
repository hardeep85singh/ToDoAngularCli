import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoDataService } from '../service/data/todo-data.service';

export class ToDo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: ToDo[] = [];  
  
  message:string = ''

  constructor(
    private todoService: ToDoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshToDos();
  }

  refreshToDos(){
    this.todoService.retrieveAllTodos('hardeep').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteToDo(id: any){
    console.log(`delete todo ${id}`);
    this.todoService.deleteToDo('hardeep', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Todo ${id} is Successful!`;
        this.refreshToDos();
      }
    )
  }

  updateToDo(id: any){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
