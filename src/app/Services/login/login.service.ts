import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = "https://daawp84h3h.execute-api.eu-west-1.amazonaws.com/dev/";
  constructor(
    private http : HttpClient
  ) { }

  onLogin(loginObject : any){
    return this.http.post(this.baseURL+'auth/login',loginObject);
  }
}
