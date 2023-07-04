import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent {

  themeList: ITheme[] | null = null;

  constructor(private apiService: ApiService) {

    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
