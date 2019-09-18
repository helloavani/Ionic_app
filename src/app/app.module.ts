import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {ApiProviderService} from "./api-provider.service";

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ProductPageModule } from './product/product.module';
import { HomePageModule } from './home/home.module';
import {ProductDetailPageModule} from './product-detail/product-detail.module'

import {CartPageModule} from './cart/cart.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,FormsModule,HttpClientModule,HttpModule,ProductPageModule,
    HomePageModule,ProductDetailPageModule,CartPageModule






  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
