import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

// Plugins
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

//Web service
import { CuestionarioServiceProvider } from "./../../providers/cuestionario-service/cuestionario-service";
import { PreguntasServiceProvider } from "./../../providers/preguntas-service/preguntas-service";
import { RespuestasServiceProvider } from "./../../providers/respuestas-service/respuestas-service";

@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html'
})
export class CuestionarioPage {

  //////////////////////////////////////////// Variables
  public user: string;

  // Variables validación
  curso: string= "";
  cuestionario: string= "";
  valor: string= "";
  muestraOpciones: string= "";
  cargaCuestionario: string= "";

  tituloCursos: string= "Cursos";
  tituloCuestionarios: string= "Cuestionarios";
	mensaje: string= "";

  // Perfil
  perfil: string= "alumno";

  // Variables Cuestionario
  nombreCuestionario: string= "Titulo";
  tipoCuestionario: string= "chk";
  pregunta1: string= "1pr";
  pregunta2: string= "2pr";
  pregunta3: string= "3pr";
  pregunta4: string= "4pr";
  pregunta1respuesta1: string= "1resp 1preg";
  pregunta1respuesta2: string= "2resp 1preg";
  pregunta1respuesta3: string= "3resp 1preg";
  pregunta2respuesta1: string= "1resp 2preg";
  pregunta2respuesta2: string= "2resp 2preg";
  pregunta2respuesta3: string= "3resp 2preg";
  pregunta3respuesta1: string= "1resp 3preg";
  pregunta3respuesta2: string= "2resp 3preg";
  pregunta3respuesta3: string= "3resp 3preg";
  pregunta4respuesta1: string= "1resp 4preg";
  pregunta4respuesta2: string= "2resp 4preg";
  pregunta4respuesta3: string= "3resp 4preg";

  // Vista Alumno
  cuestionarioResp: string= "";

  // Variable de Id cuestionario maximo
  idMaxC: string;

  ////////////////////////////////////////////////////////////////////////////////////////////////////// Constructor
  constructor(public datosApiRespuestas : RespuestasServiceProvider,
              public datosApiPreguntas : PreguntasServiceProvider,
              public datosApiCuestionario : CuestionarioServiceProvider,
              private auth: AuthProvider,public alertCtrl: AlertController,
              private vibration: Vibration,
              private nativeAudio: NativeAudio) {
   
    this.auth.getUserData().subscribe(data => {
      this.user=data.name;
      //console.log(this.user);  
    });

      this.nativeAudio.preloadSimple('empate', 'assets/sound/correcto.mp3');
  }

// PROFESOR /////////////////////////////////////////////////////////////////////////////////////////////////////// 

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

    //Se Carga el id Maximo********
    this.datosApiCuestionario.TraerUltimoCuestionario()
    .then(datos => {
      console.log("Carga el Ultimo cuestioanario: " + datos[0]["idCuestionario"]);
      this.idMaxC = datos[0]["idCuestionario"];
    })
    .catch(error =>{
      console.log(error);
    })
    //******************************

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
  enviarTipoDeCuestionario(tipo){
    this.valor= "cargarPreguntas";
    this.tipoCuestionario= tipo;
    console.info(this.tipoCuestionario, this.nombreCuestionario);
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

  //////////////////////////////////////////////////////////////// Guardar Cuestionario
  guardarCuestionario(){
    console.log("Guardo cuestionario");
    var idMax: number;
    idMax = parseInt(this.idMaxC);

    // Se crea el cuestioanrio
    let cuestionario={
                      idUsuario: "1",//hacerlo dinamico pidiendo el id Usuario
                      titulo:this.nombreCuestionario,
                      fecIni: "2017-05-21",//Ingresar fecha inicial de cuestioanario
                      fecFin: "2017-12-31",//ingresar fecha fin de cuestionario
                      idCurso:this.curso,
                      tipo:this.tipoCuestionario,
                    };
    //Se agrega cuestioanario a la base de datos
    this.datosApiCuestionario.AgregarCuestionario(cuestionario);

    // Se crea las preguntas
    let preguntas1={
                      idPregunta: "1",
                      idCuestionario: idMax + 1,
                      descripcion:this.pregunta1
                    };
    this.datosApiPreguntas.AgregarPregunta(preguntas1);

    let preguntas2={
                      idPregunta: "2",
                      idCuestionario: idMax + 1,
                      descripcion:this.pregunta2
                    };
    this.datosApiPreguntas.AgregarPregunta(preguntas2);

    let preguntas3={
                      idPregunta: "3",
                      idCuestionario: idMax + 1,
                      descripcion:this.pregunta3
                    };
    this.datosApiPreguntas.AgregarPregunta(preguntas3);

    let preguntas4={
                      idPregunta: "4",
                      idCuestionario: idMax + 1,
                      descripcion:this.pregunta4
                    };
    this.datosApiPreguntas.AgregarPregunta(preguntas4);
    

    //Se crean las Respuestas

    let rsp1prg1={
                      idRespuesta: "1",
                      idCuestionario: idMax + 1,
                      idPregunta: "1",
                      descripcion:this.pregunta1respuesta1
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp1prg1);

    let rsp2prg1={
                      idRespuesta: "2",
                      idCuestionario: idMax + 1,
                      idPregunta: "1",
                      descripcion:this.pregunta1respuesta2
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp2prg1);

    let rsp3prg1={
                      idRespuesta: "3",
                      idCuestionario: idMax + 1,
                      idPregunta: "1",
                      descripcion:this.pregunta1respuesta3
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp3prg1);             

    let rsp1prg2={
                      idRespuesta: "1",
                      idCuestionario: idMax + 1,
                      idPregunta: "2",
                      descripcion:this.pregunta2respuesta1
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp1prg2);

    let rsp2prg2={
                      idRespuesta: "2",
                      idCuestionario: idMax + 1,
                      idPregunta: "2",
                      descripcion:this.pregunta2respuesta2
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp2prg2);  

    let rsp3prg2={
                      idRespuesta: "3",
                      idCuestionario: idMax + 1,
                      idPregunta: "2",
                      descripcion:this.pregunta1respuesta3
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp3prg2);

    let rsp1prg3={
                      idRespuesta: "1",
                      idCuestionario: idMax + 1,
                      idPregunta: "3",
                      descripcion:this.pregunta3respuesta1
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp1prg3);

    let rsp2prg3={
                      idRespuesta: "2",
                      idCuestionario: idMax + 1,
                      idPregunta: "3",
                      descripcion:this.pregunta3respuesta3
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp2prg3);

    let rsp3prg3={
                      idRespuesta: "3",
                      idCuestionario: idMax + 1,
                      idPregunta: "3",
                      descripcion:this.pregunta3respuesta3
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp3prg3);

    let rsp1prg4={
                      idRespuesta: "1",
                      idCuestionario: idMax + 1,
                      idPregunta: "4",
                      descripcion:this.pregunta4respuesta1
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp1prg4);

    let rsp2prg4={
                      idRespuesta: "2",
                      idCuestionario: idMax + 1,
                      idPregunta: "4",
                      descripcion:this.pregunta4respuesta2
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp2prg4);

    let rsp3prg4={
                      idRespuesta: "3",
                      idCuestionario: idMax + 1,
                      idPregunta: "4",
                      descripcion:this.pregunta4respuesta3
                    };
    this.datosApiRespuestas.AgregarRespuesta(rsp3prg4);

                      
  }

// ALUMNO ///////////////////////////////////////////////////////////////////////////////////////////////////////// 

  seleccionarCuestionarioResp(){
    let ventana = this.alertCtrl.create({
                  title: this.tituloCuestionarios,
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "Cuest. Programación I",
                      handler: data => {
                        this.cuestionarioResp= "Cuest. Programación I";
                        this.cargaCuestionario= "muestra";
                        }
                      },
                      
                    {
                      text: "Cuest. Programación II",
                      handler: data => {
                        this.cuestionarioResp= "Cuest. Programación II";
                        this.cargaCuestionario= "muestra";
                        }
                      },
                    {
                      text: "Cuest. Base de Datos I",
                      handler: data => {
                        this.cuestionarioResp= "Cuest. Base de Datos I";
                        this.cargaCuestionario= "muestra";
                        }
                      },
                    {
                      text: "Cuest. Investigación Operativa",
                      handler: data => {
                        this.cuestionarioResp= "Cuest.o Investigación Operativa";
                        this.cargaCuestionario= "muestra";
                        }
                      }
                    ]
                  });
    ventana.present(ventana);
    this.vibration.vibrate(100);
  }

// Vistas /////////////////////////////////////////////////////////////////////////////////////////////////////////
  cambiarVistaProfesor(){
    this.perfil= "profesor";
    this.valor= "";
  }

  cambiarVistaAlumno(){
    this.perfil= "alumno";
    this.valor= "";
    this.cargaCuestionario= "";
  }

}
