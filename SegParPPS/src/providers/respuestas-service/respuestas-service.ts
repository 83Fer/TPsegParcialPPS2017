import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';



/*
  Generated class for the RespuestasServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RespuestasServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RespuestasServiceProvider Provider');
  }

  ExtraerDatos(res: Response){
    return res.json() || "No ha datos";
  }

  ErrorExtraerDatos(res: Response){
    return "Error ";
  }

  // Agregar Respuestas
 AgregarRespuesta(respuesta: any) 
  { 
    
     let datos={
       idRespuesta :  respuesta.idRespuesta ,
       idCuestionario : respuesta.idCuestionario ,
       idPregunta : respuesta.idPregunta,
       descripcion: respuesta.descripcion
      };
            
            console.log(datos);
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/respuestas";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  // Traer respuestas de un cuestionario
 TraerRespuestasDeUnCuestionario(cuestionario: number) 
  { 
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/respuestas/id/" + cuestionario;
   return this.http
             .get(url)
             .toPromise()
             .then(this.ExtraerDatos)
             .catch(this.ErrorExtraerDatos)
  }

  // Borrar respuestas de un cuestionario
 BorrarRespuestasDeUnCuestionario(cuestionario: number) 
  { 

   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/respuestas";
    this.http
             .delete(url)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  // Modificar respuestas de un cuestionario
 ModificarRespuestasDeUnCuestionario(respuesta: any) 
  { 
    
     let datos={
       idRespuesta :  respuesta.idRespuesta ,
       idCuestionario : respuesta.idCuestionario ,
       idPregunta : respuesta.idPregunta,
       descripcion: respuesta.descripcion
      };
            
            console.log(datos);
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/respuestas";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  // Traer todas las preguntas de todos los cuestionarios (para estadisticas)
 TraerTodasLasRespuestas(respuesta: any) 
  { 

   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/respuestas";
    this.http
             .get(url)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

}
