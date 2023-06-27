import { Component, Input } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {
  @Input() task!: { name: string } | null;

  constructor(private mockDataService: MockDataService) { }

  edit(name: string): void {
    this.mockDataService.editTask(this.task, { name });
    
  }
}
