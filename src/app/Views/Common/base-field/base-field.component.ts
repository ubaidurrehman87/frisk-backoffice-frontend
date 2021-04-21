import { Component, OnInit , Input , Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.css']
})


export class BaseFieldComponent implements OnInit {

  @Input('classNames') classNames : string;
  @Input('fieldName') fieldName : string;
  @Input('placeholderText') placeholderText : string;
  @Input('infoMessage') infoMessage : string;
  @Input('required') required : boolean;
  @Input('maxLength') maxLength : number;
  // AddOns
  @Input('leftAddon') leftAddon : string;
  @Input('rightAddon') rightAddon : string; 
  // Error
  @Input('isError') isError : boolean;
  @Input('errorMessage') errorMessage : string;
  // extra
  @Input('inputType') inputType : string;
  @Input('minLength') minLength : number;
  @Input() bindModelData: any;
  @Output() valueChange = new EventEmitter();    

  constructor() { }

  ngOnInit() {
  }

  onChangeField(pEvent){
    
    this.isError= false;
    if(this.inputType=='email'){
      this.emailValidator(pEvent.target.value);
    }
    else if(this.inputType=='password'){
      this.passwordValidator(pEvent.target.value)
    }
    else {
      this.requiredValidator(pEvent.target.value);
    }
    // console.log(event);
    this.valueChange.emit({
      isError : this.isError,
      inputValue : pEvent.target.value
    })
  }

  // email Validation
  emailValidator(email){
    if(!email && this.required==true){
      this.isError = true;
      this.errorMessage = "Email is required.";
      return ;
    }
    else if(this.validateEmail(email)==false){
      this.isError = true;
      this.errorMessage = "Please enter valid email address.";
      return ;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // password Validation
  passwordValidator(password){
    if(!password && this.required==true){
      this.isError = true;
      this.errorMessage = "Password is required.";
      return ;
    }
    else if(this.validatePassword(password)==false){
      this.isError = true;
      this.errorMessage = "Please enter minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number";
      return ;
    }
  }

  validatePassword(password){
    const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const reg_password2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    return reg_password.test(password);
  }
  requiredValidator(text){
    let type = this.inputType[0].toUpperCase() + this.inputType.slice(1).toLowerCase();
    if(!text && this.required){
      this.isError = true;
      this.errorMessage = type+" is required.";
      return ;
    }
  }

}

export interface InputValues{
  isError : boolean,
  inputValue : string
}