import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Model/iproduct';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSnackBarModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  newPrd: Iproduct = {} as Iproduct
  currPId: number = 0
  constructor(
    private proService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      if(Number (paramMap.get('pid'))>0)
        this.currPId= Number (paramMap.get('pid'))
      //  this.prd =this.prdService.getPrdById(this.currPId)
      if(this.currPId!=0)
      this.proService.getPrdById(this.currPId).subscribe(p=>{
        this.newPrd=p;
      })

    });  }

  addNewPrd() {
    if(this.currPId==0){
    this.proService.addProduct(this.newPrd).subscribe((prd) => {
      console.log(prd)
      this.snackBar.open('Product added successfully', 'Close', {
        duration: 3000,
      });
      this.router.navigateByUrl('/products')

    });
  }
  else 
  {
    this.proService.updateProduct(this.currPId,this.newPrd).subscribe((prd) => {
      console.log(prd)
      this.snackBar.open('Product updated successfully', 'Close', {
        duration: 3000,
      });
      this.router.navigateByUrl('/products')

    });

  }
}

}
