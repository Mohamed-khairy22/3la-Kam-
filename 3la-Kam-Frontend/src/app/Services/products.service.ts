import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../Model/iproduct';
import { environment } from '../../environments/environment';
import { Console, error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  httpOptions;
  constructor( private httpclint: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // ,'Authorization': 'Basic my-auth-token'
      })
    };
   }
  getAllPrds():Observable<Iproduct[]>
  {
    return this.httpclint
    .get<Iproduct[]>(`${environment.apiUrl}product`)
    .pipe(
      retry(2),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error(" error"));
      })
    );
  }
  getPrdByCatId(cID:number):Observable<Iproduct[]>
  {
    // console.log(`cat id = ${cID}`)
    if(cID==0)
      return this.getAllPrds();
    return this.httpclint
    .get<Iproduct[]>(`${environment.apiUrl}product/category/${cID}`)
    .pipe(
      retry(2),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error(" error"));
      })
    );

  }
  getPrdById(pId:number):Observable<Iproduct>
  {
    return this.httpclint
    .get<Iproduct>(`${environment.apiUrl}product/${pId}`)
    .pipe(
      retry(2),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error(" error"));
      })
    );
  }
  getPrdByName(name:string,catId:number):Observable<Iproduct[]>
  {
    // console.log(`cat id from search= ${catId}`)

    if(name=="")
      return this.getAllPrds()
    return this.httpclint
    .get<Iproduct[]>(`${environment.apiUrl}product/search?categoryId=${catId}&name=${name}`)
    .pipe(
      retry(2),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error(" error"));
      })
    );
  }
  addProduct(newPrd:Iproduct):Observable<Iproduct>
  {
    // return this.httpclint.post<Iproduct>(`${environment.apiUrl}product`,JSON.stringify(newPrd),this.httpOptions); 
    return this.httpclint
    .post<Iproduct>(`${environment.apiUrl}product`,JSON.stringify(newPrd),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error("post error"));
      })
    );
  }
  updateProduct(id:number)
  {
    
  }
  deleteProduct(id:number)
  {
  }
}
