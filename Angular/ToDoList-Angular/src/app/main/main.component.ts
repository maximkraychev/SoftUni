import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data!: task[];

  constructor (private mockData: MockDataService) {}

  ngOnInit(): void {
    this.data = this.mockData.getData();
  }
}
