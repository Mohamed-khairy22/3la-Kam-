import { Component, inject } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userAuth:UserAuthService 
            , private location: Location
  ){

  }

  login(userName:string,pass:string){
    this.userAuth.login(userName,pass);   
    this.location.back()
  }
  isLogged():boolean
  {
   return this.userAuth.isUserLogged;
  }
  
}
