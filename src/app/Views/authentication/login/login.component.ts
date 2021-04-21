import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError = false;

  loginEmail : any;
  loginPassword : any;

  loginForm : FormGroup;
  loginFormDetail : any;
  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.isError = true;
  
  }

  emailChange(event : any){
    if(event.isError == true){
      this.isError = true;
      return
    }
    this.isError = false;
    this.loginEmail = event.inputValue; 
  }
  passwordChange(event : any){
    if(event.isError == true){
      this.isError = true;
      return
    }
    this.isError = false;
    this.loginPassword = event.inputValue;
  }
  
  onSubmit(){
    // alert(this.loginEmail);
    this.loginFormDetail = {
      email : this.loginEmail,
      password : this.loginPassword
    }
    console.log(this.loginFormDetail);
    if(this.isError==true){
      return
    }
    this.loginService.onLogin(this.loginFormDetail).subscribe((data)=>{
      console.log(data);
    })
  }

}
