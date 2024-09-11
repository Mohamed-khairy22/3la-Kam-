import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModel/store-data';
import { CommonModule } from '@angular/common';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {
  private adsSubsciption! : Subscription[];
  storeInfo: StoreData;
  isShown: boolean = true;
  constructor(
    private promotion: PromotionAdsService
  ) {
    this.storeInfo = new StoreData("3la Kam?", "https://picsum.photos/400/300", ["Zara", "pumma", "H&M", "Adidas"]);
  }
  ngOnDestroy(): void {
        // this.adsSubsciption.unsubscribe();

  }
  ngOnInit(): void {

    let sub =this.promotion.getSerialAds().pipe(
      filter(ad=>ad.includes("black friday")),
      map(ad=>"Ad: "+ ad)
    );
    let sub2=sub.subscribe(ad=>{
      console.log(ad);
    });
    //this.adsSubsciption.push(sub);
    // let sub =this.promotion.getSerialAds().subscribe(ad=>{
    //   console.log(ad)
    // });
    //  this.adsSubsciption =this.promotion.getSchadualedAds(2).subscribe({
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err)
    //   },
    //   complete: () => {
    //     console.log("Ads finished :) ")
    //   }
    // });

  }
  togle() {
    this.isShown = !this.isShown;
  }

}
