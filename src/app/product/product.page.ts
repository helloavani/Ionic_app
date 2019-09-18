import { Component, OnInit,EventEmitter,Input,Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {ApiProviderService} from "../api-provider.service";


@Component({
  selector: "app-product",
  templateUrl: "./product.page.html",
  styleUrls: ["./product.page.scss"]
})
export class ProductPage implements OnInit {
      @Output() show = new EventEmitter<boolean>();

  constructor(private router: Router, private route: ActivatedRoute,private apiservice:ApiProviderService) {
    this.route.queryParams.subscribe(params => {
      this.category = params["sub_category"] || 0;
    });
    
  }
  rows = new Array(10);
  category: any;
  brand_id:any;
  brands_prod:any;
  item:any;

showPopup() {
        this.show.emit(true);
    }




  ngOnInit() {

            //console.log(token);
  const token = localStorage.getItem('token');

 this.brand_id = this.route.params.subscribe((Params) => {
      this.brand_id = Params['_id'];
      this.apiservice.show_subbrands(this.brand_id,token).subscribe((resp)=>{
        console.log(resp);
        this.item = resp;
        console.log(this.item);
        this.brands_prod = this.item.items;
        console.log(this.brands_prod);
       // this.brands_list = this.brands.items;

      })

   

});

  }
}
