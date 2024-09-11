import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit    {
  userName:string="Mohamed"
  constructor(private authService: UserAuthService)
  {
    // this.userName=authService.currUser;

  }
  ngOnInit(): void {
    this.authService.user.subscribe(name=>{
      this.userName=name;  });
 
  }

  isLogged():boolean
  {
    return this.authService.isUserLogged;
  }
  logout(){
    this.authService.logout();
  }
}
