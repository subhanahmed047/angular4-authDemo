import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {}

  onSignup(form: HTMLFormElement){
    this._authService.signup(form.value.email, form.value.password)
      .then(
        (success) => {
          this._router.navigate(['auth']);
        },
        (err) => {
          console.log('Something Went Wrong! ' + err);
          this.errorMessage = err;
        }
      );
  }
}
