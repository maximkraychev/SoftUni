import { Injectable } from '@angular/core';
import { task } from '../interfaces-types/interfaces-types';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  taskToEdit: task | null = null;

  hideEdit(): void {
    this.taskToEdit = null;
  }

  showEdit(taskToEdit: task): void {
    this.taskToEdit = taskToEdit;
  }
}
