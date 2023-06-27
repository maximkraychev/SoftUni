import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/interfaces-types/types';
import { MockDataService } from 'src/app/mock-data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public data!: task[];

  constructor (private mockData: MockDataService) {}

  ngOnInit(): void {
    this.data = this.mockData.getData();
  }
}
