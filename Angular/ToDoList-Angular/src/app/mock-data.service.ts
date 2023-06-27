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
}