import { Injectable } from '@angular/core';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList:Iproduct[];
  constructor() { 
    this.prdList=[
      {id:1,name:'Lenovo ideapad 320 Laptop',price:17000,quantity:1,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
      {id:2,name:'Apple Macbook Laptop',price:20000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
      {id:3,name:'Lenovo Tap-2',price:15000,quantity:10,imgURL:"https://fakeimg.pl/200x100",categoryID:2},
      {id:4,name:'Samsung Tap-228',price:19000,quantity:2,imgURL:"https://fakeimg.pl/200x100",categoryID:2},
      {id:5,name:'Samsung Note-10',price:22000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:3},
      {id:6,name:'Iphone 7 plus',price:11000,quantity:3,imgURL:"https://fakeimg.pl/200x100",categoryID:3}
    ]
  }
  getAllPrds():Iproduct[]
  {
    return this.prdList;
  }
  getPrdByCatId(cID:number):Iproduct[]
  {
    if(cID==0)
      return this.prdList;
    else
      return this.prdList.filter(i=>i.categoryID==cID);
  }
  getPrdById(pId:number):Iproduct | null
  {
    let prd = this.prdList.find(i=>i.id==pId);
    return prd?prd:null;
  }
  getPrdByName(name:string,catId:number):Iproduct[]
  {
    let temp!:Iproduct[];
    if(name.length==0)
       temp=this.getPrdByCatId(catId);
    else
      temp=this.getPrdByCatId(catId).filter(n=>n.name.toLowerCase().startsWith(name.toLowerCase()));
    return temp;
}
  addProduct(prd:Iproduct)
  {
    this.prdList.push(prd);
  }
  updateProduct(prd:Iproduct,id:number)
  {
    let Oldprd =this.getPrdById(id)
    Oldprd!.categoryID=prd.categoryID;
    Oldprd!.imgURL=prd.imgURL;
    Oldprd!.name=prd.name;
    Oldprd!.price=prd.price;
    Oldprd!.quantity=prd.quantity;
  }
  deleteProduct(id:number)
  {
    this.prdList= this.prdList.filter(p=>p.id!=id);
  }
}
