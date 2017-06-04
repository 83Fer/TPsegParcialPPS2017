import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

  public user: string;

  tituloCursos: string= "Cursos";
  tituloCuestionarios: string= "Cuestionarios";
	mensaje: string= "";
  curso: string= "";
  cuestionario: string= "";
  valor: string= "";
  muestraOpciones: string= "";

  constructor(private auth: AuthProvider,public alertCtrl: AlertController,) {
   
    this.auth.getUserData().subscribe(data => {
      this.user=data.name;
      //console.log(this.user);  
    });
  }

  seleccionarCurso(){
    let ventana = this.alertCtrl.create({
                  title: this.tituloCursos,
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "1ºA",
                      handler: data => {
                        console.log('Curso: 1ºA');
                        this.curso= "1ºA";
                        this.muestraOpciones= "muestra";
                        }
                      },
                      
                    {
                      text: "1ºB",
                      handler: data => {
                        console.log('Curso: 1ºB');
                        this.curso= "1ºB";
                        this.muestraOpciones= "muestra";
                        }
                      },
                    {
                      text: "2ºA",
                      handler: data => {
                        console.log('Curso: 2ºA');
                        this.curso= "2ºA";
                        this.muestraOpciones= "muestra";
                        }
                      },
                    {
                      text: "2ºB",
                      handler: data => {
                        console.log('Curso: 2ºB');
                        this.curso= "2ºB";
                        this.muestraOpciones= "muestra";
                        }
                      }
                    ]
                  });
    ventana.present(ventana);
  }

  crearCuestionario(){
    this.valor= "crear";
  }

  modificarCuestionario(){
    this.muestraOpciones= "";
    let ventana = this.alertCtrl.create({
                  title: this.tituloCuestionarios,
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "Sistemas Operativos",
                      handler: data => {
                        console.log('Cuestionario: Sistemas Operativos');
                        this.cuestionario= "Sistemas Operativos";
                        this.muestraOpciones= "muestra";
                        }
                      },                 
                    {
                      text: "Base de Datos",
                      handler: data => {
                        console.log('Cuestionario: Sistemas Operativos');
                        this.cuestionario= "Sistemas Operativos";
                        this.muestraOpciones= "muestra";
                        }
                      }
                  ]
    });
    ventana.present(ventana);
  }

  eliminarCuestionario(){
        this.muestraOpciones= "";
        let ventana = this.alertCtrl.create({
                  title: this.tituloCuestionarios,
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "Investigación Operativa",
                      handler: data => {
                        console.log('Cuestionario: Investigación Operativa');
                        this.cuestionario= "Investigación Operativa";
                        this.muestraOpciones= "muestra";
                        }
                      },               
                    {
                      text: "Programación III",
                      handler: data => {
                        console.log('Cuestionario: Programación III');
                        this.cuestionario= "Programación III";
                        this.muestraOpciones= "muestra";
                        }
                      }
                  ]
        });
    ventana.present(ventana);
  }

  verCuestionarios(){
    
  }

  enviarTipoDeCuestionario(){
    this.valor= "cargarPreguntas";
  }

  cargarPreguntas(){
    this.valor= "cargarRespuestas";
  }

  cargarRespuestas(){
    this.valor= "grabarCuestionario";
  }

  cancelarCarga(){
    this.muestraOpciones= "";
    this.valor= "";
  }
}
