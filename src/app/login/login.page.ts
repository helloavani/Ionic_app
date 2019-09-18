import { Component, OnInit } from '@angular/core';
import {ApiProviderService} from "../api-provider.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private apiservice:ApiProviderService,private router: Router) { }

  ngOnInit() {
  }

login(mno,password){
	this.apiservice.login(mno,password)
	.subscribe(res=>{
		console.log(res);
		//localStorage.setItem('token' , res.token)
		this.router.navigate(['/home'])

	});
	err => console.log(err);
}










}
