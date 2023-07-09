import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterLink
  ],
  exports: [
    HomeComponent,
    NotFoundComponent
  ]
})
export class FeaturesModule { }
