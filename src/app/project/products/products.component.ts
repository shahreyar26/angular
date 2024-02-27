import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { CartapiService } from '../cart/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  productlist:any;
  constructor(private api:ServicesService,
    private cartapi:CartapiService){}


  ngOnInit(): void {
    this.api.getimage().subscribe(res=>{
      
      this.productlist=res;
      this.productlist.forEach((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price})

      });
    })
  } 
  addtoCart(item:any){
    this.cartapi.addtocart(item);

   }
  
 
}
