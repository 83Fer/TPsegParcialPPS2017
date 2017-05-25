import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthPage } from '../auth/auth';
import { AuthProvider } from './../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private auth: AuthProvider) {}

  logout(){
      
    this.auth.logout();
  
     this.navCtrl.push(AuthPage);
  }
}
