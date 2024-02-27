import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent { 
  title = 'any thing you can buy'; 
  selected_products = ''; 

  onChange(value: any) { 
      this.selected_products = value.target.value; 
  } 
  

}
