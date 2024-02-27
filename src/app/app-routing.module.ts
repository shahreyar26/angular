import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './project/header/header.component';
import { ProductsComponent } from './project/products/products.component';
import { CartComponent } from './project/cart/cart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DropdownComponent } from './dropdown/dropdown.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path:'loginpage',
    component:LoginpageComponent
  },
  {
    path:'dropdown',
    component:DropdownComponent
  }
  
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
