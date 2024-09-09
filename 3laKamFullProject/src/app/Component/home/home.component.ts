import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModel/store-data';
import { CommonModule } from '@angular/common';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;
  isShown: boolean = true;
  constructor(private adService: PromotionAdsService) {
    this.storeInfo = new StoreData("3la Kam?", "https://picsum.photos/400/300", ["Zara", "pumma", "H&M", "Adidas"]);
  }
  ngOnInit(): void {
    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err)
      },
      complete: () => {
        console.log("Ads finished :) ")
      }
    }
    this.adService.getSchadualedAds(3).subscribe(observer);
  }
  togle() {
    this.isShown = !this.isShown;
  }

}
