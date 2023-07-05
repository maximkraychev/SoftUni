import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // RouterModule.forChild([
    //   {
    //     path: 'auth/login',
    //     component: LoginComponent
    //   }
    // ])
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class FeaturesModule { }
