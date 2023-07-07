import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostListComponent } from './recent-post-list/recent-post-list.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    RecentPostListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    RecentPostListComponent
  ]
})
export class CoreModule { }
