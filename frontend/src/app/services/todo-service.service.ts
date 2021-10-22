import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl)
  }

  update(todo: Todo): Observable<Todo> {
    const URL = `${this.baseUrl}/${todo.id}`
    return this.httpClient.put<Todo>(URL, todo)
  }

  delete(id: any): Observable<void> {
    const URL = `${this.baseUrl}/${id}`
    return  this.httpClient.delete<void>(URL)
  }

  create(todo:Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo)
  }

  message(msg: string): void {
    this.snack.open(`${msg}`, 'Ok',{
    horizontalPosition:  'end',
    verticalPosition: 'top',
    duration: 4000,
    })
  }
}
