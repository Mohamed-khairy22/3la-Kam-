import { Component } from '@angular/core';
import { Iproduct } from '../../../Model/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../Model/icategory';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from '../../../Directives/light-box.directive';
import { USDtoEGPPipe } from '../../../Pipes/usdto-egp.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,LightBoxDirective,CommonModule,USDtoEGPPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  prdList:Iproduct[];
  catList:Icategory[];
  temp:Iproduct[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  orderDate:Date;
  constructor(){
    this.prdList=[
      {id:1,name:'Lenovo ideapad 320 Laptop',price:17000,quantity:1,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
      {id:2,name:'Apple Macbook Laptop',price:20000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
      {id:3,name:'Lenovo Tap-2',price:15000,quantity:10,imgURL:"https://fakeimg.pl/200x100",categoryID:2},
      {id:4,name:'Samsung Tap-228',price:19000,quantity:2,imgURL:"https://fakeimg.pl/200x100",categoryID:2},
      {id:5,name:'Samsung Note-10',price:22000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:3},
      {id:6,name:'Iphone 7 plus',price:11000,quantity:3,imgURL:"https://fakeimg.pl/200x100",categoryID:3}
    ]
    this.catList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Taplet'},
      {id:3,name:'Mopile'}
    ]
     this.temp = this.prdList
    this.orderDate=new Date();

  }
  prdtracByFn(index:number,prd:Iproduct):number
  {
    return prd.id;
  }
  buy(price:number,count:any){
    let qCount=Number(count);
    this.orderTotalPrice+=qCount*price;
  }
  

  search(element:string){
    if(element.length==0)
      this.temp=this.prdList;
    else
      this.temp=this.prdList.filter(n=>n.name.toLowerCase().startsWith(element.toLowerCase()))


  }

}
