import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'; './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './core/theme-list/theme-list.component';
import { RecentPostListComponent } from './core/recent-post-list/recent-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemesComponent } from './features/themes/themes.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
