import { Injectable } from '@angular/core';
import { unsubscribe } from 'diagnostics_channel';
import {  from, Observable } from 'rxjs';
import { setInterval } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private addsList:string[];

  constructor() {
    this.addsList=["Big Discount"
                  ,"Sale up to 50%"
                  ,"Check out black friday offers"
                 // ,""
                  ,"Spicial black friday offers up to 70%"
    ];
   }

   getSerialAds():Observable<string>
   {
    return from(this.addsList)
   }

  //  getSchadualedAds(interfalInSec:number):Observable<string>
  //  {
      
  //     return new Observable<string>((observer)=>{
  //     // observer.next();
  //     // observer.error();
  //     // observer.complete();
  //     let counter =0;
  //     let adsTimer= setInterval(()=>{
  //       console.log('in Interval');
  //       if(counter==this.addsList.length)
  //         {
  //           observer.complete();
  //         }
  //       if(this.addsList[counter]=="")
  //         {
  //           observer.error("Error: The ad is empty!");
  //         }       
  //       observer.next(this.addsList[counter]);
  //       counter++;

  //     },interfalInSec*1000)
  //     return {
  //       unsubscribe(){
  //       //Will be called:// 1- Error 2- Complete 3- unsubscribe()
  //       clearInterval(adsTimer);
  //       console.log("In Obs Unsubscribe...")
  //       }
  //       }
        
  //   });
    
  //  }
}
