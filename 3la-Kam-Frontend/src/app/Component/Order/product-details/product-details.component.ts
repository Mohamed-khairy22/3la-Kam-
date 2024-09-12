import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../../Services/static-products.service';
import { Iproduct } from '../../../Model/iproduct';
import { CommonModule, Location } from '@angular/common';
import { pid } from 'process';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  currPId:number=0;
   prd: Iproduct | null =null;
   prdIds:number[]=[];

  constructor(private activatedRoute: ActivatedRoute,
    //  private prdService :StaticProductsService,
    private servics :ProductsService,
    private location:Location,
    private router :Router
  ){}

  ngOnInit(): void {
    // this.currPId = Number (this.activatedRoute.snapshot.paramMap.get('pid'))
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currPId= Number (paramMap.get('pid'))
      //  this.prd =this.prdService.getPrdById(this.currPId)
      this.servics.getPrdById(this.currPId).subscribe(p=>{
        this.prd=p;
      })

    });
    
    }
    goBack()
    {
      this.location.back();
    }
    goPrevise()
    {
      //  this.prdIds = this.prdService.getAllIds();
      this.servics.getAllPrds().subscribe(id=>{
        this.prdIds = id.map(i=>i.id);
      });
      let currIndex=this.prdIds.findIndex(elem=>elem == this.currPId);
      if (currIndex>0)
      {
        let prv= this.prdIds[currIndex-1]
        this.router.navigate(["products", prv])

      }
      

    }
    goNext()
    {
      //  this.prdIds = this.prdService.getAllIds();
      this.servics.getAllPrds().subscribe(id=>{
        this.prdIds = id.map(i=>i.id);
      });
      let currIndex=this.prdIds.findIndex(elem=>elem == this.currPId);
      if (currIndex<this.prdIds.length)
      {
        let next= this.prdIds[currIndex+1]
        this.router.navigate(["products", next])

      }

    }

 
}