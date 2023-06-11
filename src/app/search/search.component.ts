import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { product } from '../data-type';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchResult:undefined|product[];

  constructor(private activeRoute:ActivatedRoute,private product:ProductserviceService)
  {

  }

  ngOnInit(): void {
    let query=this.activeRoute.snapshot.paramMap.get('query');
    console.log(query)

    query && this.product.serachProducts(query).subscribe((result)=>{
      this.searchResult=result
    })
  }

  
}
