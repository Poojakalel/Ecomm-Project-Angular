import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService,private router:Router){

  }

  showLogin=false;
  authError:string='';

  ngOnInit():void{
    this.seller.reloadSeller()
  }


  signup(data:SignUp):void{
   console.log(data)
   this.seller.userSignUp(data)
 
  }



 



  login(data:SignUp):void{
    this.authError=""
    // console.log(data)
    this.seller.userLogin(data)
   // this.router.navigate(['/seller-home'])
    this.seller.isLoginError.subscribe((isError)=>{

      if(isError){

        this.authError="Email or password is not correct"
      }

    });
    
    
  }

  openLogin(){

    this.showLogin=true
   // this.router.navigate(['seller-home'])

  }

  openSignUp(){
     this.showLogin=false
   // this.router.navigate(['seller-home'])

  }


}

