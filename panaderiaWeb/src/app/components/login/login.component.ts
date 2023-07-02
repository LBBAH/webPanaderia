import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private dataUserAdmin:UsersService,
    private router: Router
  ){
    this.loginUser=this.formulario.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  login():any{
    
    if(this.loginUser.valid){
      this.dataUserAdmin.login(this.loginUser.value).subscribe((res:any) => {

        let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }else{
          localStorage.setItem('user',JSON.stringify(res))
          this.router.navigate(['']).then(()=>{
            window.location.reload();
          });        
        }              
      })
      
    }else{
      alert("Llene todos los datos")
    }
  }


}


