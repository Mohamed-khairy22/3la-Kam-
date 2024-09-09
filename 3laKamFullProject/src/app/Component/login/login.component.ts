import { Component } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userAuth:UserAuthService ){

  }

  login(){
    this.userAuth.login("userName","password");

  }
  logout()
  {
    this.userAuth.logout();

  }
  isLogged():boolean
  {
   return this.userAuth.isUserLogged;
  }
}
