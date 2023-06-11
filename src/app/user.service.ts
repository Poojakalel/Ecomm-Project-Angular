import { Injectable } from '@angular/core';
import {  login } from './data-type';
import { HttpClient } from '@angular/common/http';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { ListComponent } from './list/list.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

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

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
}
