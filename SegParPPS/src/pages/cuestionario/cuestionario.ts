import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

// Plugins
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

  //////////////////////////////////////////// Variables
  public user: string;

  tituloCursos: string= "Cursos";
  tituloCuestionarios: string= "Cuestionarios";
	mensaje: string= "";
  curso: string= "";
  cuestionario: string= "";
  valor: string= "";
  muestraOpciones: string= "";

  nombreCuestionario: string= "";
  tipoCuestionario: string= "";
  pregunta1: string= "";
  pregunta2: string= "";
  pregunta3: string= "";
  pregunta4: string= "";
  pregunta1respuesta1: string= "";
  pregunta1respuesta2: string= "";
  pregunta1respuesta3: string= "";
  pregunta2respuesta1: string= "";
  pregunta2respuesta2: string= "";
  pregunta2respuesta3: string= "";
  pregunta3respuesta1: string= "";
  pregunta3respuesta2: string= "";
  pregunta3respuesta3: string= "";
  pregunta4respuesta1: string= "";
  pregunta4respuesta2: string= "";
  pregunta4respuesta3: string= "";

  ////////////////////////////////////////////////////////////////////////////////////////////////////// Constructor
  constructor(private auth: AuthProvider,public alertCtrl: AlertController,private vibration: Vibration,
                private nativeAudio: NativeAudio) {
   
    this.auth.getUserData().subscribe(data => {
      this.user=data.name;
      //console.log(this.user);  
    });

      this.nativeAudio.preloadSimple('empate', 'assets/sound/correcto.mp3');
  }

  //////////////////////////////////////////////////////////////// Seleccionar Curso
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
    this.vibration.vibrate(100);
  }

  //////////////////////////////////////////////////////////////// Crear Cuestionario
  crearCuestionario(){
    this.valor= "crear";
    this.nativeAudio.play('correcto', () => console.log("correcto"));
    this.vibration.vibrate(100);
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
    this.vibration.vibrate(100);
  }

  //////////////////////////////////////////////////////////////// Eliminar Cuestionario
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
    this.vibration.vibrate(100);
  }

  //////////////////////////////////////////////////////////////// Ver Cuestionarios
  verCuestionarios(){
    
  }

  //////////////////////////////////////////////////////////////// Tipo de Cuestionario
  enviarTipoDeCuestionario(){
    this.valor= "cargarPreguntas";
  }

  //////////////////////////////////////////////////////////////// Cargar Preguntas
  cargarPreguntas(){
    this.valor= "cargarRespuestas";
  }

  //////////////////////////////////////////////////////////////// Cargar respuestas
  cargarRespuestas(){
    this.valor= "grabarCuestionario";
  }

  //////////////////////////////////////////////////////////////// Cancelar Carga
  cancelarCarga(){
    this.muestraOpciones= "";
    this.valor= "";
  }
}
