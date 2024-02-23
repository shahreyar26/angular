import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartdatalist:any =[];
  productlist= new BehaviorSubject<any>([]);
  

  constructor(private http:HttpClient) { }
  getprodutData(){
    return this.productlist.asObservable();
  }
  setproduct(product:any){
    this.cartdatalist.push(...product);
    this.productlist.next(product)
  }
  addtocart(product:any){
    this.cartdatalist.push(product);
    this.productlist.next(this.cartdatalist);
    this.getTotalAmount();
    console.log(this.cartdatalist)
    
  
  }
  getTotalAmount(){
    let grandtotal=0;
    this.cartdatalist.map((a:any, index:any)=>{
      grandtotal += a.total;
     
    })

  }
  removeCartData(product:any){
    this.cartdatalist.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartdatalist.splice(index,1)
      }

    })
    this.productlist.next(this.cartdatalist)

  }
  removeALLCart(){
    this.cartdatalist=[]
    this.productlist.next(this.cartdatalist)
  }


}



