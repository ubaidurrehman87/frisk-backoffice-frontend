import { Component, OnInit , Input , Output} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    console.log(this.isError)

  }

}
