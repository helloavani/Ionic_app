(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img\n             src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n        />\n      </ion-avatar>\n      <ion-label>Item Avatar</ion-label>\n      <small>Rs 777</small>\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n        />\n      </ion-avatar>\n      <ion-label>Item Avatar</ion-label>\n      <small>Rs 777</small>\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n        />\n      </ion-avatar>\n      <ion-label>Item Avatar</ion-label>\n      <small>Rs 777</small>\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img\n          src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n        />\n      </ion-avatar>\n      <ion-label>Item Avatar</ion-label>\n      <small>Rs 777</small>\n      <ion-icon name=\"trash\"></ion-icon>\n    </ion-item>\n    <hr />\n  </div>\n\n  <div class=\"bill border-u-d\" padding>\n    <p class=\"smaller\">Cart Price <small class=\"float-right\">8778</small></p>\n    <p class=\"smaller\">\n      Discount <small class=\"float-right\" style=\"color: green\">-456</small>\n    </p>\n    <p class=\"smaller\">\n      Delivery Charges <small style=\"color:red\" class=\"float-right\">+48</small>\n    </p>\n    <h6>Cart Total<small class=\"float-right\">4568</small></h6>\n  </div>\n\n  <div padding style=\"text-align: center;\">\n    <ion-button (click)=\"gotoCheckOut()\" padding shape=\"round\" color=\"dark\">Proceed to Checkout</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".smaller {\n  font-size: 14px; }\n\n.border-u-d {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray; }\n\n.bill {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.bill p {\n    margin: 0;\n    padding: 0; }\n\n.dark {\n  background-color: #232f3e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFJSSxTQUFTO0lBQ1QsVUFBVSxFQUFBOztBQUlkO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3JkZXItdS1kIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmJpbGwge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmYzZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CartPage = /** @class */ (function () {
    function CartPage(router) {
        this.router = router;
    }
    CartPage.prototype.gotoCheckOut = function () {
        this.router.navigate(["checkout"]);
    };
    CartPage.prototype.ngOnInit = function () { };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cart",
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map