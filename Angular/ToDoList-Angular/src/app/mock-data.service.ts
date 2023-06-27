import { Injectable } from '@angular/core';
import { task } from './interfaces-types/types';



@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getData(): task[] {
    return [
      { name: 'Shopping' },
      { name: 'Rent Pay' },
      { name: 'Cleaning' }
    ]
  }
}
