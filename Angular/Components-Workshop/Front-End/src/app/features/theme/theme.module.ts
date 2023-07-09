import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing';
import { ThemesComponent } from './themes/themes.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostListComponent } from './recent-post-list/recent-post-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurrentThemeCommentsComponent } from './current-theme-comments/current-theme-comments.component';

@NgModule({
  declarations: [
    ThemesComponent,
    NewThemeComponent,
    ThemeListComponent,
    RecentPostListComponent,
    CurrentThemeCommentsComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule
  ]
})
export class ThemeModule { }
