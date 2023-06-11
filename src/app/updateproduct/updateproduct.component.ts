import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { product } from '../data-type';
import { UnsubscriptionError } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productData:undefined|product
 
  productMessage:undefined|string

  constructor(private route:ActivatedRoute,private product:ProductserviceService){

  }

  ngOnInit():void {

    let productId=this.route.snapshot.paramMap.get(`id`)
    console.log(productId)

   productId && this.product.getProduct(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data;
    })
    
  }


 submit(data:product){

    console.log(data)

    if(this.productData){
      data.id=this.productData.id
    }

    this.product.updateProduct1(data).subscribe((result)=>{
      console.log(data)
      if(result){
        this.productMessage="product is updated"
      }
    });

    setTimeout(() => {
      
      this.productData=undefined;
    }, 3000);

  } 

}
