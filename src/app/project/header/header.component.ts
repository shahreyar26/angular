import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../cart/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalitemnumber: number=0;

  constructor(private cartapi:CartapiService){}

  ngOnInit(): void {
    this.cartapi.getprodutData().subscribe(res=>{
      this.totalitemnumber=res.length;
    }
      )
    
  }

}
