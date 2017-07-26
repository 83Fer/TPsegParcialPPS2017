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
       tipo : cuestionario.tipo,
                      preg1: cuestionario.preg1,
                      preg2: cuestionario.preg2,
                      preg3: cuestionario.preg3,
                      preg4: cuestionario.preg4,
                      resp1preg1: cuestionario.resp1preg1,
                      resp2preg1: cuestionario.resp2preg1,
                      resp3preg1: cuestionario.resp3preg1,
                      resp1preg2: cuestionario.resp1preg2,
                      resp2preg2: cuestionario.resp2preg2,
                      resp3preg2: cuestionario.resp3preg2,
                      resp1preg3: cuestionario.resp1preg3,
                      resp2preg3: cuestionario.resp2preg3,
                      resp3preg3: cuestionario.resp3preg3,
                      resp1preg4: cuestionario.resp1preg4,
                      resp2preg4: cuestionario.resp2preg4,
                      resp3preg4: cuestionario.resp3preg4
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

  // Traer todos los cuestionarios de un profesor(id del profesor)
  TraerTodosLosCuestionariosPorProfesor(id: number)
  {
    console.info("Profesor: " + id);
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idProf/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer todos los cuestionarios de un curso(Para mostrarle a los alumnos)
  TraerTodosLosCuestionariosPorCurso(id : number)
  {
    console.info("Curso: " + id);
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idCurso/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer un cuestionario(estos es para modificar) 
  TraeUnCuestionario(id: number)
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/id/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  } 

  // Borrar un cuestionario
  BorrarCuestionario(id: number)
  {
    console.info("Borrar: " + id);
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/" + id;    
    this.http
      .delete(url)
      .toPromise()
      .then()
      .catch(this.ErrorExtraerDatos);
  }

  // Modificar un cuestionario
  ModificarCuestionario(id: number, cuestionario: any)
  {
    let datos={
       titulo : cuestionario.titulo ,
       fecIni : cuestionario.fecIni ,
       fecFin : cuestionario.fecFin ,
       estado : cuestionario.estado ,
       idCurso : cuestionario.idCurso ,
       tipo : cuestionario.tipo,
                      preg1: cuestionario.preg1,
                      preg2: cuestionario.preg2,
                      preg3: cuestionario.preg3,
                      preg4: cuestionario.preg4,
                      resp1preg1: cuestionario.resp1preg1,
                      resp2preg1: cuestionario.resp2preg1,
                      resp3preg1: cuestionario.resp3preg1,
                      resp1preg2: cuestionario.resp1preg2,
                      resp2preg2: cuestionario.resp2preg2,
                      resp3preg2: cuestionario.resp3preg2,
                      resp1preg3: cuestionario.resp1preg3,
                      resp2preg3: cuestionario.resp2preg3,
                      resp3preg3: cuestionario.resp3preg3,
                      resp1preg4: cuestionario.resp1preg4,
                      resp2preg4: cuestionario.resp2preg4,
                      resp3preg4: cuestionario.resp3preg4
      };
            
            console.log(datos);
    

    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/id/" + id;    
    this.http
      .put(url, datos)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer todos los cuestionarios de un curso que el alumno aun no haya respondido
  TraerTodosLosCuestionariosPorResponder(id : number)
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idCurso/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer todos los cuestionarios de un curso que el alumno haya respondido
  TraerTodosLosCuestionariosRespondidos(id : number)
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/idCurso/" + id;    
    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Traer un cuestionario que un alumno haya respondido
  TraerUnCuestionarioRespondido(idUsuario : number, idCuestionario : number)
  {
    let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/respondio/" + idUsuario + "/" + idCuestionario;    

    return this.http
      .get(url)
      .toPromise()
      .then(this.ExtraerDatos)
      .catch(this.ErrorExtraerDatos);
  }

  // Responder cuestionario
  GuardarRespuestas(cuestionario: any)
  {
    
     let datos={
       idUsuario :  cuestionario.idUsuario ,
       idCuestionario : cuestionario.idCuestionario ,
       preg1resp : cuestionario.preg1resp,
       preg2resp: cuestionario.preg2resp,
       preg3resp: cuestionario.preg3resp,
       preg4resp: cuestionario.preg4resp

      };           
          console.log(datos);
    
   let url = "http://tplabo4.pe.hu/ApiPractica/public/index.php/cuestionario/respondio";
    this.http
             .post(url , datos)
             .toPromise()
             .then()
             .catch(this.ErrorExtraerDatos)
  }

}
