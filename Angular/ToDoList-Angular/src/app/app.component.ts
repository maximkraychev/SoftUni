import { Component } from '@angular/core';
import { EditService } from './services/edit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList-Angular';

  constructor(public editHandler: EditService) { }
}
