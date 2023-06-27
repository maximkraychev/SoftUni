import { Injectable } from '@angular/core';
import { task } from './interfaces-types/interfaces-types';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockData: task[] = [
    { name: 'Shopping' },
    { name: 'Rent Pay' },
    { name: 'Cleaning' }
  ];

  getData(): task[] {
    return this.mockData;
  }

  deleteTask(taskToDelete: { name: string }): void {
    const index = this.mockData.findIndex(x => x == taskToDelete);

    if (index != -1) {
      this.mockData.splice(index, 1);
    } else {
      console.log('We couldn\'t find that task');
    }
  }

  editTask(oldValue: { name: string } | null, newValue: { name: string }): void {
    const index = this.mockData.findIndex(x => x == oldValue);

    if (index != -1) {
      this.mockData[index].name = newValue.name;
    } else {
      console.log('We couldn\'t find that task');
    }
  }
}