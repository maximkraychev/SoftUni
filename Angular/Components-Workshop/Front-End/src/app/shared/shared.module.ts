import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { WelcomeComponent } from './welcome/welcome.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    WelcomeComponent
  ]
})
export class SharedModule { }
