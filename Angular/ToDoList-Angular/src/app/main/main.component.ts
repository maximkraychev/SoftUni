import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data!: task[];
  @Output() editEvent = new EventEmitter<{ name: string }>;

  constructor(private mockData: MockDataService) { }

  ngOnInit(): void {
    this.data = this.mockData.getData();
  }

  addTask(newTaskData: { name: string }): void {
    this.data.push(newTaskData);
  }

  editEmitter(taskToEdit: {name: string}): void {
    this.editEvent.emit(taskToEdit);
  }
}
