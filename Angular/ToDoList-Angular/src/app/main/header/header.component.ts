import { Component, EventEmitter, Output } from '@angular/core';
import { task } from 'src/app/interfaces-types/interfaces-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() inputEvent = new EventEmitter<task>();

  addTask(inputElement: HTMLInputElement): void {

    if (inputElement.value != '') {
      this.inputEvent.emit({ title: inputElement.value, completed: false });
      inputElement.value = '';
    } else {
      console.log('Empty string is not allowed');
    }
  }
}
