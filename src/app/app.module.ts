import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './project/cart/cart.component';
import { FooterComponent } from './project/footer/footer.component';
import { HeaderComponent } from './project/header/header.component';
import { ProductsComponent } from './project/products/products.component';
import{ HttpClientModule } from'@angular/common/http';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    LoginpageComponent,
    DropdownComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
