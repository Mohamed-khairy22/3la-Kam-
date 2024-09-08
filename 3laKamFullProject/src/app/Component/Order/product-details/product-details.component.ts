import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../../Services/static-products.service';
import { Iproduct } from '../../../Model/iproduct';
import { CommonModule } from '@angular/common';

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

  constructor(private activatedRoute: ActivatedRoute,
    private prdService :StaticProductsService
  ){}

  ngOnInit(): void {
    this.currPId = Number (this.activatedRoute.snapshot.paramMap.get('pid'))
    //console.log(this.currPId)
    let newPrd =this.prdService.getPrdById(this.currPId)
    this.prd =newPrd;
    }

 
}