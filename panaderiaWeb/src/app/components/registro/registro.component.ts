import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formUser: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;

  constructor( public formulario:FormBuilder, private dataService:IddServicesService ) { 
    this.formUser=this.formulario.group({
      name:['', [Validators.required]],
      nameUser:['', [Validators.required]],
      phone:['', [Validators.required]],
      email:['' , [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPattern)]],
      confirmpassword:['', [Validators.required]],
      confirmAP:['', [Validators.requiredTrue]]
    },{
      validators: this.MustMatch("password", "confirmpassword")
    });
  }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(){
    this.dataService.getData().subscribe(res => {
      console.log(res)
    })
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['mustMatch']) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      
    }
  }

  registrarUsuario(): any{
    if(this.formUser.valid){
      this.dataService.adduser(this.formUser.value).subscribe(res => {
        let arr = Object.entries(res);
        if(arr[0][0] == "error"){
          alert(arr[0][1])
        }

        if(arr[0][0] == "success"){
          alert(arr[0][1])
          this.formUser.reset()
        }
      
      })
    }
    if(!this.formUser.valid){
      alert("Llene todos los campos correctamente")
    }
  }

  get _name(){ return this.formUser.get('name');}
  get nameUser(){ return this.formUser.get('nameUser');}
  get phone(){ return this.formUser.get('phone');}
  get email(){ return this.formUser.get('email');}
  get password(){ return this.formUser.get('password');}
  get confirmpassword(){ return this.formUser.get('confirmpassword');}  
  get confirmAP(){ return this.formUser.get('confirmAP');}

}
