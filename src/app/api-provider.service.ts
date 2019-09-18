import { Injectable } from '@angular/core';
import { AppComponent } from "./app.component";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { ProductPageModule } from './product/product.module';
import { HomePageModule } from './home/home.module';





@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {

  constructor(private http:HttpClient) { }

//getting all categories
getcat(token){

	const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getallcat",{headers:headers});

}
//getting product detail
show_details(token){

	const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getallproducts",{headers:headers});

}
show_details2(product_id,token){
const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getallproductsv2?" +"product_id=" + product_id,{headers:headers});

}

show_brands(cat_id,token){

const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getsubcategory?" +"product_id=" + cat_id,{headers:headers});

}
show_subbrands(brand_id,token){

const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getsubbrand?" +"product_id=" + brand_id,{headers:headers});

}
add_to_cart(id,token){
const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/recieveorders?" +"product_id=" + id,{headers:headers});

}
getcartitems(token){
	const headers = new HttpHeaders().set('Authorization', token);
	 return this.http.get("http://localhost:3000/api/v1/getcartitems",{headers:headers});



}



join(name,email,mno,password){
	const obj = {
		name:name,
		email:email,
		mno:mno,
		password:password,
	}
	console.log(obj);
      return this.http.post("http://localhost:3000/api/v1/signup", obj)
       .map(res => res);

       	


}

login(mno,password){
	const obj1 = {
		mno:mno,
		password:password
	}
return this.http.post("http://localhost:3000/api/v1/authenticateuser",obj1)
.map(res => res

	);



}

show_details3(category_id,token){
const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getallcatv2?" +"category_id=" + category_id,{headers:headers});

}
show_similar(product_id,token){
	console.log(product_id);
const headers = new HttpHeaders().set('Authorization', token);

       return this.http.get("http://localhost:3000/api/v1/getsimilar_prod?" +"product_id=" + product_id,{headers:headers});

}

upload(){
	return this.http.get("http://localhost:3000/upload");
}
deletecartitem(token, cartitem_id){ 
	const headers = new HttpHeaders().set('Authorization', token);

	return this.http.get("http://localhost:3000/api/v1/deletecartitems?" +"cartitem_id=" + cartitem_id, {headers:headers});
}



}
