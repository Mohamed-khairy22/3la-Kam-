import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../../Model/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../Model/icategory';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from '../../../Directives/light-box.directive';
import { USDtoEGPPipe } from '../../../Pipes/usdto-egp.pipe';
import { NewCart } from '../../../ViewModel/new-cart';
import { StaticProductsService } from '../../../Services/static-products.service';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,LightBoxDirective,CommonModule,USDtoEGPPipe,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnChanges,OnInit {
  // prdList:Iproduct[];
  // catList:Icategory[];
   catFilter!:Iproduct[];
  // temp:Iproduct[];
  @Input() sentCatID:number=0;
  @Input() sentSearchName:string="";
  @Output('myOrder') myOrder:EventEmitter<NewCart>;
  orderTotalPrice:number=0;
  orderDate:Date;
  constructor(
              //  private staticPrdService : StaticProductsService,
              private prdService:ProductsService
              ,private router:Router){
    this.myOrder = new EventEmitter<NewCart>();
    // this.prdList=[
    //   {id:1,name:'Lenovo ideapad 320 Laptop',price:17000,quantity:1,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
    //   {id:2,name:'Apple Macbook Laptop',price:20000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:1},
    //   {id:3,name:'Lenovo Tap-2',price:15000,quantity:10,imgURL:"https://fakeimg.pl/200x100",categoryID:2},
    //   {id:4,name:'Samsung Tap-228',price:19000,quantity:2,imgURL:" ",categoryID:2},
    //   {id:5,name:'Samsung Note-10',price:22000,quantity:0,imgURL:"https://fakeimg.pl/200x100",categoryID:3},
    //   {id:6,name:'Iphone 7 plus',price:11000,quantity:3,imgURL:"https://fakeimg.pl/200x100",categoryID:3}
    // ]
    // this.catList=[
    //   {id:1,name:'Laptop'},
    //   {id:2,name:'Taplet'},
    //   {id:3,name:'Mopile'}
    // ]
    //  this.catFilter=this.prdList;
    //  this.temp = this.catFilter;
    this.orderDate=new Date();
  }
  ngOnInit(): void {
    // this.catFilter= this.staticPrdService.getAllPrds();
    this.prdService.getAllPrds().subscribe(prds=>{
      this.catFilter=prds; 
    });
  }
  ngOnChanges(): void {
    // // this.filterByCatID();  
    // this.catFilter=this.staticPrdService.getPrdByCatId(this.sentCatID);
    // this.catFilter=this.staticPrdService.getPrdByName(this.sentSearchName,this.sentCatID);
    
    this.prdService.getPrdByCatId(this.sentCatID).subscribe(byCatId=>{
      this.catFilter=byCatId;
      //  console.log(this.catFilter)
    });
    this.prdService.getPrdByName(this.sentSearchName,this.sentCatID).subscribe(byName=>{
      this.catFilter=byName;
      //  console.log(this.catFilter)
    });

  }
  prdtracByFn(index:number,prd:Iproduct):number
  {
    return prd.id;
  }
  addToCart(Id:number,name:string,price:number,count:any){
    let number:number=+count;
    this.myOrder.emit({id:Id,name:name,price:price,count:number});
  }
  showDetails(pid:number)
  {
    this.router.navigate(['/products',pid]);
  }

  
  // private filterByCatID()
  // {
  //   if(this.sentCatID==0)
  //     this.catFilter=this.prdList;
  //   else
  //   this.catFilter= this.prdList.filter(i=>i.categoryID==this.sentCatID)
  // }
  // search(element:string){
  //   if(element.length==0)
  //     this.temp=this.catFilter;
  //   else
  //     this.temp=this.catFilter.filter(n=>n.name.toLowerCase().startsWith(element.toLowerCase()))
  // }
   

}
