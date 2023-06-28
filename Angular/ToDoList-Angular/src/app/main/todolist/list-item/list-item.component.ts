import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/api-data.service';
import { task } from 'src/app/interfaces-types/interfaces-types';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input('task') task!: task;
  @Output() editEvent = new EventEmitter<task>;
  isComplete: boolean = false;

  constructor(private apiService: ApiService) { }

  complete(): void {
    this.isComplete = !this.isComplete;
  }

  delete(): void {
    this.apiService.deleteTask(this.task);
  }

  editEmitter(): void {
    this.editEvent.emit(this.task);
  }
}
