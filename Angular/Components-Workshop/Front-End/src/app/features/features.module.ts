import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    ThemeModule,
    RouterLink
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class FeaturesModule { }
