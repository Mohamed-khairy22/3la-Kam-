import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpclint: HttpClient) { }
  getAllPrds():Observable<Iproduct[]>
  {
    return this.httpclint.get<Iproduct[]>("https://jsonplaceholder.typicode.com/posts");
  }
  getPrdByCatId(cID:number)
  {
    
  }
  getPrdById(pId:number)
  {
    
  }
  getPrdByName(name:string,catId:number)
  {
  
}
  addProduct()
  {
  }
  updateProduct(id:number)
  {
    
  }
  deleteProduct(id:number)
  {
  }
}
