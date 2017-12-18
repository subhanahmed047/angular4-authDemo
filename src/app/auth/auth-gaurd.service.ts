import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";
import {isNullOrUndefined} from "util";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _af: AngularFireAuth, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._af.authState.map(auth => {
      if (isNullOrUndefined(auth)) {
        this._router.navigate(['/auth']);
        return false;
      } else {
        return true;
      }
    });
  }
}

