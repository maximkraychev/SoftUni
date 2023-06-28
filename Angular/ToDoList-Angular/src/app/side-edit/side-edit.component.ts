import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {
  @Input() task!: task | null;
  @Output() removeEdit = new EventEmitter;

  constructor(private apiService: ApiService) { }

  edit(title: string): void {
    this.apiService.editTask(this.task, { title, completed: false });
    this.removeEdit.emit();
  }

  cancel(): void {
    this.removeEdit.emit();
  }
}
