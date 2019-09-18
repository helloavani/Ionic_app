import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ApiProviderService} from "../api-provider.service";
import { switchMap } from 'rxjs/operators';





@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"]
})
export class ProductDetailPage implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private apiservice:ApiProviderService,
 ) { }

//slideoptions
 sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };





 
//   
  x = new Array(5);
  product_id : any;
  list:any;
  list2:any;
  products:any;
  similar_prod:any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {
      const token = localStorage.getItem('token');
      //console.log(token);
 this.product_id = this.route.params.subscribe((Params) => {
      this.product_id = Params['_id'];
      //console.log(this.product_id);
      this.apiservice.show_details2(this.product_id, token).subscribe((resp)=>{
        //console.log(resp);
        this.list = resp;
        this.products = this.list.ProductList2;
       // console.log(this.products);

 
        
       
      });
      this.apiservice.show_similar(this.product_id, token).subscribe((resp)=>{
       // console.log(resp);
        this.list2 = resp;
       // console.log(this.list2)
        this.similar_prod = this.list2.items;
       // console.log(this.similar_prod);
         });


      });



   // });

}
// show_similar(){
//         const token = localStorage.getItem('token');
//         this.product_id = this.route.params.subscribe((Params) =>{
//                 this.product_id = Params['_id'];


//       this.apiservice.show_similar(this.product_id,token).subscribe((resp) =>{
//         console.log(resp);
//       });
     
// });
// }



}

