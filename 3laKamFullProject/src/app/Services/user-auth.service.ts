import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService  {
  currUser:string=""
  user:BehaviorSubject<string>;
  constructor() {
    this.user=new BehaviorSubject<string>("")
   }

  login(userName:string,password:string)
  {
    //call login API, and get access token
    let usrToken=this.generateToken(10);
    this.currUser=userName;
    if(!localStorage.getItem(this.currUser))
      localStorage.setItem(this.currUser,usrToken);
    this.user.next(userName);
  }
 
  
  logout()
  {
    localStorage.removeItem(this.currUser)

  }
  get isUserLogged():boolean
  {
    return (localStorage.getItem(this.currUser))?true:false;
  }
   generateToken(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
}
