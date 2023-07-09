import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/interfaces/theme';
import { ApiService } from 'src/app/services/api.service';
import { MockAuthService } from 'src/app/services/mock-auth.service';

@Component({
  selector: 'app-current-theme-comments',
  templateUrl: './current-theme-comments.component.html',
  styleUrls: ['./current-theme-comments.component.css']
})
export class CurrentThemeCommentsComponent implements OnInit {

  theme: ITheme | undefined;
  isLogged: boolean = false;

  constructor(private activeRouter: ActivatedRoute, private apiService: ApiService, private mockAuth: MockAuthService) { }

  ngOnInit(): void {
    this.fetchForTheme();
    this.isLogged = this.mockAuth.isUser;
  }

  fetchForTheme(): void {
    const themeId = this.activeRouter.snapshot.params['themeId']
    this.apiService.getTheme(themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
