import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


import { ActivatedRoute,  Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ApiProviderService} from "../api-provider.service";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"]
})
export class CartPage implements OnInit {
  constructor(private route:ActivatedRoute,
    private router:Router,
    private apiservice:ApiProviderService,) {}
  product_id:any;
   items:any;
   cartitem_id:any;
  gotoCheckOut() {
    this.router.navigate(["checkout"]);
  }
cartitems(){
   // console.log("function called");
      
     const token = localStorage.getItem('token');
     //console.log(token);
      this.apiservice.getcartitems(token).subscribe((resp) =>{
        console.log(resp);
        this.items = resp;
        

      })
    }
    deletecartitem(id){
      this.cartitem_id = id;
      console.log("function called");
      const token = localStorage.getItem('token');
      this.apiservice.deletecartitem(token, this.cartitem_id).subscribe(()=>{
        this.cartitems();


      });

    }
    // refresh(){
    //   const token = localStorage.getItem('token');

    //   this.apiservice.show_details(token).subscribe((resp) =>{
    //     //console.log(resp);
       


    //   });
     
    // }





  ngOnInit() {
  	this.cartitems();
    //this.refresh();
    
  	  const token = localStorage.getItem('token');

this.product_id = this.route.params.subscribe((Params) => {
      this.product_id = Params['_id'];
      console.log(this.product_id);

});

  }
}
