import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Component/Order/order-master/order-master.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductListComponent},
    {path:'order',component:OrderMasterComponent}



];
