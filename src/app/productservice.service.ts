import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product,login } from './data-type';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  cartData=new EventEmitter<product[]| []>();
  userData:product|undefined

  constructor(private http:HttpClient,private router:Router) { }

  productlist(){
    return this.http.get<product[]>('http://localhost:3000/Products')
  }

  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/Products/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/Products/${id}`)
  }



  updateProduct1(product:product){
   return this.http.put<product>(`http://localhost:3000/Products/${product.id}`,product)
  }

  popularProducts(){
    
    
    return this.http.get<product[]>('http://localhost:3000/Products?_limit=3');

    }

    popularpro(){
      return this.http.get<product[]>('http://localhost:3000/product')
    }

  trendyProducts(){

    return this.http.get<product[]>(`http://localhost:3000/Products?_limit=8`);
    

  }

  
  serachProducts(query:string){

    return this.http.get<product[]>(`http://localhost:3000/Products?q=${query}`);


  }

  localAddToCart(data:product){
    let cartData=[];
    let localCart=localStorage.getItem('localCart')
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]))
    }
    else{
      cartData=JSON.parse(localCart)
      cartData.push(data)
      localStorage.setItem('localCart',JSON.stringify(cartData))
    }
    this.cartData.emit(cartData);
  }


  removeItemFromCart(productId:number){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:product[]=JSON.parse(cartData);
      items=items.filter((item:product)=>productId!==item.id)
      localStorage.setItem('localCart',JSON.stringify(items))
      this.cartData.emit(items)

      }
    }


    currentCart(){
      let userStore=localStorage.getItem('user');
      let userData=userStore && JSON.parse(userStore)
      //console.log(userData.userId)

      return this.http.get<cart[]>('http://localhost:3000/carte?userId='+userData.id)
     


 
      


    // return this.http.get<cart[]>(`http://localhost:3000/cart/`);

        //  return this.http.get<cart[]>(`http://localhost:3000/cart/${id}`);


  }

    isLoggedIn():boolean{
      return localStorage.getItem("access_token")?true:false
    }

    getCartList(userId:number){
      return this.http.get<product[]>('http://localhost:3000/cart?userId='+userId,
      {observe:'response'}).subscribe((result)=>{
       console.log(result)
        if(result && result.body){
          this.cartData.emit(result.body)
        }
      })
    }

    addToCart(cartData:cart){
      return this.http.post('http://localhost:3000/cart',cartData)
    }

    getcart(id:number){
      return this.http.get<product[]>(`http://localhost:3000/cart/${id}`)
    }
     
  removeToCart(cartId:number){
    return this.http.delete('http://localhost:3000/cart/'+cartId)
  }

  
  userlogin(user:login){
    console.log(user)

    this.http.post("http://localhost:3000/Users",user,{observe:'response'}).subscribe((result)=>{
      console.log(result)

      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/home'])
        
      }
    })
  }

  }



  

