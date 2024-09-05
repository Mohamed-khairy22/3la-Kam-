import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { Icategory } from '../../../Model/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USDtoEGPPipe } from '../../../Pipes/usdto-egp.pipe';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [ProductListComponent,FormsModule,CommonModule,USDtoEGPPipe],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent {
  catList:Icategory[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  constructor(){
    this.catList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Taplet'},
      {id:3,name:'Mopile'}
    ]
  }

}
