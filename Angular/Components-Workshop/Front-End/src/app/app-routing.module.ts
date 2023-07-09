import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/user/login/login.component';
import { RegisterComponent } from './features/user/register/register.component';
import { LogoutComponent } from './features/user/logout/logout.component';
import { ThemesComponent } from './features/themes/themes.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { NewThemeComponent } from './features/new-theme/new-theme.component';
import { ProfileComponent } from './features/user/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path: 'themes', component: ThemesComponent},
  {path: 'new-theme', component: NewThemeComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

