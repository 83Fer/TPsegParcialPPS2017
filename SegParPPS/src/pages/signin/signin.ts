import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { LoginPage } from '../login/login';
import { AuthProvider } from './../../providers/auth/auth';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController,
    private auth: AuthProvider,
    private loadingCtrl: LoadingController,
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openLoginPage(): void {
    this.navCtrl.push(LoginPage);
  }

  register() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        this.error = registerError;
      }, 1000);
    });
  }
}

