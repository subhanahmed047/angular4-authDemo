import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMessage: string;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {}

  onGoogleLogin() {
    this._authService.loginGoogle().then(
      (success) => {
        this._router.navigate(['']);
      },
      (err) => {
        console.log('Something went Wrong ' + err);
        this.errorMessage = err;
      }
    );
  }

  onFBLogin() {
    this._authService.loginFB().then(
      (success) => {
        this._router.navigate(['']);
      },
      (err) => {
        console.log('Something went Wrong ' + err);
        this.errorMessage = err;
      }
    );
  }

  onEmailLogin(form: HTMLFormElement) {
    this._authService.loginEmail(form.value.email, form.value.password)
      .then(
        (success) => {
          this._router.navigate(['']);
        },
        (err) => {
          console.log('Something Went Wrong! ' + err);
          this.errorMessage = err;
        }
      );
  }

}
