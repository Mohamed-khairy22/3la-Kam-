import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent   {
  
  constructor(private authService: UserAuthService)
  {

  }
  isLogged():boolean
  {
    return this.authService.isUserLogged;
  }
}
