import { Component } from '@angular/core';
import { ApiService } from '../services/api-data.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent {

  constructor(
    private apiService: ApiService,
    public editService: EditService
  ) { }

  edit(title: string): void {

    if(title == '') {
      return console.log('The task title cannot be empty string!');
    }

    this.apiService.editTask(this.editService.taskToEdit, { title, completed: false });
    this.editService.hideEdit();
  }
}
