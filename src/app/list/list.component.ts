import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { product } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productList:undefined|product[];
  productMessage:undefined|string;
  icon:any=faTrash;
  editIcon=faEdit

  constructor(private product:ProductserviceService){

  }

  ngOnInit(): void {
    this.list()
  }

  deleteProduct(id:number){
    console.log("test id",id)

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="product is deleted"
        this.list()
      }
    })

    setTimeout(() => {

      this.productMessage=undefined
      
    }, 3000);
  }

  list(){
    this.product.productlist().subscribe((result)=>{
      console.log(result);
      if(result){
        this.productList=result
      }
    })
  }


}
