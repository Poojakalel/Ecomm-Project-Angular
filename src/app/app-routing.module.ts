import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UproductComponent } from './uproduct/uproduct.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent

  },

  {
    path:'home',component:HomeComponent
  },

  
  // {
  //   path:'seller-home' , component:SellerAuthComponent,
  //   children:[

  //    ]
  // },


  {
    path:'list',component:ListComponent
  },

  {
    path:'updateproduct/:id' , component:UpdateproductComponent
  },

  {
    path:'seller-home', component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'seller-auth',component:SellerAuthComponent
  },

  {
    path:'login', component:LoginComponent
  },

  {
    path:'search/:query' , component:SearchComponent
  },

  {
    path:'details/:productId', component:ProductDetailsComponent
  },

  {
    path:'cart-page', component:CartPageComponent
  },

  {
    path:'selleraddproduct', component:SellerAddProductComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
