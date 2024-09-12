import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';
import { environment } from '../../environments/environment';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpclint: HttpClient) { }
  getAllPrds():Observable<Iproduct[]>
  {
    return this.httpclint.get<Iproduct[]>(`${environment.apiUrl}product`);
  }
  getPrdByCatId(cID:number):Observable<Iproduct[]>
  {
    // console.log(`cat id = ${cID}`)
    if(cID==0)
      return this.getAllPrds();
    return this.httpclint.get<Iproduct[]>(`${environment.apiUrl}product/category/${cID}`);

  }
  getPrdById(pId:number):Observable<Iproduct>
  {
    return this.httpclint.get<Iproduct>(`${environment.apiUrl}product/${pId}`);
  }
  getPrdByName(name:string,catId:number):Observable<Iproduct[]>
  {
    // console.log(`cat id from search= ${catId}`)

    if(name=="")
      return this.getAllPrds()
    return this.httpclint.get<Iproduct[]>(`${environment.apiUrl}product/search?categoryId=${catId}&name=${name}`);
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
