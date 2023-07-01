import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-data.service';
import { task } from 'src/app/interfaces-types/interfaces-types';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input('task') task!: task;
  isComplete: boolean = false;

  constructor(
    private apiService: ApiService,
    private editService: EditService
  ) { }

  complete(): void {
    this.isComplete = !this.isComplete;
  }

  delete(): void {
    this.apiService.deleteTask(this.task);
  }

  editEmitter(): void {
    this.editService.showEdit(this.task);
  }
}
