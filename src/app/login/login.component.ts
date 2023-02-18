import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      id:["",Validators.required],
      contrasena:["",Validators.required]
    })
  }
  get form(){
    return this.loginForm.controls
  }
  onSubmit(){
    console.log('enviado',this.loginForm)
  }
}
