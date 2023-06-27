import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient ) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/Usuarios');
  }

  getRols(){
    return this.httpClient.get('http://127.0.0.1:8000/api/rols');
  }

  getUser(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getUser/'+id);
  }

  getPrivilegios(){
    return this.httpClient.get('http://127.0.0.1:8000/api/privilegios');
  }

  addPrivilegio(description:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addPrivilegio', description);
  }

  deletePrivilegio(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletePrivilegio/'+id);
  }

  addRol(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addRol', data);
  }

  deleteRol(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteRol/'+id);
  }
  
  adduser(datosUsuario:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addUser', datosUsuario);
  }
  
  updateTypeU(id:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/updateTypeUser', id);
  }

  UpdateUserz(id:any, datosUsuario:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateUser/'+id, datosUsuario);
  }

  UpdateRol(id:any, datosRol:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/actualizarRol/'+id, datosRol);
  }

  getRolPrivId(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/getRoles/' + id);
  }  

  deleteRolPriv(idpriv:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteRolPriv', idpriv);
  }

  addPriRol(datosPriRol:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addPriRol', datosPriRol);
  }
  
  login(datosUsuario:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/loginAdmin', datosUsuario);
  }

  logout(allDevice: boolean){
    const user:any = localStorage.getItem('user');
    console.log(user)
    const userObj = JSON.parse(user);        
    const token = userObj.token;  
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' });
    return this.httpClient.post('http://127.0.0.1:8000/api/logout',{allDevice:allDevice},{headers: tokenHeader})
  }

  getRolPrivUser(id_rol:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/rolPrivUser',id_rol);
  }

  getAsociasiones(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getAsociasiones');
  }

  getRecursos(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getRecursos');
  }

  getTypeRecursos(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getTypeRecurs');
  }

  addTypeRecurso(dataTypeRecurso:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addTypeRecurso', dataTypeRecurso);
  }

  agregarImg(id:any, dataImg:any){
    const headers = new HttpHeaders();
    return this.httpClient.post('http://127.0.0.1:8000/api/agregarImg/'+id, dataImg,{
      headers:headers
    });
  }

  handle(){
    return this.httpClient.get('http://127.0.0.1:8000/api/handle')
  }

  bdRespose(dataBd:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/bdRespose',dataBd)
  }

  bdData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/index')
  }


}
