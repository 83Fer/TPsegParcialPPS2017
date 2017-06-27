import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';


/*
  Generated class for the PreguntasServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PreguntasServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PreguntasServiceProvider Provider');
  }

  ExtraerDatos(res: Response){
    return res.json() || "No ha datos";
  }

  ErrorExtraerDatos(res: Response){
    return "Error ";
  }

   // Agregar Preguntas
 AgregarPregunta(pregunta: any) 
  { 
    
     let datos={
       idPregunta :  pregunta.idPregunta ,
       idCuestionario : pregunta.idCuestionario ,
       descripcion : pregunta.descripcion
      };
            
            console.log(datos);
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/preguntas";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

}
