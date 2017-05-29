import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

  public user: string;
  constructor(private auth: AuthProvider) {
   
    this.auth.getUserData().subscribe(data => {
      this.user=data.name;
      //console.log(this.user);  
    });
  }
}
