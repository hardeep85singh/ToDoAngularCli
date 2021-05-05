
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { ToDoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  id: number = 0
  todo: ToDo = new ToDo(this.id, '', false, new Date());

  constructor(
    private todoService: ToDoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id != -1) {
      this.todoService.retrieveToDo('hardeep', this.id).subscribe(
        data => this.todo = data
      )
    }

  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createToDo('hardeep', this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        )

    } else {
      this.todoService.updateToDo('hardeep', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        )
    }
  }



}
