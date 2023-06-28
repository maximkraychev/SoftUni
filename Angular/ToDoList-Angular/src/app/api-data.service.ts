import { Injectable } from '@angular/core';
import { task } from './interfaces-types/interfaces-types';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockData: task[] = [
    { title: 'Shopping' },
    { title: 'Rent Pay' },
    { title: 'Cleaning' }
  ];

  getData(): task[] {
    return this.mockData;
  }

  deleteTask(taskToDelete: task): void {
    const index = this.mockData.findIndex(x => x == taskToDelete);

    if (index != -1) {
      this.mockData.splice(index, 1);
    } else {
      console.log('We couldn\'t find that task');
    }
  }

  editTask(oldValue: task | null, newValue: task): void {
    const index = this.mockData.findIndex(x => x == oldValue);

    if (index != -1) {
      this.mockData[index].title = newValue.title;
    } else {
      console.log('We couldn\'t find that task');
    }
  }
}