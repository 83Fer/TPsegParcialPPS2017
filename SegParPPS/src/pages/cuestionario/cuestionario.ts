import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

  public user: string;

  titulo: string= "Cursos"
	mensaje: string= ""
  curso: string= ""

  constructor(private auth: AuthProvider,public alertCtrl: AlertController,) {
   
    this.auth.getUserData().subscribe(data => {
      this.user=data.name;
      //console.log(this.user);  
    });
  }

  seleccionarCurso(){
    let ventana = this.alertCtrl.create({
                  title: this.titulo,
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "1ºA",
                      handler: data => {
                        console.log('Curso: 1ºA');
                        this.curso= "1ºA";
                        }
                      },
                      
                    {
                      text: "1ºB",
                      handler: data => {
                        console.log('Curso: 1ºB');
                        this.curso= "1ºB";
                        }
                      },
                    {
                      text: "2ºA",
                      handler: data => {
                        console.log('Curso: 2ºA');
                        this.curso= "2ºA";
                        }
                      },
                    {
                      text: "2ºB",
                      handler: data => {
                        console.log('Curso: 2ºB');
                        this.curso= "2ºB";
                        }
                      }
                    ]

                  });
    ventana.present(ventana);
  }
}
