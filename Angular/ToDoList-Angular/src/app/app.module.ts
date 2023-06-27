import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { TodolistComponent } from './main/todolist/todolist.component';
import { ListItemComponent } from './main/todolist/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    TodolistComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    //CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
