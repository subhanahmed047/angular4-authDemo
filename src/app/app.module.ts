import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";

import {environment} from "../environments/environment";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AuthService} from "./auth/auth.service";
import {RoutingModule} from "./routing.module";
import {FormsModule} from "@angular/forms";
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
