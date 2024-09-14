import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, catchError, from, Observable, of, retry, throwError } from 'rxjs';
import { Token } from '../Model/token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService  {
  currUser:string="";
  httpOptions;
  myToken:Token={} as Token
  
  user:BehaviorSubject<string>;
  constructor(private httpClint: HttpClient) {
    this.user=new BehaviorSubject<string>("")
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //  ,'Authorization': `Bearer ${this.myToken.token}`
      })
    };
   }

  login(UserName:string,Password:string)
  {
    const user: { userName: string, password: string} = {
      userName: UserName,
      password: Password
    };
    // call login API, and get access token
   let newToken = this.httpClint.post<Token>(`${environment.apiUrl}Account/Login`,JSON.stringify(user),this.httpOptions)
   .pipe(
    retry(2),
    catchError((err)=>{
      console.log(err);
      return throwError(()=> new Error(" error"));
    })
  );
   newToken.subscribe(T=>{
    console.log("token= "+T.token)
    this.myToken.token=T.token;
    console.log("date= "+T.expiration)
    this.myToken.expiration=T.expiration;
   })
    this.currUser=UserName;
    if(!localStorage.getItem(this.currUser)&&this.myToken.token.length>0)
      localStorage.setItem(this.currUser,this.myToken.token);
    this.user.next(UserName);
  }
 
  
  logout()
  {
    localStorage.removeItem(this.currUser)

  }
  get isUserLogged():boolean
  {
    return (localStorage.getItem(this.currUser))?true:false;
  }
  
}
