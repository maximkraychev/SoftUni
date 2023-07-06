import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', children: [
    { path: 'login', component: LoginComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 // {
  //   path: 'auth',
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'register', component: HomeComponent },
  //     { path: 'logout', component: HomeComponent }
  //   ]
  // }
