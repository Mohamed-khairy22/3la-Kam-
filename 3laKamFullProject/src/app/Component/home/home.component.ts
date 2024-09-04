import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModel/store-data';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  storeInfo : StoreData;
  isShown :boolean =true;
  constructor(){
    this.storeInfo= new StoreData("3la Kam?","https://picsum.photos/400/300",["Zara","pumma","H&M","Adidas"]);
  }
  togle(){
    this.isShown=!this.isShown;
  }

}
