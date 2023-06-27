import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MockDataService } from 'src/app/mock-data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input('task') task!: { name: string };
  @Output() deleteEvent = new EventEmitter<{ name: string }>;
  isComplete: boolean = false;

  constructor(private mockDataServices: MockDataService) { }

  complete(): void {
    this.isComplete = !this.isComplete;
  }

  delete(): void {
    this.mockDataServices.deleteTask(this.task);
  }
}
