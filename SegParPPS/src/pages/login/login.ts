import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from './../../providers/auth/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private loadingCtrl: LoadingController
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openForgotPasswordPage(): void {
    this.navCtrl.push(ForgotPasswordPage);
  }

  openSignUpPage(): void {
    this.navCtrl.push(SigninPage);
  }

  login() {
      let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
    loading.present();

    this.auth.loginWithEmail(this.form).subscribe(data => {
      this.navCtrl.setRoot(HomePage);
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });
  }

  

}
