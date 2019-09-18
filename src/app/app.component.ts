import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import {ApiProviderService} from "./api-provider.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {

  //token:any;
  categories :any;
  selectedcategories:any;
  list:any;

  appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Category",
      url: "/category",
      icon: "category"
    },
    { title: "list", url: "/list", icon: "list" }
  ];
  goToLogin() {
    console.log("Login");
    this.router.navigate(["login"]);
  }
 
  getcat(){
   // console.log("function called");
      
     const token = localStorage.getItem('token');
     console.log(token);
      this.apiservice.getcat(token).subscribe((resp) =>{
       // console.log(resp);
        this.list = resp;
        this.categories = this.list.CategoryList;


      })
    }


 

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private apiservice:ApiProviderService,
  ) {
    this.initializeApp();
    this.getcat();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
