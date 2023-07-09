import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ThemesComponent } from './features/themes/themes.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { NewThemeComponent } from './features/new-theme/new-theme.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path: 'themes', component: ThemesComponent},
  {path: 'new-theme', component: NewThemeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

