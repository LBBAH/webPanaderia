import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from './recurso';
import { tipoRecurso } from 'src/app/service/tiporecurso';

@Injectable({
  providedIn: 'root'
})
export class IddServicesService {

  constructor( private httpClient: HttpClient ) { }
    
  
    getData(){
      return this.httpClient.get('http://127.0.0.1:8000/api/Usuarios');
    }
  
    adduser(datosUsuario:any) {
      return this.httpClient.post('http://127.0.0.1:8000/api/addUser', datosUsuario);
    }
  
    login(datosUsuario:any) {
      return this.httpClient.post('http://127.0.0.1:8000/api/login', datosUsuario);
    }
  
    getTypeRecurs() {
      return this.httpClient.get('http://127.0.0.1:8000/api/getTypeRecurs');
    }
  
    findBandId(id:any):Observable<Recurso[]>{
      return this.httpClient.get<Recurso[]>('http://127.0.0.1:8000/api/getrecurosId/'+id);
    }
  
    search():Observable<tipoRecurso[]>{
      return this.httpClient.get<tipoRecurso[]>('http://127.0.0.1:8000/api/search');
    }

    logout(allDevice: boolean){
      const user:any = localStorage.getItem('user');
      const userObj = JSON.parse(user);      
  
      const token = userObj.token;
  
      var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
      return this.httpClient.post('http://127.0.0.1:8000/api/logout',{allDevice:allDevice},{headers: tokenHeader})
    }

    passwordQuestionSecret(email:any) {
      return this.httpClient.post('http://127.0.0.1:8000/api/questionSecrectUser', email);
    }

    anserQuestionSecret(dataAnswer:any) {
      return this.httpClient.post('http://127.0.0.1:8000/api/respuesta', dataAnswer);
    }
  
    UpdateUserz(id:any, datosUsuario:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/updateUser/'+id, datosUsuario);
    }

    getQuestions(){
      return this.httpClient.get('http://127.0.0.1:8000/api/getQuestion');
    }

    addQuestionUser(idUser:any, dataQuestionUser:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/addQuestionUser/'+idUser, dataQuestionUser);
    }

    changePassword(idUser:any, dataQuestionUser:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/changePassword/'+idUser, dataQuestionUser);
    }

    getrecurosIdUser(id:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/getrecurosIdUser',id);
    }
    
    getAsociasiones(){
      return this.httpClient.get('http://127.0.0.1:8000/api/getAsociasiones');
    }

    getTypeRecursos(){
      return this.httpClient.get('http://127.0.0.1:8000/api/getTypeRecurs');
    }

    getrecurosEditId(id:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/getrecurosEditId',id);
    }

    showObejtivoCursoId(id:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/showObejtivoCursoId',id);
    }

    showSeccionCursoId(id:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/showSeccionCursoId',id);
    }

    getRolPrivUser(id_rol:any){
      return this.httpClient.post('http://127.0.0.1:8000/api/rolPrivUser',id_rol);
    }
}
