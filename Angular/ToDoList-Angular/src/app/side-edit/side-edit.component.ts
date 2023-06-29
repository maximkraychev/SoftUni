import { Component } from '@angular/core';
import { ApiService } from '../services/api-data.service';
import { EditService } from '../services/edit.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {

  constructor(
    private apiService: ApiService,
    private errorService: ErrorService,
    public editService: EditService
  ) { }

  edit(title: string): void {

    if (title == '') {
      return this.errorService.setError('The task title cannot be empty string!');
    }

    this.apiService.editTask(this.editService.taskToEdit, { title, completed: false });
    this.editService.hideEdit();
  }
}
