import { Component, Input } from '@angular/core';
import { task } from '../../interfaces-types/interfaces-types'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input('data') data!: task[];

  deleteTask(taskToBeDeleted: { name: string }): void {
    const index = this.data.findIndex(x => x == taskToBeDeleted);

    if (index != -1) {
      this.data.splice(index, 1);
    } else {
      console.log('We couldn\'t find that task'); 
    }
  }
}
