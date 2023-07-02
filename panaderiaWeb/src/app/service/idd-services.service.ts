import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
