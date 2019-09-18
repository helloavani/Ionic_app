(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"head\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n  </ion-buttons>\n  <h3 class=\"ion-padding\">Create an account to access more contents</h3>\n  <h3 padding>Your details are safe with us</h3>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"container\">\n    <small class=\"danger\">Mobile No.</small>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text transparent\">IN +91</span>\n      </div>\n      <input class=\"form-control border-bottom\" />\n    </div>\n    <small class=\"danger\">Name </small>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control border-bottom\" />\n    </div>\n\n    <small class=\"danger\">E-mail</small>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control border-bottom\" />\n    </div>\n    <small class=\"danger\">Create a password</small>\n    <div class=\"input-group mb-3\">\n      <input type=\"password\" class=\"form-control border-bottom\" />\n    </div>\n\n    <ion-row center>\n      <ion-col text-center>\n        <ion-button size=\"small\" color=\"dark\">Join</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  background-color: #232f3e;\n  color: white;\n  margin-bottom: 20px; }\n\n.danger {\n  color: red; }\n\n.transparent {\n  border: none;\n  background: transparent; }\n\n.border-bottom {\n  border: none;\n  border-bottom: 1px solid black;\n  border-radius: 0; }\n\n.container {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoZWhlbGxib3kvRG93bmxvYWRzL2lvbmljLWVjb21tLW1hc3Rlci9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmYzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPage = /** @class */ (function () {
    function SignupPage() {
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map