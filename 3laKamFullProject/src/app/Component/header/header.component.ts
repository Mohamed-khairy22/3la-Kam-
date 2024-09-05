import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent   {
  mode:string=""
  chaneMode(){
    if(this.mode=="")
      this.mode="dark"
    else
    this.mode=""
  }

}
