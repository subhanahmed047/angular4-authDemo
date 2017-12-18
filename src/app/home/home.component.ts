import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this._authService.logout()
      .then(
        (success) => {
          this._router.navigate(['auth']);
        },
      (err) => console.log('Unable to Logout, Something went wrong.')
      );
  }
}
