(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");







var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n  <div class=\"container ion-padding-top\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let i of x\">\n        <img\n          src=\"https://dummyimage.com/400x400/000/fff\"\n          class=\"img-fluid\"\n          alt=\"Responsive image\"\n        />\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <section padding>\n    <h4>items name with short description | color | version</h4>\n    <small style=\"color: green\">Get 30% off</small>\n    <h3>Rs 9999</h3>\n  </section>\n\n  <h5 padding class=\"center border-u-d\">Share</h5>\n  <section padding class=\"border-u-d\">\n    <h5>Select color</h5>\n    <button class=\"btn btn-sm\">red</button>\n    <button class=\"btn btn-sm\">red</button>\n    <button class=\"btn btn-sm\">red</button>\n  </section>\n\n  <section padding class=\"border-u-d\">\n    <small style=\"color: green\">Offer</small>\n    <small style=\"color: green\">Offer</small>\n    <small style=\"color: green\">Offer</small>\n  </section>\n\n  <section padding class=\"border-u-d\">\n    <h4>Details</h4>\n    <div padding>\n      <h6>Highlights</h6>\n      <small>Highlighted details</small><br />\n      <small>Highlighted details</small><br />\n      <small>Highlighted details</small><br />\n      <small style=\"color:blue\">View all details</small>\n    </div>\n  </section>\n\n  <section padding class=\"border-u-d\">\n    <h4>Reviews</h4>\n    <div padding>\n      <h5>Review 1</h5>\n      <h5>Review 1</h5>\n      <h5>Review 1</h5>\n      <h5>Review 1</h5>\n      <h5>Review 1</h5>\n    </div>\n  </section>\n\n  <section padding class=\"border-u-d\">\n    <h4>Similar Products</h4>\n    <div padding>\n      <ion-grid>\n        <ion-row center>\n          <ion-col text-center>\n            <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n            <h5>item</h5>\n            <small>Rs 3453</small>\n          </ion-col>\n          <ion-col>\n            <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n            <h5>item</h5>\n            <small>Rs 3453</small>\n          </ion-col>\n        </ion-row>\n        <ion-row center>\n          <ion-col text-center>\n            <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n            <h5>item</h5>\n            <small>Rs 3453</small>\n          </ion-col>\n          <ion-col>\n            <img src=\"https://dummyimage.com/100x100/471a47/fff\" alt=\"\" />\n            <h5>item</h5>\n            <small>Rs 3453</small>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <small class=\"center\">View all</small>\n    </div>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.border-u-d {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray; }\n\n.center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4uYm9yZGVyLXUtZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage() {
        this.x = new Array(5);
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ProductDetailPage.prototype.ngOnInit = function () { };
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product-detail",
            template: __webpack_require__(/*! ./product-detail.page.html */ "./src/app/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module.js.map