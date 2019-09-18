(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/product/product.page.html":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <div class=\"head\">\n    <div class=\"row\" style=\"color: white\">\n      <div class=\"col\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      </div>\n      <div class=\"col\">\n        <h4 class=\"center\">{{ category }}</h4>\n      </div>\n      <div class=\"col\"></div>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-padding-top\">\n    <ion-row center *ngFor=\"let i of rows\">\n      <ion-col (click)=\"show_details($event)\">\n        <img src=\"https://dummyimage.com/120x120/471a47/fff\" alt=\"\" />\n        <h5>item</h5>\n        <small>Rs 3453</small>\n      </ion-col>\n      <ion-col (click)=\"show_details($event)\">\n        <img src=\"https://dummyimage.com/120x120/471a47/fff\" alt=\"\" />\n        <h5>item</h5>\n        <small>Rs 3453</small>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  background-color: #232f3e !important;\n  padding-bottom: 10px;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.75); }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmYzZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProductPage = /** @class */ (function () {
    function ProductPage(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.rows = new Array(10);
        this.route.queryParams.subscribe(function (params) {
            _this.category = params["sub_category"] || 0;
        });
    }
    ProductPage.prototype.show_details = function (event) {
        this.router.navigate(["product-detail"], {
            queryParams: { product: event.target }
        });
    };
    ProductPage.prototype.ngOnInit = function () { };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product",
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map