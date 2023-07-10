import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ITheme } from '../../../interfaces/theme';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  showSpinner: boolean = true;

  constructor(private apiService: ApiService, private mockData: MockAuthService) { }

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (data) => {
        this.themeList = data;
        this.showSpinner = false;
      },
      error: (err) => {
        console.log(err);
        this.showSpinner = false;
      }
    })
}

get isLogged(): boolean {
  return this.mockData.isUser;
}
}
