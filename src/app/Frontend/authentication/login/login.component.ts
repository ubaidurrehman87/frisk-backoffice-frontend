import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginEmail : string;
  loginPassword : string;

  loginFormDetail : any;
  constructor(
    // private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   email : ['',Validators.required],
    //   password : ['',Validators.required],
    // });
  }

  
  emailChange(event){
    console.log(event)
    this.loginEmail = event;
  }
  passwordChange(event){
    console.log(event)
    this.loginPassword = event;
  }

  onSubmit(){
    alert(this.loginEmail);
    this.loginFormDetail = {
      email : this.loginEmail,
      password : this.loginPassword
    }
  }

}
