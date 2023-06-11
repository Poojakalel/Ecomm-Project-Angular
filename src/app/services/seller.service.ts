import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login,SignUp } from '../data-type';
import { ResourceLoader } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseURL="http://localhost:3000"

  

  

  
  isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:SignUp){
 
    this.http.post('http://localhost:3000/seller',data,
    {observe:'response'}).subscribe((result)=>{
      console.log(result)
     
       if(result){
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
       }
    });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
     // this.router.navigate(['home']);
    }
  
}

userLogin(data:login){
  console.log(data)

  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  {observe:'response'}
  ).subscribe((result:any)=>{


    console.log(result)
    if(result&& result.body&&result.body.length){
      console.log("user logged in")
      
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    }

    else{
      console.log("login failed")
      this.isLoginError.emit(true)
    }
  })


}

signIn(user:any){
  sessionStorage.setItem("user_key",user)
}

signOut(){
  sessionStorage.removeItem("user_key")
}


getRecords(path:string){

  const url=`${this.baseURL}/${path}`
  return this.http.get(url)

 }
}

