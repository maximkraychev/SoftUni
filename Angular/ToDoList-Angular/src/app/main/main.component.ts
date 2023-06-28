import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data!: task[];
  @Output() editEvent = new EventEmitter<task>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDataFromAPI().subscribe((data) => {
      this.data = data;
      this.apiService.setData(data);
    })
  }

  addTask(newTaskData: task): void {
    this.data.push(newTaskData);
  }

  editEmitter(taskToEdit: task): void {
    this.editEvent.emit(taskToEdit);
  }
}
