import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthGuard} from "./auth/auth-gaurd.service";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
