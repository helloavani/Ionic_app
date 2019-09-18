import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {ApiProviderService} from "../api-provider.service";


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {

  list:any;
  products:any;
  product_id:any;
  cartproname:any;
  constructor(private router: Router,private apiservice:ApiProviderService) {
    this.show_details();
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  redirect() {
    this.router.navigate(["cart"]);
  }

  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

show_details(){
  //console.log("function called");
  const token = localStorage.getItem('token');
 // console.log(token);

  this.apiservice.show_details(token).subscribe((resp) =>{
        //console.log(resp);
        this.list = resp;
        this.products = this.list.ProductList;


      })

}

addtocart(id){
// console.log("function called");
 this.product_id= id;
 console.log(this.product_id);
  const token = localStorage.getItem('token');
console.log(token);
this.apiservice.add_to_cart(this.product_id,token).subscribe((resp)=>{
  //  console.log(resp)



});
}
upload_image(){
this.apiservice.upload().subscribe((resp) =>{
  //console.log(resp);
})
}



ngOnInit() {this.upload_image();
}


}
