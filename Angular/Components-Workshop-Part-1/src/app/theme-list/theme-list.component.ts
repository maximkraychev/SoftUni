import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {

  constructor(private apiService: ApiService) {

    this.apiService.loadThemes().subscribe((value) => {
      console.log(value);
    })
    
  }
}
