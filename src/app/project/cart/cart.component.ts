import { Component, OnInit } from '@angular/core';
import { CartapiService } from './services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  products:any =[];
  allProducts:any=0;
  constructor(private cartapi:CartapiService)
  {}
  ngOnInit(): void {
    this.cartapi.getprodutData().subscribe(res =>{
      this.products=res;
      this.allProducts = this.cartapi.getTotalAmount();

     
    }) 
  }
  removeproduct(item:any){
    this.cartapi.removeCartData(item);
  }
  removeAllproduct(){
    this.cartapi.removeALLCart();
  }

}
