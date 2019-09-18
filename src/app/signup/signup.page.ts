import { Component, OnInit } from '@angular/core';
import {ApiProviderService} from "../api-provider.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
// name:any;email:any;mno:any;
// password:any;
  constructor(private apiservice:ApiProviderService, private _router: Router) { }

  ngOnInit() {
  }

join(name,email,mno,password){
	this.apiservice.join(name,email,mno,password).subscribe(res =>{
		console.log(res);
		//localStorage.setItem('token', res.token);

		//console.log(res);

		
	});
	err => console.log(err);

}





}
