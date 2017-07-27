import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

// Plugins
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

// Maps
import { AgmCoreModule } from '@agm/core';

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
  tipoElemento: string= "radiobutton";

  tituloCursos: string= "Cursos";
  tituloCuestionarios: string= "Cuestionarios";
  mensaje: string= "";
  
  idUsuario: number= 1;
  idCurso: number= 1;
  listaCuestionario: Array<any>;
  // Perfil
  perfil: string= "";

  aModificar: any= null;

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

  // Vista Profesor
  verElCuestionario: string = "";
  idCuestionario: number= null;

  // Vista Alumno
  cuestionarioResp: string= "";
  verCuestionarioAlumno: string = "";
  mostrarBotones: string = "mostrar";

  cuestionarioPrueba: string= "Prueba";
  respuesta1: string= "";
  respuesta2: string= "";
  respuesta3: string= "";
  respuesta4: string= "";

  //Maps
  latitud: number = -34.662251;
  longitud: number = -58.364710;
  mostrarMapa: string = ""

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
      this.user=data.email;
      console.log("Usuario: " + this.user); 

      if(this.user == "usuario@hotmail.com"){
        this.perfil= "alumno";
        console.log("Perfil: " + this.perfil); 
      }

      if(this.user == "profesor@hotmail.com"){
        this.perfil= "profesor";
        console.log("Perfil: " + this.perfil); 
      }
    });

      this.nativeAudio.preloadSimple('correcto', 'assets/sound/correcto.mp3');
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
    this.vibration.vibrate(100);
  }

  modificarCuestionarioPopUp(id, titulo){
    this.muestraOpciones= "";
    let ventana = this.alertCtrl.create({
                  title: '¿Desea modificar el cuestionario "' + titulo +'"?',
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "Aceptar",
                      handler: data => {
                        console.log('');
                        }
                      },   
                    {
                      text: "Cancelar",
                      handler: data => {
                        console.log('');
                        }
                      },         
                  ]
    });
    ventana.present(ventana);
    this.vibration.vibrate(100);
  }

  //////////////////////////////////////////////////////////////// Eliminar Cuestionario
  eliminarCuestionarioPopUp(id, titulo){
        this.muestraOpciones= "";
        let ventana = this.alertCtrl.create({
                  title: '¿Desea eliminar el cuestionario "' + titulo +'"?',
                  message: this.mensaje, 
                  buttons:[
                    {
                      text: "Aceptar",
                      handler: data => {
                        console.log("ID a borrar: " + id);
                        this.borrarCuestionario(id);
                        }
                      },   
                    {
                      text: "Cancelar",
                      handler: data => {
                        console.log('');
                        }
                      },         
                  ]
        });
    ventana.present(ventana);
    this.vibration.vibrate(100);
  }

  //////////////////////////////////////////////////////////////// Ver Cuestionarios
  verCuestionario(){
    this.valor= "ver";
    this.obtenerCuestionariosPorProfesor(this.idUsuario);
  }

  editarCuestionario(){
    this.valor="editar";
    this.obtenerCuestionariosPorProfesor(this.idUsuario);
  }

  mirarCuestionario(id:number){
    console.log("MirarCuest id " + id);
    this.obtenerCuestionarioPorId(id);
    this.valor= "verCuestionarioProfesor";
  }

  //////////////////////////////////////////////////////////////// Tipo de Cuestionario
  enviarTipoDeCuestionario(tipo){
    this.valor= "cargarPreguntas";
    this.tipoCuestionario= tipo;
    console.info(this.tipoCuestionario, this.nombreCuestionario);
    this.nativeAudio.play('correcto', () => console.log("correcto"));
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
                      preg1: this.pregunta1,
                      preg2: this.pregunta2,
                      preg3: this.pregunta3,
                      preg4: this.pregunta4,
                      resp1preg1: this.pregunta1respuesta1,
                      resp2preg1: this.pregunta1respuesta2,
                      resp3preg1: this.pregunta1respuesta3,
                      resp1preg2: this.pregunta2respuesta1,
                      resp2preg2: this.pregunta2respuesta2,
                      resp3preg2: this.pregunta2respuesta3,
                      resp1preg3: this.pregunta3respuesta1,
                      resp2preg3: this.pregunta3respuesta2,
                      resp3preg3: this.pregunta3respuesta3,
                      resp1preg4: this.pregunta4respuesta1,
                      resp2preg4: this.pregunta3respuesta2,
                      resp3preg4: this.pregunta4respuesta3
                    };
    //Se agrega cuestionario a la base de datos
    this.datosApiCuestionario.AgregarCuestionario(cuestionario);  
    document.getElementById("volverMenuProf").click();              
  }

  //////////////////////////////////////////////////////////////// Obtiene todos los cuestionarios de un profesor
  obtenerCuestionariosPorProfesor(idProfesor){
    this.datosApiCuestionario.TraerTodosLosCuestionariosPorProfesor(idProfesor)
    .then(datosApiCuestionario => {
      this.listaCuestionario = datosApiCuestionario;
    }).catch(error => {
      console.log(error);
    })
  }

  //////////////////////////////////////////////////////////////// Obtiene todos los cuestionarios de un curso
  obtenerCuestionariosPorCurso(idCurso){
    this.datosApiCuestionario.TraerTodosLosCuestionariosPorCurso(idCurso)
    .then(datosApiCuestionario => {
      this.listaCuestionario = datosApiCuestionario;
    }).catch(error => {
      console.log(error);
    })
  }

  //////////////////////////////////////////////////////////////// Obtiene un cuestionario
  obtenerCuestionarioPorId(idCuestionario){
    this.datosApiCuestionario.TraeUnCuestionario(idCuestionario)
    .then(datosApiCuestionario => {
      this.listaCuestionario = datosApiCuestionario;
    }).catch(error => {
      console.log(error);
    })
  }

  //////////////////////////////////////////////////////////////// Borra un cuestionario
  borrarCuestionario(idCuestionario){
    this.datosApiCuestionario.BorrarCuestionario(idCuestionario);

      var temp=this;
      setTimeout(function(){
          console.log("Profesor luego de borrar: " + temp.idUsuario);
          temp.obtenerCuestionariosPorProfesor(temp.idUsuario);
      }, 600);
  }

  // modificarCuestionario(idCuestionario){
  //   this.datosApiCuestionario.ModificarCuestionario(idCuestionario, this.aModificar)
  //   .then(datosApiCuestionario => {
  //     this.listaCuestionario = datosApiCuestionario;
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

// ALUMNO ///////////////////////////////////////////////////////////////////////////////////////////////////////// 

// MAPS ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  seleccionarMapa(){
    this.valor= "muestraMapa";
  }

  volver(){
    this.valor= "";
  }

// RESPONDIDOS ////////////////////////////////////////////////////////////////////////////////////////////////////

// Ver el cuestionario
seleccionarCuestionarioResp(){
  this.valor= "cuestionarioAlumno";
  this.verCuestionarioAlumno= "verCuestionarios";
  this.obtenerCuestionariosPorCurso(this.idCurso);
}

responderCuestionario(idCuestionario){
  this.verCuestionarioAlumno= "hacerCuestionario";
  this.obtenerCuestionarioPorId(idCuestionario);
}

  verRespondidos(){
  this.valor= "cuestionarioAlumno";
  this.verCuestionarioAlumno= "verCuestionariosRespondidos";
  this.obtenerCuestionariosPorCurso(this.idCurso);
}


  // Responder Cuestionarios
  enviarRespuestas(idCuestionario){

    // Se crean respuestas
    let cuestionario={
                      idUsuario: "4",//hacerlo dinamico pidiendo el id Usuario
                      idCuestionario: idCuestionario,
                      preg1resp: this.respuesta1,
                      preg2resp: this.respuesta2,
                      preg3resp: this.respuesta3,
                      preg4resp: this.respuesta4
                    };
    //Se agregan respuestas a la base de datos
    this.datosApiCuestionario.GuardarRespuestas(cuestionario);  
    // document.getElementById("volverMenuAlum").click();        
  }

  verCuestionarioRespondido(idCuestionario){
    this.valor= "respondidos";

    this.datosApiCuestionario.TraerUnCuestionarioRespondido(4, idCuestionario)
    .then(datosApiCuestionario => {
      this.listaCuestionario = datosApiCuestionario;
    }).catch(error => {
      console.log(error);
    })
  }

}
