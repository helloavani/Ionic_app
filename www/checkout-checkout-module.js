(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>Select an address</h4>\n  <div class=\"card\">\n    <ion-radio-group>\n      <ion-item>\n        <div>\n          <h6><strong>Rahul Singh</strong></h6>\n          <small class=\"faded\">13/D-block</small><br />\n          <small class=\"faded\">Gurgaon</small><br />\n        </div>\n        <ion-radio slot=\"start\" value=\"1\" checked></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <div>\n          <h6><strong>Rahul Singh</strong></h6>\n          <small class=\"faded\">13/D-block</small><br />\n          <small class=\"faded\">Gurgaon</small><br />\n        </div>\n        <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <div>\n          <h6><strong>Rahul Singh</strong></h6>\n          <small class=\"faded\">13/D-block</small><br />\n          <small class=\"faded\">Gurgaon</small><br />\n        </div>\n        <ion-radio slot=\"start\" value=\"3\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </div>\n\n  <ion-button (click)=\"toPay()\" padding shape=\"round\" color=\"dark\">\n    Proceed to Pay\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faded {\n  color: gray; }\n\n.border-u-d {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray; }\n\n.dark {\n  background-color: #232f3e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWRlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYm9yZGVyLXUtZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzJmM2U7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(router) {
        this.router = router;
    }
    CheckoutPage.prototype.toPay = function () {
        this.router.navigate(["payment"]);
    };
    CheckoutPage.prototype.ngOnInit = function () { };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-checkout",
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map