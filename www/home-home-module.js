(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"head\">\n    <div class=\"row\" style=\"color: white\">\n      <div class=\"col\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n      </div>\n      <div class=\"col\">\n        <h4 class=\"center\">NDJ</h4>\n      </div>\n      <div class=\"col\">\n        <ion-icon\n          (click)=\"redirect()\"\n          name=\"person\"\n          style=\"padding: 20px;float:right;\"\n        ></ion-icon>\n      </div>\n    </div>\n    <section class=\"search\">\n      <input class=\"searchround\" type=\"text\" />\n      <button class=\"search-btn\">\n        <ion-icon name=\"search\"></ion-icon>\n      </button>\n    </section>\n  </div>\n</ion-header>\n\n<ion-content #scrollArea scrollEvents=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img\n        src=\"https://dummyimage.com/600x400/000/fff\"\n        class=\"img-fluid\"\n        alt=\"Responsive image\"\n      />\n    </ion-slide>\n    <ion-slide>\n      <img\n        src=\"https://dummyimage.com/600x400/000/fff\"\n        class=\"img-fluid\"\n        alt=\"Responsive image\"\n      />\n    </ion-slide>\n    <ion-slide>\n      <img\n        src=\"https://dummyimage.com/600x400/000/fff\"\n        class=\"img-fluid\"\n        alt=\"Responsive image\"\n      />\n    </ion-slide>\n  </ion-slides>\n\n  <section class=\"offers flaoted\">\n    <div class=\"container\" style=\"text-align: center\">\n      <img src=\"https://img.icons8.com/color/26/000000/discount.png\" />\n      <small style=\"color: red\">Get upto 40% off on selected products</small>\n    </div>\n  </section>\n\n  <section class=\" container border-u-d\">\n    <h4>Deal of the Day</h4>\n    <div style=\"text-align: center\">\n      <img src=\"https://dummyimage.com/150x150/471a47/fff\" alt=\"\" />\n    </div>\n    <h5>Get 30% cashback on all xyz product</h5>\n    <h5>&#8377; 999</h5>\n    <button class=\"btn btn-transparent\">Get this Deal</button>\n  </section>\n\n  <section class=\"container border-u-d related\">\n    <h4>Related to your view history</h4>\n    <div class=\"list\">\n      <ion-list>\n        <ion-item>\n          <ion-label>Item 1</ion-label>\n          <small>Rs 45</small>\n        </ion-item>\n        <ion-item>\n          <ion-label>Item X</ion-label>\n          <small>Rs 45</small>\n        </ion-item>\n        <ion-item>\n          <ion-label>Item u</ion-label>\n          <small>Rs 45</small>\n        </ion-item>\n        <button class=\"btn btn-transparent\">View more</button>\n      </ion-list>\n    </div>\n  </section>\n\n  <section class=\"container border-u-d\">\n    <h4>Buy Authentic Merchandise</h4>\n    <ion-grid>\n      <ion-row center>\n        <ion-col text-center>\n          <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n        <ion-col>\n          <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n      </ion-row>\n      <ion-row center>\n        <ion-col text-center>\n          <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n        <ion-col>\n          <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <h5 class=\"center\">View all</h5>\n  </section>\n\n  <section class=\" container top border-u-d\">\n    <h4>Trending Now</h4>\n    <ion-grid>\n      <ion-row center *ngFor=\"let i of rows\">\n        <ion-col>\n          <img src=\"https://dummyimage.com/120x120/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n        <ion-col>\n          <img src=\"https://dummyimage.com/120x120/471a47/fff\" alt=\"\" />\n          <h5>item</h5>\n          <small>Rs 3453</small>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n\n  <section class=\"container review border-u-d\"></section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bord {\n  border: 1px black solid; }\n\n.head {\n  background-color: #232f3e !important;\n  padding-bottom: 10px;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75); }\n\n.search {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 5px;\n  background: white;\n  border-radius: 50px;\n  text-align: center;\n  margin: 0 50px 0 50px; }\n\n.searchround {\n  border-radius: 50px;\n  border: none; }\n\n.search-btn {\n  color: white;\n  background: #232f3e;\n  border-radius: 100px;\n  width: 30px;\n  height: 30px;\n  margin: 3px 0 3px 0; }\n\n.offers {\n  margin: 5px; }\n\n.border-u-d {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray; }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBRWxCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZCB7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xufVxuLmhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyZjNlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5zZWFyY2gge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBtYXJnaW46IDAgNTBweCAwIDUwcHg7XG59XG4uc2VhcmNocm91bmQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2VhcmNoLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzIzMmYzZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogM3B4IDAgM3B4IDA7XG59XG5cbi5vZmZlcnMge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJvcmRlci11LWQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    HomePage.prototype.redirect = function () {
        this.router.navigate(["cart"]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map