import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Component/Order/order-master/order-master.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { LoginComponent } from './Component/login/login.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:"/home",pathMatch:"full"},//Defult path
        {path:'home',component:HomeComponent},
        {path:'products',component:ProductListComponent},
        {path:'order',component:OrderMasterComponent}
    ]},
    {path:'login',component:LoginComponent}
    



];
