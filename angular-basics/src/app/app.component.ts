import {Component, OnInit} from '@angular/core'
import {Todo, TodosService} from "./todos.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []

  loading = false

  todoTitle = ''

  error = ''

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
      this.todos.push(todo)
      this.todoTitle = ''
    })
  }

  fetchTodos(): void {
    this.loading = true
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id: number): void {
    this.todosService.completeTodo(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true
    })
  }
}
