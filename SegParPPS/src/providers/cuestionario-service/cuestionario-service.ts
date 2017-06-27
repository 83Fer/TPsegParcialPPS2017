import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';


/*
  Generated class for the CuestionarioServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CuestionarioServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CuestionarioServiceProvider Provider');
  }

  ExtraerDatos(res: Response){
    return res.json() || "No ha datos";
  }

  ErrorExtraerDatos(res: Response){
    return "Error ";
  }

   // Agregar Usuario
 AgregarCuestionario(cuestionario: any) 
  { 
    
     let datos={
       idUsuario :  cuestionario.idUsuario ,
       titulo : cuestionario.titulo ,
       fecIni : cuestionario.fecIni ,
       fecFin : cuestionario.fecFin ,
       estado : "Alta" ,
       idCurso : cuestionario.idCurso ,
       tipo : cuestionario.tipo 
      };
            
            console.log(datos);
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

  TraerUltimoCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }


}
