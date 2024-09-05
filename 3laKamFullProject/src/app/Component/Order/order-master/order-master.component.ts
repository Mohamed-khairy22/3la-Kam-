import { AfterViewInit, Component, ElementRef, EventEmitter, ViewChild, viewChild } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { Icategory } from '../../../Model/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USDtoEGPPipe } from '../../../Pipes/usdto-egp.pipe';
import { NewCart } from '../../../ViewModel/new-cart';
import { Iproduct } from '../../../Model/iproduct';

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [ProductListComponent,FormsModule,CommonModule,USDtoEGPPipe],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent implements AfterViewInit{
  catList:Icategory[];
  myCart:NewCart[]=[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  @ViewChild("changeName") changeYourName!:ElementRef;

  constructor(){
    this.catList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Taplet'},
      {id:3,name:'Mopile'}
    ]     
    
  }
  ngAfterViewInit(): void {
    this.changeYourName.nativeElement.value="Enter your name here";
    this.changeYourName.nativeElement.style.border="2px solid red"
  }
  addToCart(prd:NewCart)
  {    let x:number=-1;
    for (let index = 0; index < this.myCart.length; index++) {
      if(this.myCart[index].id==prd.id)
          x=index;
    }
    if(x!=-1)
      {
        this.myCart[x].count+=prd.count;
        this.orderTotalPrice+=(prd.count * prd.price)
      }
    else{
      this.myCart.push(prd)
      this.orderTotalPrice+=(prd.count * prd.price)

    }
  }

  deleteFromCart(item:NewCart)
  {
    this.myCart=this.myCart.filter(i=>i.id!=item.id)
    this.orderTotalPrice-=(item.count * item.price)

  }

}
