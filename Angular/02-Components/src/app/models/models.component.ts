import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  constructor(
    public title: string,
    public description: string,
    public author: string,
    public imageUrl: string
  ) {}
}
