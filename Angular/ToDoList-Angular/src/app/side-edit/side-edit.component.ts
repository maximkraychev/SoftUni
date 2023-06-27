import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {
  @Input() task!: { name: string } | null;
  @Output() removeEdit = new EventEmitter;

  constructor(private mockDataService: MockDataService) { }

  edit(name: string): void {
    this.mockDataService.editTask(this.task, { name });
    this.removeEdit.emit();
  }

  cancel(): void {
    this.removeEdit.emit();
  }
}
