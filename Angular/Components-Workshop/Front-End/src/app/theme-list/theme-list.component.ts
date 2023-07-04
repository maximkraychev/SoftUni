import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  showSpinner: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe((data) => {
      this.themeList = data;
      this.showSpinner = false;
    }, (err) => {
      console.log(err);
      this.showSpinner = false;
    })
  }
}
