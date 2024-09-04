import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { Icategory } from '../../../Model/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [ProductListComponent,FormsModule],
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
