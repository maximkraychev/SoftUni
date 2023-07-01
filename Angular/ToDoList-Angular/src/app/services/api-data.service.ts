import { Injectable } from '@angular/core';
import { apiData, task } from '../interfaces-types/interfaces-types';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private data: task[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  setData(curData: task[]): void {
    this.data = curData
  }

  addTask(newTask: task): void {
    this.data.push(newTask);
  }

  deleteTask(taskToDelete: task): void {
    const index = this.data.findIndex(x => x == taskToDelete);

    if (index == -1) {
      return this.errorService.setError('We couldn\'t find the task you wish to delete!');
    }

    this.data.splice(index, 1);
  }

  editTask(oldValue: task | null, newValue: task): void {
    const index = this.data.findIndex(x => x == oldValue);

    if (index == -1) {
      return this.errorService.setError('We couldn\'t find the task you wish to edit!');
    }

    this.data[index].title = newValue.title;
  }

  getDataFromAPI(): Observable<task[]> {
      return this.http
        .get<apiData[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .pipe(
          map((data: apiData[]): task[] =>
            data.map((x: apiData): task => ({ title: x.title, completed: x.completed })))
        )
  }
}