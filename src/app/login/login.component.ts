import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { login, product,cart } from '../data-type';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties for storing login crenditial


  constructor(private service:SellerService,private router:Router,private product:ProductserviceService,private user:UserService,private http:HttpClient){
  
  }

  username:any
  userpass:any
  useremail:any
  userData:any=[]
  isUserValid:boolean=false


  

ngOnInit(): any {

  this.user.userAuthReload();
  
  
}

  // login(){
  //   console.log(this.username+" , "+ this.userpass+" ,"+ this.useremail+" ")

  //   this.service.getRecords("users").subscribe((res)=>{
  //     console.log(res)

      
   
  //    this.router.navigateByUrl('home')

  //    return localStorage.getItem('token')

    
  //   })

   
  // }

  logout(){

    localStorage.removeItem('seller')
    this.router.navigate(['/']);
  }

  login(data:login){
   // console.log(data);
   let dataa=localStorage.getItem('localcart')
   let user=localStorage.getItem('user')
   let userData=user && JSON.parse(user).id


     this.user.userlogin(data)
     

    // this.http.post("http://localhost:3000/Users",data,{observe:'response'}).subscribe((result)=>{
    //   console.log(result)

    //   if(result){
    //     localStorage.setItem('user',JSON.stringify(result.body))

    //   }
    // })



  }

  localCartToRemoteCart(){

    let data=localStorage.getItem('localCart');
    if(data){
      let cartDataList:product[]=JSON.parse(data)
      let user=localStorage.getItem('user');
      let userId=user && JSON.parse(user).id;

      cartDataList.forEach((product:product,index) => {

        let cartData:cart={
          ...product,
          productId:product.id,
          userId,
        }
        
        delete cartData.id;
    

        setTimeout(()=>{

          this.product.addToCart(cartData).subscribe((result)=>{
            // console.log(result)
   
            if(result){
             console.log("items stored in Db")
            }
           })
           if(cartDataList.length===index+1){
            localStorage.removeItem('localcart')
           }
        },2000)
      });
    }

  }



}

