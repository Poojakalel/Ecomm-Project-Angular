import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { cart, priceSummary,login } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart:any
  cartData:cart[]|undefined
  userData:any=[]
  user:any
  priceSummary:priceSummary={
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
    
  }
  // currentCart:any

  constructor(private product:ProductserviceService,private activeroute:ActivatedRoute,private route:Router){

  }

  ngOnInit(): void {


    // let cartId=this.activeroute.snapshot.paramMap.get('cartId');
    //  console.log(cartId);

    //  cartId &&this.product.currentCart(cartId).subscribe((result)=>{
    //   console.log(result)
    //   this.cartData=result
    //   })


    

    let dataa=localStorage.getItem('localcart')
    let user=localStorage.getItem('user')
    let userData=user && JSON.parse(user).id
 
 
      this.user.userlogin(dataa)

    

    this.product.currentCart().subscribe((result)=>{
      console.log(result)
      this.cartData=result
      let price=0;
      result.forEach((item)=>{
        price=price+(+item.price)
      })

      console.log(price)

      this.priceSummary.price=price;
      this.priceSummary.discount=price/10;
      this.priceSummary.tax=price/10;
      this.priceSummary.delivery=100;

      this.priceSummary.total=price+(price/10)+100-(price/10);
      console.log(this.priceSummary)
    })



    
  
  
  }

  

  
  

  

  
  }

  
