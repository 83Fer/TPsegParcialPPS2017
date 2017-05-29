import { Component } from '@angular/core';
import { NavController, LoadingController,  MenuController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { SigninPage } from '../signin/signin';
import { AuthProvider } from './../../providers/auth/auth';

//Vistas
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider,
    private loadingCtrl: LoadingController, public menu: MenuController,
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
      this.navCtrl.setRoot(TabsPage);
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
    setAdmin() {
    this.form ={
      email: "noelia@hotmail.com",
      password: "23232"
    }
  }
  setUsuario() {
    this.form ={
      email: "usuario@hotmail.com",
      password: "huhuhu7878"
    }
  }
  setProfesor() {
    this.form ={
      email: "profesor@hotmail.com",
      password: "jojo34343"
    }
  }


  //Agregado 28/05/2017******************
  ionViewDidEnter() {
    // Inhabilitar el menu
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // Habilitar el menu
    this.menu.enable(true);
  }

  loginUserWithFacebook() {
    this.auth.loginWithFacebook().subscribe(data => {
      this.navCtrl.setRoot(TabsPage);
    }, err => {
      this.error = err;
    });
  }
  loginUserWithGoogle() {
    this.auth.googleauth().subscribe(data => {
      this.navCtrl.setRoot(TabsPage);
    }, err => {
      this.error = err;
    });
  }
  //************************************ 

}
