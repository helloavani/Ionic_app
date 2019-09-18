import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


import { ActivatedRoute,  Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ApiProviderService} from "../api-provider.service";
import { switchMap } from 'rxjs/operators';


@Component({
  selector: "app-category",
  templateUrl: "./category.page.html",
  styleUrls: ["./category.page.scss"]
})
export class CategoryPage implements OnInit {
  constructor(private route:ActivatedRoute,
    private router:Router,
    private apiservice:ApiProviderService,) {
  
  }
category_id:any;
list:any;


categories_list:any;

cat_id:any;
brands:any;
brands_list:any;
  

   //current_parent: any = this.products.ProductList[0].category;

  load_sub_prod(item: any) {
    this.router.navigate(["product"]);
  }

  slideOpts = {
    loop: false,
    slidesPerView: 3
  };




getcat(){
   // console.log("function called");
      
     const token = localStorage.getItem('token');
     //console.log(token);
      this.apiservice.getcat(token).subscribe((resp) =>{
       // console.log(resp);
        this.list = resp;
        this.categories_list = this.list.CategoryList;
        console.log(this.categories_list);

      })
    }





  ngOnInit() {
    this.getcat();
         //console.log(token);
  const token = localStorage.getItem('token');

 this.cat_id = this.route.params.subscribe((Params) => {
      this.cat_id = Params['_id'];
      this.apiservice.show_brands(this.cat_id,token).subscribe((resp)=>{
        this.brands = resp;
        //console.log(this.brands);
        this.brands_list = this.brands.items;
        console.log(this.brands_list);

      })

   

});
}
}
