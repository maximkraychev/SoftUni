import { Component } from '@angular/core';
import { task } from './interfaces-types/interfaces-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList-Angular';
  isThereTaskToEdit: boolean = false;
  taskToEdit: task | null = null;

  showEdit(taskToEdit: task): void {
    this.isThereTaskToEdit = true;
    this.taskToEdit = taskToEdit;
  }

  hideEdit(): void {
    this.isThereTaskToEdit = false;
    this.taskToEdit = null;
  }
}
