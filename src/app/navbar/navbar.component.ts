import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { product } from '../data-type';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menuType:string='default';
  sellerName:string='';
  userName:string=''
  searchResult:undefined|product[];
  cartItems=0;

  constructor(private product:ProductserviceService,private route:Router){

  }

  searchProduct(query:KeyboardEvent){

    if(query){
      const element=query.target as HTMLInputElement

      console.log(element.value)

      this.product.serachProducts(element.value).subscribe((result)=>{
        console.log(result)
        if(result.length>4){
          result.length=4;
        }
        this.searchResult=result;
      })
    }

  }

  hideSearch(){
    this.searchResult=undefined
  }

  redirectDetails(id:number){
    this.route.navigate(['/details/'+id])
  }

  submitSearch(val:string){
    console.log(val)
    this.route.navigate([`search/${val}`])
  }

  ngOnInit(): void {
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      this.cartItems=JSON.parse(cartData).length
    }

    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    });

    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;
          this.menuType='seller';

        }  else if(localStorage.getItem('user')){

          let userStore=localStorage.getItem('user');
          let userData=userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType='user'

        }

        else{
          this.menuType='default'
        }
      }
    })
  }

   logout(){

    localStorage.removeItem('seller')
    this.route.navigate(['/'])

   }


   seller(){
    this.route.navigate(['/seller-auth'])
   }

   
   
   userLogout(){
    localStorage.removeItem('user')
    this.route.navigate(['/login'])
    this.product.cartData.emit([])

   }
  }

  

 
  

