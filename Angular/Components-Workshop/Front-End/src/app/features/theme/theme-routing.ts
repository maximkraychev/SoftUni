import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ThemesComponent } from "./themes/themes.component";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { CurrentThemeCommentsComponent } from "./current-theme-comments/current-theme-comments.component";
import { CanActivateGuard } from "src/app/shared/guards/can-activate-guard.service";


const routes: Routes = [
    { path: 'themes', component: ThemesComponent },
    // { path: 'new-theme', canActivate: [CanActivateGuard], component: NewThemeComponent },
    { path: 'new-theme', component: NewThemeComponent },  // without guard
    { path: 'theme/:themeId', component: CurrentThemeCommentsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }