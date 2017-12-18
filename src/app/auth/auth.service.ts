import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";

@Injectable()
export class AuthService {

  constructor(private _af: AngularFireAuth) {}

  loginGoogle(): PromiseLike<any>{
    return this._af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginFB(): PromiseLike<any>{
    return this._af.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginEmail(email: string, pwd: string): PromiseLike<any>{
    return this._af.auth.signInWithEmailAndPassword(email, pwd);
  }

  signup(email: string, pwd: string){
    return this._af.auth.createUserWithEmailAndPassword(email, pwd);
  }

  logout(): PromiseLike<any>{
    return this._af.auth.signOut();
  }

}
