import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    SpinnerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    SpinnerComponent,
    WelcomeComponent
  ]
})
export class SharedModule { }
