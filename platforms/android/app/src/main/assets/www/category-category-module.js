(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/category/category.page.ts");







var routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
    }
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/category/category.page.html":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n  </ion-toolbar>\n\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let cat of categories\">\n      <ion-chip (click)=\"load_selected_child($event)\">{{\n        cat.parent\n      }}</ion-chip>\n    </ion-slide>\n  </ion-slides>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let items of current_parent\">\n    <ion-item (click)=\"get_selected_category_products($event)\">{{\n      items\n    }}</ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/category/category.page.scss":
/*!*********************************************!*\
  !*** ./src/app/category/category.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-u-d {\n  border-top: 1px lightgray solid;\n  border-bottom: 1px lightgray solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItdS1kIHtcbiAgYm9yZGVyLXRvcDogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.page.ts":
/*!*******************************************!*\
  !*** ./src/app/category/category.page.ts ***!
  \*******************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CategoryPage = /** @class */ (function () {
    function CategoryPage(router) {
        this.router = router;
        this.categories = [
            {
                id: 1,
                parent: "Electronics",
                childs: [
                    "Laptops",
                    "Mobile Accessories",
                    "Televisions",
                    "Laptops",
                    "Mobile Accessories",
                    "Televisions"
                ]
            },
            {
                id: 2,
                parent: "Fashion",
                childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
            },
            {
                id: 3,
                parent: "Home & Furniture",
                childs: ["Beds", "Mattress", "Wardrobes", "Dressing Tables"]
            },
            {
                id: 4,
                parent: "Fashion",
                childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
            },
            {
                id: 5,
                parent: "Fashion",
                childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
            },
            {
                id: 6,
                parent: "Fashion",
                childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
            },
            {
                id: 7,
                parent: "Fashion",
                childs: ["Footwear", "Clothing", "Watches", "Eyewear"]
            }
        ];
        this.current_parent = this.categories[0].childs;
        this.slideOpts = {
            loop: false,
            slidesPerView: 3
        };
    }
    CategoryPage.prototype.load_selected_child = function (event) {
        var x = this.categories.filter(function (item) {
            return item.parent == event.target.textContent;
        });
        this.current_parent = x[0].childs;
    };
    CategoryPage.prototype.get_selected_category_products = function (event) {
        this.router.navigate(["product"], {
            queryParams: { sub_category: event.target.textContent }
        });
    };
    CategoryPage.prototype.ngOnInit = function () { };
    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-category",
            template: __webpack_require__(/*! ./category.page.html */ "./src/app/category/category.page.html"),
            styles: [__webpack_require__(/*! ./category.page.scss */ "./src/app/category/category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-module.js.map