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

   // Agregar Respuesta
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


}
