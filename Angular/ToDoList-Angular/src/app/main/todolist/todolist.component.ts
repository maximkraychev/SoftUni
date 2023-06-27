import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from '../../interfaces-types/interfaces-types'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input('data') data!: task[];
  @Output() editEvent = new EventEmitter<{name: string}>;

  editEmitter(taskToEdit: {name: string}): void {
    this.editEvent.emit(taskToEdit);
  }
}
