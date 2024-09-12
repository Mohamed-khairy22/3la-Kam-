import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Model/iproduct';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,RouterModule,MatSnackBarModule,BrowserAnimationsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  constructor(
              private proService:ProductsService,
              private snackBar: MatSnackBar
  ){

  }

  addNewPrd()
  {
    const newPrd:Iproduct=
          {id:7,name:'new phone',price:25000,quantity:32,imgUrl:"https://fakeimg.pl/200x100",categoryId:3};
          this.proService.addProduct(newPrd).subscribe((prd)=>{
            console.log(prd)
            this.snackBar.open('Product added successfully', 'Close', {
              duration: 3000,
              
            });
            inject(Router).navigate(['/products'])

          });


  }

}
