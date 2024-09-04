import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./Component/sidebar/sidebar.component";
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { HomeComponent } from "./Component/home/home.component";
import { ProductListComponent } from "./Component/Order/product-list/product-list.component";
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { OrderMasterComponent } from "./Component/Order/order-master/order-master.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, FooterComponent, HomeComponent, ProductListComponent, FormsModule, LightBoxDirective, OrderMasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3la Kam?';
  print():string{
    return `new Hello ${this.title}`
  }
}
