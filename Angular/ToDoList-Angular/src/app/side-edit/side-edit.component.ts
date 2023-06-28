import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MockDataService } from '../api-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {
  @Input() task!: task | null;
  @Output() removeEdit = new EventEmitter;

  constructor(private mockDataService: MockDataService) { }

  edit(title: string): void {
    this.mockDataService.editTask(this.task, { title });
    this.removeEdit.emit();
  }

  cancel(): void {
    this.removeEdit.emit();
  }
}
