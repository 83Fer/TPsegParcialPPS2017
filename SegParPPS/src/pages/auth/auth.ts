import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from './../../providers/auth/auth';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
 error: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {}

  ngOnInit() {

  }

  openSignUpPage() {
    this.navCtrl.push(SigninPage);
  }


  openLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.error = err;
    });
  }
  loginUserWithGoogle() {
    this.auth.googleauth().subscribe(data => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.error = err;
    });
  }
}
