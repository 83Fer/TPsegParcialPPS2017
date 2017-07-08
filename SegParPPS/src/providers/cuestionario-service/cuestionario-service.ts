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

// Agregar usuario
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

  // Traer último cuestionario
  TraerUltimoCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer todos los cuestionarios de un profesor
  TraerTodosLosCuestionariosPorProfesor()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer todos los cuestionarios de un curso
  TraerTodosLosCuestionariosPorCurso()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer un cuestionario
  TraeUnCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Borrar un cuestionario
  BorrarCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Modificar un cuestionario
  ModificarCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Responder un cuestionario
  ResponderCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer respuestas de un cuestionario
  TraerRespuestasDeUnCuestionario()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer respuestas de todos los cuestionarios
  TraerRespuestasDeTodosLosCuestionarios()
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idMax/";    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

}
