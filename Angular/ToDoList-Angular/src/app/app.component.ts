import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList-Angular';
  isThereTaskToEdit: boolean = false;
  taskToEdit: { name: string } | null = null;

  showEdit(taskToEdit: { name: string }): void {
    this.isThereTaskToEdit = true;
    this.taskToEdit = taskToEdit;
  }

  hideEdit(): void {
    this.isThereTaskToEdit = false;
    this.taskToEdit = null;
  }
}
