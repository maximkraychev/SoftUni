import { Injectable } from '@angular/core';
import { apiData, task } from './interfaces-types/interfaces-types';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private data: task[] = [];

  constructor(private http: HttpClient) { }

  setData(curData: task[]): void {
    this.data = curData
  }

  deleteTask(taskToDelete: task): void {
    const index = this.data.findIndex(x => x == taskToDelete);

    if (index != -1) {
      this.data.splice(index, 1);
    } else {
      console.log('We couldn\'t find that task');
    }
  }

  editTask(oldValue: task | null, newValue: task): void {
    const index = this.data.findIndex(x => x == oldValue);

    if (index != -1) {
      this.data[index].title = newValue.title;
    } else {
      console.log('We couldn\'t find that task');
    }
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