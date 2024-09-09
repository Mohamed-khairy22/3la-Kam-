import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  login(userName:string,password:string)
  {
    //call login API, and get access token
    let usrToken="123456789";
    localStorage.setItem("token",usrToken);


  }
  logout()
  {
    localStorage.removeItem("token")

  }
  get isUserLogged():boolean
  {
    return (localStorage.getItem("token"))?true:false;

  }
}
