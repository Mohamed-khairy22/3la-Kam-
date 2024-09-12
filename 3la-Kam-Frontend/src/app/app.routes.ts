import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Component/Order/order-master/order-master.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductDetailsComponent } from './Component/Order/product-details/product-details.component';
import { authGuard } from './Gaurdes/auth.guard';
import { AddProductComponent } from './Component/add-product/add-product.component';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:"/home",pathMatch:"full"},//Defult path
        {path:'home',component:HomeComponent},
        {path:'products',component:ProductListComponent},
        {path:'products/:pid',component:ProductDetailsComponent},
        {path:'order',component:OrderMasterComponent,canActivate:[authGuard]},
        {path:'product/add',component:AddProductComponent},

    ]},
    {path:'login',component:LoginComponent},
    {path:'logout',component:LoginComponent}

    



];
