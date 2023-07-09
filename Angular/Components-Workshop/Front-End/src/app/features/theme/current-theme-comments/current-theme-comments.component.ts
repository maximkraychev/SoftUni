import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme-comments',
  templateUrl: './current-theme-comments.component.html',
  styleUrls: ['./current-theme-comments.component.css']
})
export class CurrentThemeCommentsComponent implements OnInit {

  currentThemeId: string | undefined;

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe({
      next: (params): void => {
        this.currentThemeId = params.get('themeId') || undefined;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
