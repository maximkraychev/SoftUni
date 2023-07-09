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
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FeaturesModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
