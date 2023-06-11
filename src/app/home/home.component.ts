import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  popularProducts:undefined|product[]
  trendyProducts:undefined|product[]
  popularpro:undefined|product[]
  cartItems=0;
  constructor(private product:ProductserviceService){

  }

	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  
  ngOnInit(): void {

    this.product.popularProducts().subscribe((data)=>{
      console.log(data)
      this.popularProducts=data;
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })

    this.product.popularpro().subscribe((data)=>{
      console.log(data)
      this.popularpro=data
    })

    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }

  




}
