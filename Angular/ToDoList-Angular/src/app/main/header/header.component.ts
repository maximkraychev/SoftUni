import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() inputEvent = new EventEmitter<{name: string}>();

  addTask(inputElement: HTMLInputElement): void {
    this.inputEvent.emit({name: inputElement.value})
    inputElement.value = '';
  }
}
