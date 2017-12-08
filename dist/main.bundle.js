webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        // templateUrl: './app.component.html',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_movie_movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/components/movie/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/components/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_admin_guard_service__ = __webpack_require__("../../../../../src/app/services/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_admin_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/admin/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_user_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/user/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_movie_control_bar_control_bar_component__ = __webpack_require__("../../../../../src/app/components/movie/control-bar/control-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_movie_material_material_component__ = __webpack_require__("../../../../../src/app/components/movie/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_user_user_page_user_page_component__ = __webpack_require__("../../../../../src/app/components/user/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_collection_collection_collection_component__ = __webpack_require__("../../../../../src/app/components/collection/collection/collection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_movie_movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_movie_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_admin_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_user_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_movie_control_bar_control_bar_component__["a" /* ControlBarComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_movie_material_material_component__["a" /* MaterialComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_user_user_page_user_page_component__["a" /* UserPageComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_collection_collection_collection_component__["a" /* CollectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_9__services_omdb_service_client__["a" /* OmdbServiceClient */],
            __WEBPACK_IMPORTED_MODULE_16__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_17__services_user_service_client__["a" /* UserServiceClient */],
            __WEBPACK_IMPORTED_MODULE_24__services_collection_service_client__["a" /* CollectionServiceClient */],
            __WEBPACK_IMPORTED_MODULE_26__services_movie_service_client__["a" /* MovieServiceClient */],
            __WEBPACK_IMPORTED_MODULE_27__services_material_service_client__["a" /* MaterialServiceClient */],
            __WEBPACK_IMPORTED_MODULE_28__services_review_service_client__["a" /* ReviewServiceClient */],
            __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_20__services_admin_guard_service__["a" /* AdminGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/components/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_movie_movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/components/movie/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/components/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/user/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_user_page_user_page_component__ = __webpack_require__("../../../../../src/app/components/user/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_collection_collection_collection_component__ = __webpack_require__("../../../../../src/app/components/collection/collection/collection.component.ts");
/**
 * Created by sesha on 7/26/17.
 */













var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'administrator', component: __WEBPACK_IMPORTED_MODULE_10__components_user_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'searchResults/:title', component: __WEBPACK_IMPORTED_MODULE_7__components_movie_movie_list_movie_list_component__["a" /* MovieListComponent */] },
    { path: 'searchDetail/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: 'userPage/:uid', component: __WEBPACK_IMPORTED_MODULE_11__components_user_user_page_user_page_component__["a" /* UserPageComponent */] },
    { path: 'collection/:cid', component: __WEBPACK_IMPORTED_MODULE_12__components_collection_collection_collection_component__["a" /* CollectionComponent */] },
    { path: 'apitest', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/collection/collection/collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/collection/collection/collection.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid card row\" *ngIf=\"collection\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{collection.name}}</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{collection.dateCreated | date: 'MM/dd/yyyy'}}</h6>\n  </div>\n  <button *ngIf=\"user && user._id === collection.userId\" class=\"btn btn-danger\" (click)=\"deleteCollection()\">Delete Collection</button>\n</div>\n\n<p></p>\n<p></p>\n<p></p>\n\n\n<h3>Movies</h3>\n<div class=\"container-fluid row justify-content-around\" *ngIf=\"collection\">\n  <div class=\"col-lg-3 card\" *ngFor=\"let m of collection.movies\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">{{m.name}}</h4>\n      <a routerLink=\"/searchDetail/{{m.omdbId}}\" class=\"card-link\">Movie link</a>\n      <button *ngIf=\"user && user._id === collection.userId\" class=\"btn btn-danger\" (click)=\"removeMovieFromCollection(m._id)\">Delete Movie</button>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/collection/collection/collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionComponent = (function () {
    function CollectionComponent(_location, route, collectionService, sharedService) {
        this._location = _location;
        this.route = route;
        this.collectionService = collectionService;
        this.sharedService = sharedService;
    }
    CollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            var id = params['cid'];
            _this.collectionService.findCollectoinDetail(id)
                .subscribe(function (result) {
                _this.collection = result;
            });
        });
    };
    CollectionComponent.prototype.deleteCollection = function () {
        var _this = this;
        this.collectionService.deleteCollection(this.collection)
            .subscribe(function (result) {
            _this._location.back();
        });
    };
    CollectionComponent.prototype.removeMovieFromCollection = function (mid) {
        var _this = this;
        this.collectionService.removeMovieFromCollection(mid, this.collection._id)
            .subscribe(function (result) {
            _this.collection = result;
        });
    };
    return CollectionComponent;
}());
CollectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-collection',
        template: __webpack_require__("../../../../../src/app/components/collection/collection/collection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/collection/collection/collection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__["a" /* CollectionServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__["a" /* CollectionServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], CollectionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=collection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-navbar></app-navbar>\n\n\n\n  <div class=\" container justify-content-center vertical-center input-group\">\n    <input class=\"form-control search\" placeholder=\"search movie\" [(ngModel)]=\"title\" >\n    <a routerLink='/searchResults/{{title}}' class=\"btn btn-outline-primary\"><i class=\" fa fa-search fa-lg\"></i> </a>\n  </div>\n\n\n  <div class=\"container justify-content-center align-item-center\">\n    <img style=\"width:100%; height: 400px\" src=\"../../../assets/img/logo.jpg\">\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    HomePageComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.user = null;
            _this.sharedService.user = null;
            _this.router.navigate(['/']);
        });
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/components/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" ngForm=\"hah\" name=\"f\">\n\n  <div>\n    <label for=\"1\">Search By title</label>\n    <input [(ngModel)]=\"title\" type=\"text\" id=\"1\" name=\"1\"/>\n    <button (click)=\"search1()\">Search</button>\n  </div>\n\n  <div>\n    <label for=\"2\">Search By Id</label>\n    <input [(ngModel)]=\"id\" type=\"text\" id=\"2\" name=\"2\"/>\n    <button (click)=\"search2()\">Search</button>\n  </div>\n\n  <!--<div>-->\n    <!--<label for=\"3\">Search Poster By title</label>-->\n    <!--<input [(ngModel)]=\"title1\" type=\"text\" id=\"3\" name=\"3\"/>-->\n    <!--<button (click)=\"search3()\">Search</button>-->\n  <!--</div>-->\n\n  <!--<div>-->\n    <!--<label for=\"4\">Search Poster By Id</label>-->\n    <!--<input [(ngModel)]=\"id1\" type=\"text\" id=\"4\" name=\"4\"/>-->\n    <!--<button (click)=\"search4()\">Search</button>-->\n  <!--</div>-->\n\n  <div *ngIf=\"result && !movie\" ngModel name=\"result\" ngDefaultControl>\n    <div *ngFor=\"let r of result\">\n      <div class=\"col-xs-4\" (click)=\"searchAfterClick(r.imdbID)\">\n        <label>Title: {{r.Title}}</label>\n        <label>year: {{r.year}}</label>\n        <label>imdbID: {{r.imdbID}}</label>\n        <label>Type: {{r.Type}}</label>\n        <img *ngIf=\"r.Poster != 'N/A'\" [src]='r.Poster' with=\"100%\"/>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngFor=\"let key of keys\">\n    index: {{key}}, value: {{movie[key]}}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(omdbService) {
        this.omdbService = omdbService;
        this.title = '';
        this.id = '';
        this.title1 = '';
        this.id1 = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search1 = function () {
        var _this = this;
        this.movie = null;
        this.omdbService.searchByTitle(this.title)
            .subscribe(function (u) {
            _this.result = u.Search;
        });
    };
    HomeComponent.prototype.searchAfterClick = function (id) {
        this.id = id;
        this.search2();
    };
    HomeComponent.prototype.search2 = function () {
        var _this = this;
        this.omdbService.searchById(this.id)
            .subscribe(function (u) {
            _this.movie = u;
            _this.keys = Object.keys(u);
        });
    };
    HomeComponent.prototype.search3 = function () {
        var _this = this;
        this.omdbService.searchPosterTitle(this.title1)
            .subscribe(function (u) {
            _this.result = u.Search;
        });
    };
    HomeComponent.prototype.search4 = function () {
        var _this = this;
        this.omdbService.searchPosterId(this.id1)
            .subscribe(function (u) {
            _this.result = u.Search;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/control-bar/control-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/control-bar/control-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid btn-group justify-content-center\" *ngIf=\"user\">\n  <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#collection\" >Add To Collections</button>\n  <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#material\" >Add Material</button>\n  <button class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#review\" >Add Review</button>\n</div>\n\n<div class=\"container-fluid btn-group justify-content-center\" *ngIf=\"!user\">\n  <button class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#alert\">Add To Collections</button>\n  <button class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#alert\">Add Material</button>\n  <button class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#alert\">Add Review</button>\n</div>\n\n<div>\n\n  <div class=\"modal fade bd-example-modal-lg\" id=\"collection\" tabindex=\"-1\" role=\"dialog\"\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content movie_item\">\n        <div class=\"d-flex flex-column container-fluid\">\n          <div class=\"row justify-content-between align-items-center\">\n            <i class=\"fa fa-folder\"></i>\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">New Collection</a>\n          </div>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <div class=\"card card-body\">\n              <input [(ngModel)]=\"name\" placeholder=\"Collection Name\"/>\n              <p></p>\n              <button class=\"btn btn-primary\" (click)=\"creatCollection()\">Create New Collection</button>\n            </div>\n          </div>\n          <div class=\"row justify-content-between align-items-center\" *ngFor=\"let c of collection\">\n            <i class=\"fa fa-folder\"></i>\n            <div class=\"btn-group\">\n              <a class=\"btn btn-outline-primary\" (click)=\"addToCollection(c)\">{{c.name}}</a>\n              <a class=\"btn btn-outline-danger\" (click)=\"deleteCollection(c)\">Delete</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"material\"\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content movie_item\">\n        <form (submit)=\"updateMaterial()\" *ngIf=\"material\" #material=\"ngForm\" class=\"container-fluid\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" name=\"title\" class=\"form-control\" id=\"title\" placeholder=\"Title\" [(ngModel)]=\"movie.name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"content\">Content</label>\n            <textarea rows=\"5\" type=\"text\" name=\"content\" class=\"form-control\" id=\"content\" placeholder=\"Content\" [(ngModel)]=\"materialContent\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"video\">Video Link</label>\n            <input type=\"url\" class=\"form-control\" name=\"video\" id=\"video\" placeholder=\"Video Link\" [(ngModel)]=\"materialVideo\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"audio\">Audio Link</label>\n            <input type=\"url\" class=\"form-control\" id=\"audio\" name=\"audio\" placeholder=\"Audio Link\" [(ngModel)]=\"materialAudio\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"text\">Text</label>\n            <textarea type=\"text\" class=\"form-control\" id=\"text\" name=\"text\" placeholder=\"Text\" [(ngModel)]=\"materialText\"></textarea>\n          </div>\n          <div class=\"container-fluid btn-group\">\n            <button class=\"btn btn-block btn-primary\" type=\"submit\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"review\"\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content movie_item\">\n        <form (submit)=\"updateReview()\" *ngIf=\"review\" #review=\"ngForm\" class=\"container-fluid\">\n          <div class=\"form-group\">\n            <label for=\"title1\">Title</label>\n            <input type=\"text\" class=\"form-control\" name=\"title1\" id=\"title1\" placeholder=\"Title\" [(ngModel)]=\"movie.name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"content1\">Content</label>\n            <textarea rows=\"5\" type=\"text\" class=\"form-control\" name=\"content1\" id=\"content1\" placeholder=\"Content\" [(ngModel)]=\"reviewContent\"></textarea>\n          </div>\n          <div class=\"container-fluid btn-group\">\n            <button class=\"btn btn-block btn-primary\" type=\"submit\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" id=\"alert\"\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content movie_item\">\n        Please Login first.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/control-bar/control-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ControlBarComponent = (function () {
    function ControlBarComponent(sharedService, collectionService, router, movieService, materialService, reviewService) {
        this.sharedService = sharedService;
        this.collectionService = collectionService;
        this.router = router;
        this.movieService = movieService;
        this.materialService = materialService;
        this.reviewService = reviewService;
    }
    ControlBarComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.movie = this.sharedService.movie;
        if (this.user) {
            this.fetchCollections();
            this.addMaterial();
            this.addReview();
        }
    };
    ControlBarComponent.prototype.fetchCollections = function () {
        var _this = this;
        this.collectionService.findAllCollections(this.user._id)
            .subscribe(function (result) {
            _this.collection = result.favirates;
        });
    };
    ControlBarComponent.prototype.creatCollection = function () {
        var _this = this;
        var fav = {};
        fav['name'] = this.name;
        fav['dateCreated'] = new Date();
        fav['userId'] = this.user._id;
        this.collectionService.createCollection(fav)
            .subscribe(function (u) {
            _this.collectionService.findAllCollections(_this.user._id)
                .subscribe(function (result) {
                _this.collection = result.favirates;
                _this.name = '';
            });
        });
    };
    ControlBarComponent.prototype.addToCollection = function (c) {
        this.movie = this.sharedService.movie;
        this.collectionService.addMovieToCollection(this.movie, c)
            .subscribe(function (result) {
            console.log(result);
            // TODO generate material list post list
        });
    };
    ControlBarComponent.prototype.addMaterial = function () {
        var _this = this;
        this.movie = this.sharedService.movie;
        var material = this.createMaterial();
        this.materialService.findOrCreate(material)
            .subscribe(function (u) {
            _this.material = u;
            _this.materialContent = u.content ? u.content : '';
            _this.materialText = u.text ? u.text : '';
            _this.materialAudio = u.audio ? u.audio : '';
            _this.materialVideo = u.video ? u.video : '';
            _this.movieService.addMaterial(u);
        });
    };
    ControlBarComponent.prototype.updateMaterial = function () {
        this.updateaMaterialValue();
        this.materialService.updateMaterial(this.material)
            .subscribe(function (u) {
        });
    };
    ControlBarComponent.prototype.updateaMaterialValue = function () {
        this.material['content'] = this.materialContent;
        this.material['video'] = this.materialVideo;
        this.material['audio'] = this.materialAudio;
        this.material['text'] = this.materialText;
    };
    ControlBarComponent.prototype.updateReviewValue = function () {
        this.review['content'] = this.reviewContent;
    };
    ControlBarComponent.prototype.updateReview = function () {
        this.updateReviewValue();
        this.reviewService.updateReview(this.review)
            .subscribe(function (u) {
        });
    };
    ControlBarComponent.prototype.addReview = function () {
        var _this = this;
        this.movie = this.sharedService.movie;
        var review = this.createReview();
        this.reviewService.findOrCreate(review)
            .subscribe(function (u) {
            _this.review = u;
            _this.reviewContent = u.content ? u.content : '';
            _this.movieService.addReview(review);
        });
    };
    ControlBarComponent.prototype.deleteCollection = function (c) {
        var _this = this;
        this.collectionService.deleteCollection(c)
            .subscribe(function (u) {
            _this.collectionService.findAllCollections(_this.user._id)
                .subscribe(function (result) {
                _this.collection = result.favirates;
                _this.name = '';
            });
        });
    };
    ControlBarComponent.prototype.createMaterial = function () {
        this.movie = this.sharedService.movie;
        var material = {
            title: this.movie.name,
            movieId: this.movie._id,
            userId: this.user._id,
            content: this.materialContent,
            audio: this.materialAudio,
            video: this.materialVideo,
            text: this.materialText,
            likes: 0,
            dateCreated: new Date()
        };
        return material;
    };
    ControlBarComponent.prototype.createReview = function () {
        this.movie = this.sharedService.movie;
        var review = {
            title: this.movie.name,
            movieId: this.movie._id,
            userId: this.user._id,
            content: this.reviewContent,
            likes: 0,
            dateCreated: new Date(),
        };
        return review;
    };
    return ControlBarComponent;
}());
ControlBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-control-bar',
        template: __webpack_require__("../../../../../src/app/components/movie/control-bar/control-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/control-bar/control-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__["a" /* CollectionServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__["a" /* CollectionServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_material_service_client__["a" /* MaterialServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_material_service_client__["a" /* MaterialServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _f || Object])
], ControlBarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=control-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/material/material.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  material works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialComponent = (function () {
    function MaterialComponent(sharedService) {
        this.sharedService = sharedService;
    }
    MaterialComponent.prototype.ngOnInit = function () {
        this.movie = this.sharedService.movie;
        this.user = this.sharedService.user;
    };
    return MaterialComponent;
}());
MaterialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-material',
        template: __webpack_require__("../../../../../src/app/components/movie/material/material.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/material/material.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], MaterialComponent);

var _a;
//# sourceMappingURL=material.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"keys\" class=\"container-fluid row\">\n  <div class=\"col-lg-3 movie_item\">\n    <img [src]=\"movieDetail.Poster\" class=\"img-fluid\">\n  </div>\n  <div class=\"col-lg-9 movie_item\">\n    <table class=\"table-striped table-light table-hover\">\n      <tr *ngFor=\"let key of keys\">\n        {{key}} : {{movieDetail[key]}}\n      </tr>\n    </table>\n  </div>\n</div>\n\n<app-control-bar *ngIf=\"movieReady\"></app-control-bar>\n\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading1\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapse1\">\n        Material List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse1\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n    <div class=\"card-body\">\n      <table>\n        <tr *ngFor=\"let m of materialList\">\n          <div class=\"container-fluid\">\n            <span class=\"col-lg-2\">Title: {{m.title.trim()}}</span>\n            <span class=\"col-lg-2\">Content: {{m.content}}</span>\n            <span class=\"col-lg-2\">Video: {{m.video}}</span>\n            <span class=\"col-lg-2\">Audio: {{m.audio}}</span>\n            <span class=\"col-lg-2\">Text: {{m.text}}</span>\n            <button class=\"btn btn-outline-primary\" routerLink=\"/userPage/{{m.userId}}\">Poster</button>\n          </div>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\">\n        Review List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n    <div class=\"card-body\">\n      <table>\n        <tr *ngFor=\"let m of reviewList\">\n          <div class=\"container-fluid\">\n            <span class=\"col-lg-4\">Title: {{m.title.trim()}}</span>\n            <span class=\"col-lg-4\">Content: {{m.content}}</span>\n            <button class=\"btn btn-outline-primary\" routerLink=\"/userPage/{{m.userId}}\">Poster</button>\n          </div>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__ = __webpack_require__("../../../../../src/app/services/movie.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MovieDetailComponent = (function () {
    function MovieDetailComponent(omdbService, route, sharedService, movieService, reviewService, materialService, userService) {
        this.omdbService = omdbService;
        this.route = route;
        this.sharedService = sharedService;
        this.movieService = movieService;
        this.reviewService = reviewService;
        this.materialService = materialService;
        this.userService = userService;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.omdbService.searchById(id)
                .subscribe(function (u) {
                _this.movieDetail = u;
                _this.keys = Object.keys(u);
                _this.newM = _this.createNewMovie(u);
                _this.movieService.findOrCreateMovie(_this.newM)
                    .subscribe(function (movie) {
                    _this.sharedService.movie = movie;
                    _this.movieReady = movie;
                    var newId = movie._id;
                    _this.fetchAllReview(newId);
                    _this.fetchAllMaterial(newId);
                });
            });
        });
    };
    MovieDetailComponent.prototype.createNewMovie = function (movie) {
        var newM = {};
        newM['name'] = movie.Title;
        newM['omdbId'] = movie.imdbID;
        newM['dateCreated'] = new Date();
        return newM;
    };
    MovieDetailComponent.prototype.fetchAllReview = function (id) {
        var _this = this;
        this.reviewService.findAllReviewByMovieId(id)
            .subscribe(function (result) {
            _this.reviewList = result;
        });
    };
    MovieDetailComponent.prototype.fetchAllMaterial = function (id) {
        var _this = this;
        this.materialService.findAllMaterialByMovieId(id)
            .subscribe(function (result) {
            _this.materialList = result;
        });
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-detail',
        template: __webpack_require__("../../../../../src/app/components/movie/movie-detail/movie-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/movie-detail/movie-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_movie_service_client__["a" /* MovieServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_material_service_client__["a" /* MaterialServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_material_service_client__["a" /* MaterialServiceClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _g || Object])
], MovieDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-list/movie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div *ngIf=\"result\" class=\"row\">\n  <div *ngFor=\"let r of result\"  class=\"col-md-4 col-lg-4 movie_item\" routerLink=\"/searchDetail/{{r.imdbID}}\">\n    <ul>\n      <li>Title: {{r.Title}}</li>\n      <li>year: {{r.Year}}</li>\n      <li>imdbID: {{r.imdbID}}</li>\n      <li>Type: {{r.Type}}</li>\n    </ul>\n    <div>\n      <img *ngIf=\"r.Poster != 'N/A'\" [src]='r.Poster' with=\"100%\"/>\n    </div>\n  </div>\n</div>\n\n<div class=\"text-xs-center\">\n  <ul class=\"pagination justify-content-center\">\n    <li class=\"page-item\">\n      <a class=\"page-link\" (click)=\"searchOnPageNumber(page-1)\" aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n    </li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(1)\">1</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(2)\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(3)\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(4)\">4</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(5)\">5</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(6)\">6</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(7)\">7</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(8)\">8</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" (click)=\"searchOnPageNumber(9)\">9</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\" (click)=\"searchOnPageNumber(page+1)\" aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<div *ngIf=\"!result\">\n  <div class=\"container vertical-center justify-content-between\">\n    <h3>There is no matching records.</h3>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__ = __webpack_require__("../../../../../src/app/services/omdb.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieListComponent = (function () {
    function MovieListComponent(omdbService, route, sharedService) {
        this.omdbService = omdbService;
        this.route = route;
        this.sharedService = sharedService;
        this.page = 1;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            _this.title = params['title'];
            _this.omdbService.searchByTitle(_this.title)
                .subscribe(function (result) {
                _this.result = result.Search;
            });
        });
    };
    MovieListComponent.prototype.searchOnPageNumber = function (page) {
        var _this = this;
        if (page <= 1 || page >= 10) {
            return;
        }
        this.page = page;
        this.omdbService.searchByTitleForNextPage(this.title, page)
            .subscribe(function (movies) {
            _this.result = movies.Search;
        });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-list',
        template: __webpack_require__("../../../../../src/app/components/movie/movie-list/movie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/movie-list/movie-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_omdb_service_client__["a" /* OmdbServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], MovieListComponent);

var _a, _b, _c;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  test page workd\n  <input type=\"switch\"/>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" *ngIf=\"user\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    Update Failed! Please try again later.\n  </div>\n  <div *ngIf=\"sucFlag\"\n       class=\"alert alert-success\">\n    Update Succeed!\n  </div>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"walice\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email address\" name=\"email\" [(ngModel)]=\"user.email\">\n    </div>\n\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"phone\">Phone</label>\n      <input [(ngModel)]=\"user.phone\" id=\"phone\" name=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"123-345-5678\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"date\">First Name</label>\n      <input disabled [ngModel]=\"user.dateCreated | date: 'MM/dd/yyyy HH:mm:ss'\" name=\"date\" type=\"text\" class=\"form-control\" id=\"date\">\n    </div>\n\n\n    <p> </p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Update</button>\n    <p> </p>\n  </form>\n  <p></p>\n  <button class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</button>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading11\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse11\" aria-expanded=\"false\" aria-controls=\"collapse11\">\n        Collection List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse11\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading11\">\n    <div *ngFor=\"let m of collectionList\" class=\"container-fluid justify-content-between row\">\n      <h4 class=\"card-title col-lg-3\">{{m.name}}</h4>\n      <a routerLink=\"/collection/{{m._id}}\" class=\"card-link\">Collection link</a>\n      <button class=\"btn btn-outline-danger\" (click)=\"deleteCollection(m)\">Delete Collection</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading1\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapse1\">\n        Material List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse1\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n    <div class=\"container-fluid justify-content-between\" *ngFor=\"let m of materialList\">\n      <h4>Title: {{m.title}}</h4>\n      <h6>Content: {{m.content}}</h6>\n      <h6>Video: {{m.video}}</h6>\n      <h6>Audio: {{m.audio}}</h6>\n      <h6>Text: {{m.text}}</h6>\n      <button class=\"btn btn-outline-danger btn-block\" (click)=\"deleteMaterial(m._id)\">Delete Material</button>\n      <hr/>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\">\n        Review List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n    <div class=\"container-fluid justify-content-between\"  *ngFor=\"let m of reviewList\">\n      <h4 >Title: {{m.title}}</h4>\n      <a >Content: {{m.content}}</a>\n      <button class=\"btn btn-outline-danger btn-block\" (click)=\"deleteReview(m._id)\">Delete Review</button>\n      <hr/>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading4\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">\n        User List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse4\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading4\">\n    <hr/>\n    <button type=\"button\" class=\"btn btn-outline-info btn-block\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n      Add A New User\n    </button>\n    <hr/>\n    <div class=\"container-fluid justify-content-between row\"  *ngFor=\"let m of userList\">\n      <a class=\"col-lg-3\" routerLink=\"/userPage/{{m._id}}\" style=\"padding-left: 1%;\">Username: {{m.username}}</a>\n      <span class=\"row btn-group\">\n        <button [disabled]=\"m.userType == 0\" class=\"btn btn-primary\" (click)=\"upgrade(m)\">Admin</button>\n        <button [disabled]=\"m.userType == 1\" class=\"btn btn-primary\" (click)=\"downgrade(m)\">Normal User</button>\n      </span>\n      <span>Created On {{m.dateCreated | date: 'MM/dd/yy'}}</span>\n      <button class=\"btn btn-outline-danger\" (click)=\"deleteUser(m._id)\">Delete User</button>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New User</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"errFlag\"\n             class=\"alert alert-danger\">\n          {{errMsg}}\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">Username</label>\n          <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\">\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">Password</label>\n          <input [(ngModel)]=\"password\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"password\">\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">First Name</label>\n          <input [(ngModel)]=\"firstName\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"first name\">\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">Last Name</label>\n          <input [(ngModel)]=\"lastName\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"last name\">\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">Email</label>\n          <input [(ngModel)]=\"email\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"email\">\n        </div>\n        <div class=\"input-group row\">\n          <label class=\"col-lg-3\">phone</label>\n          <input [(ngModel)]=\"phone\" name=\"username\" type=\"text\" class=\"form-control\" placeholder=\"phone number\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"create()\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = (function () {
    function AdminComponent(sharedService, userService, collectionService, materialService, reviewService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.collectionService = collectionService;
        this.materialService = materialService;
        this.reviewService = reviewService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.dateCreated = '';
        this.errMsg = 'Username already exists~!!';
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userService.findAllUsers()
            .subscribe(function (users) {
            _this.userList = users;
        });
        this.collectionService.fetchAllCollection()
            .subscribe(function (cs) {
            _this.collectionList = cs;
        });
        this.materialService.findAllMaterial()
            .subscribe(function (ms) {
            _this.materialList = ms;
        });
        this.reviewService.findAllReview()
            .subscribe(function (rs) {
            _this.reviewList = rs;
        });
    };
    AdminComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (user) {
            if (user) {
                _this.sucFlag = true;
                _this.errorFlag = false;
            }
            else {
                _this.sucFlag = false;
                _this.errorFlag = true;
            }
        });
    };
    AdminComponent.prototype.deleteCollection = function (c) {
        var _this = this;
        this.collectionService.deleteCollection(c)
            .subscribe(function (cr) {
            _this.collectionService.fetchAllCollection()
                .subscribe(function (r) {
                _this.collectionList = r;
            });
        });
    };
    AdminComponent.prototype.deleteMaterial = function (id) {
        var _this = this;
        this.materialService.deleteMaterial(id)
            .subscribe(function (u) {
            _this.materialService.findAllMaterial()
                .subscribe(function (r) {
                _this.materialList = r;
            });
        });
    };
    AdminComponent.prototype.deleteReview = function (id) {
        var _this = this;
        this.reviewService.deleteReview(id)
            .subscribe(function (u) {
            _this.reviewService.findAllReview()
                .subscribe(function (r) {
                _this.reviewList = r;
            });
        });
    };
    AdminComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id)
            .subscribe(function (u) {
            _this.userService.findAllUsers()
                .subscribe(function (us) {
                _this.userList = us;
            });
        });
    };
    AdminComponent.prototype.upgrade = function (user) {
        var _this = this;
        user.userType = 0;
        this.userService.updateUser(user._id, user)
            .subscribe(function (u) {
            _this.userService.findAllUsers()
                .subscribe(function (us) {
                _this.userList = us;
            });
        });
    };
    AdminComponent.prototype.downgrade = function (user) {
        var _this = this;
        user.userType = 1;
        this.userService.updateUser(user._id, user)
            .subscribe(function (u) {
            _this.userService.findAllUsers()
                .subscribe(function (us) {
                _this.userList = us;
            });
        });
    };
    AdminComponent.prototype.create = function () {
        var _this = this;
        this.userService.findUserByName(this.username)
            .subscribe(function (user) {
            if (user) {
                _this.errFlag = true;
            }
            else {
                _this.errFlag = false;
                var nuser = {};
                nuser['username'] = _this.username;
                nuser['password'] = _this.password;
                nuser['firstName'] = _this.firstName;
                nuser['lastName'] = _this.lastName;
                nuser['email'] = _this.email;
                nuser['phone'] = _this.phone;
                nuser['dateCreated'] = new Date();
                _this.userService.register(nuser)
                    .subscribe(function (nu) {
                    _this.userService.findAllUsers()
                        .subscribe(function (us) {
                        _this.userList = us;
                    });
                });
            }
        });
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.user = null;
        this.sharedService.user = null;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/user/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__["a" /* CollectionServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_collection_service_client__["a" /* CollectionServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__["a" /* MaterialServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__["a" /* MaterialServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _f || Object])
], AdminComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/admin/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/admin/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-detail works!\n</p>\n\nbuild up user detail page\ngenerate material  review friends in profile page\nadd functionality for admin page delete edit create\n"

/***/ }),

/***/ "../../../../../src/app/components/user/admin/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/components/user/admin/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/admin/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserDetailComponent);

//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input   placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    <p> </p>\n\n    <input  placeholder=\"password\"\n            name=\"password\"\n            type=\"password\"\n            class=\"form-control\"\n            ngModel\n            required\n            #password=\"ngModel\"/>\n    <p> </p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n  </form>\n\n  <p> </p>\n  <a href=\"/auth/facebook\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n  <p> </p>\n\n  <button class=\"btn btn-success btn-block\"\n          type=\"button\"\n          routerLink=\"/register\">Register</button>\n  <p> </p>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        // alert(username + ' ' + password);
        this.userService.login(this.username, this.password)
            .subscribe(function (u) {
            if (u) {
                if (Object.getOwnPropertyNames(u).length > 0) {
                    if (u.userType === '0') {
                        _this.router.navigate(["/administrator"]);
                    }
                    else {
                        _this.router.navigate(["/profile"]);
                    }
                }
                else {
                    _this.errorFlag = true;
                }
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar-default navbar bg-dark text-white\">\n  <div class=\"row justify-content-around\" style=\"width: 10%\">\n    <a class=\"btn btn-outline-light\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left fa-lg\"  style=\"color: white;\"></i></a>\n    <a class=\"btn btn-outline-light\" (click)=\"goForward()\"><i class=\"fa fa-arrow-right fa-lg\"  style=\"color: white;\"></i></a>\n  </div>\n\n  <a routerLink=\"/\" class=\"btn btn-outline-light\">HomePage</a>\n\n  <div *ngIf=\"!user\" id=\"unloggedIn\" class=\"btn-group\">\n    <a routerLink=\"/login\" class=\"btn btn-outline-primary\">Login</a>\n    <a routerLink=\"/register\" class=\"btn btn-outline-secondary\">Register</a>\n  </div>\n  <div id=\"loggedIn\" *ngIf=\"user && user.userType == 1\">\n    <a routerLink=\"/profile\" class=\"btn btn-outline-primary\">Profile</a>\n    <a (click)=\"logout()\" class=\"btn btn-outline-danger\">Log Out</a>\n  </div>\n  <div id=\"adminLoggedIn\" *ngIf=\"user && user.userType == 0\">\n    <a routerLink=\"/administrator\" class=\"btn btn-outline-primary\">Profile</a>\n    <a (click)=\"logout()\" class=\"btn btn-outline-danger\">Log Out</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(_location, sharedService, userService, router) {
        this._location = _location;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.user = null;
        this.sharedService.user = null;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/']);
        });
    };
    NavbarComponent.prototype.goBack = function () {
        this._location.back();
    };
    NavbarComponent.prototype.goForward = function () {
        this._location.forward();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/user/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" *ngIf=\"user\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    Update Failed! Please try again later.\n  </div>\n  <div *ngIf=\"sucFlag\"\n       class=\"alert alert-success\">\n    Update Succeed!\n  </div>\n  <form (ngSubmit) = \"update()\" #f=\"ngForm\">\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"walice\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"email address\" name=\"email\" [(ngModel)]=\"user.email\">\n    </div>\n\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"phone\">Phone</label>\n      <input [(ngModel)]=\"user.phone\" id=\"phone\" name=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"123-345-5678\">\n    </div>\n\n    <div class=\"input-group row\">\n      <label class=\"col-lg-3\" for=\"date\">First Name</label>\n      <input disabled [ngModel]=\"user.dateCreated | date: 'MM/dd/yyyy HH:mm:ss'\" name=\"date\" type=\"text\" class=\"form-control\" id=\"date\">\n    </div>\n\n\n    <p> </p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Update</button>\n    <p> </p>\n  </form>\n  <p></p>\n  <button class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</button>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading11\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse11\" aria-expanded=\"false\" aria-controls=\"collapse11\">\n        Collection List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse11\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading11\">\n      <div *ngFor=\"let m of collection\" class=\"container-fluid justify-content-between row\">\n        <h4 class=\"card-title\">{{m.name}}</h4>\n        <a routerLink=\"/collection/{{m._id}}\" class=\"card-link\">Collection link</a>\n        <button class=\"btn btn-outline-danger\" (click)=\"deleteCollection(m)\">Delete Collection</button>\n      </div>\n    </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading1\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapse1\">\n        Material List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse1\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n          <div class=\"container-fluid justify-content-between\" *ngFor=\"let m of materialList\">\n            <h4>Title: {{m.title}}</h4>\n            <h6>Content: {{m.content}}</h6>\n            <h6>Video: {{m.video}}</h6>\n            <h6>Audio: {{m.audio}}</h6>\n            <h6>Text: {{m.text}}</h6>\n            <button class=\"btn btn-outline-danger btn-block\" (click)=\"deleteMaterial(m._id)\">Delete Material</button>\n            <hr/>\n          </div>\n    </div>\n</div>\n\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\">\n        Review List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n          <div class=\"container-fluid justify-content-between\"  *ngFor=\"let m of reviewList\">\n            <h4 >Title: {{m.title}}</h4>\n            <a >Content: {{m.content}}</a>\n            <button class=\"btn btn-outline-danger btn-block\" (click)=\"deleteReview(m._id)\">Delete Review</button>\n            <hr/>\n          </div>\n    </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\" role=\"tab\" id=\"heading4\">\n    <h5 class=\"mb-0\">\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">\n        Friend List\n      </a>\n    </h5>\n  </div>\n  <div id=\"collapse4\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading4\">\n          <div class=\"container-fluid justify-content-between row justify-content-center\"  *ngFor=\"let m of friendList\">\n            <a routerLink=\"/userPage/{{m._id}}\" style=\"padding-left: 1%;\">{{m.username}}</a>\n            <span>{{m.dateCreated | date: 'MM/dd/yy'}}</span>\n            <button class=\"btn btn-outline-danger\" (click)=\"deleteFriend(m._id)\">Delete Friend</button>\n          </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(route, userService, materialService, reviewService, collectionService, router, sharedService) {
        this.route = route;
        this.userService = userService;
        this.materialService = materialService;
        this.reviewService = reviewService;
        this.collectionService = collectionService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        if (this.user) {
            this.userService.findUserById(this.user._id)
                .subscribe(function (u) {
                _this.collection = u.favirates;
                _this.friendList = u.friends;
            });
            this.materialService.fingAllMaterialByUserId(this.user._id)
                .subscribe(function (m) {
                _this.materialList = m;
            });
            this.reviewService.fingAllReviewByUserId(this.user._id)
                .subscribe(function (r) {
                _this.reviewList = r;
            });
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.user = null;
        this.sharedService.user = null;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user._id, this.user)
            .subscribe(function (user) {
            if (user) {
                _this.sucFlag = true;
                _this.errorFlag = false;
            }
            else {
                _this.sucFlag = false;
                _this.errorFlag = true;
            }
        });
    };
    ProfileComponent.prototype.deleteCollection = function (c) {
        var _this = this;
        this.collectionService.deleteCollection(c)
            .subscribe(function (cr) {
            _this.collectionService.findAllCollections(_this.user._id)
                .subscribe(function (r) {
                console.log(r);
                _this.collection = r.favirates;
            });
        });
    };
    ProfileComponent.prototype.deleteMaterial = function (id) {
        var _this = this;
        this.materialService.deleteMaterial(id)
            .subscribe(function (u) {
            _this.materialService.fingAllMaterialByUserId(_this.user._id)
                .subscribe(function (r) {
                _this.materialList = r;
            });
        });
    };
    ProfileComponent.prototype.deleteReview = function (id) {
        var _this = this;
        this.reviewService.deleteReview(id)
            .subscribe(function (u) {
            _this.reviewService.fingAllReviewByUserId(_this.user._id)
                .subscribe(function (r) {
                _this.reviewList = r;
            });
        });
    };
    ProfileComponent.prototype.deleteFriend = function (id) {
        var _this = this;
        this.userService.deleteFriend(this.user._id, id)
            .subscribe(function (u) {
            console.log('--------------------', u);
            _this.userService.findUserById(_this.user._id)
                .subscribe(function (r) {
                console.log('======================', r);
                _this.friendList = r.friends;
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__["a" /* MaterialServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_material_service_client__["a" /* MaterialServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_collection_service_client__["a" /* CollectionServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_collection_service_client__["a" /* CollectionServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _g || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>Register</h1>\n  <form (ngSubmit)='register()' #f=\"ngForm\">\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           required\n           #username=\"ngModel\"/>\n    <p> </p>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Username can not be empty!\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <p> </p>\n\n    <input placeholder=\"confirm password\"\n           name=\"password1\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password1=\"ngModel\"/>\n    <p> </p>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Password can not be empty!\n    </span>\n    <span class=\"help-block\" *ngIf=\"password.touched && password1.touched && password.value != password1.value\">\n      Password does not match!\n    </span>\n    <p></p>\n    <p></p>\n    <input placeholder=\"First Name\" type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" />\n    <p></p>\n    <input placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control\"/>\n    <p></p>\n    <input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"/>\n    <p></p>\n    <input placeholder=\"Phone Number\" [(ngModel)]=\"phone\" name=\"phone\" type=\"tel\" class=\"form-control\"/>\n    <p></p>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid || password.value != password1.value\">Register</button>\n  </form>\n  <p> </p>\n  <a class=\"btn btn-danger btn-block\"\n     [routerLink]=\"['/']\" >Cancel</a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Username already exists~!!';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.findUserByName(this.registerForm.value.username)
            .subscribe(function (user) {
            if (user) {
                _this.errorFlag = true;
            }
            else {
                _this.errorFlag = false;
                var nuser = {};
                nuser['username'] = _this.registerForm.value.username;
                nuser['password'] = _this.registerForm.value.password;
                nuser['firstName'] = _this.firstName;
                nuser['lastName'] = _this.lastName;
                nuser['email'] = _this.email;
                nuser['phone'] = _this.phone;
                nuser['dateCreated'] = new Date();
                _this.userService.register(nuser)
                    .subscribe(function (nu) {
                    if (nu) {
                        _this.sharedService.user = nu;
                        _this.router.navigate(["/profile"]);
                    }
                });
            }
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid alert alert-danger\" *ngIf=\"errFlag\">\n  {{errMsg}}\n</div>\n\n<div class=\"container-fluid alert alert-success\" *ngIf=\"sucFlag\">\n  {{sucMsg}}\n</div>\n<div class=\"container\" style=\"margin-top: 20px; margin-bottom: 20px; background-color: #c4e3f3\">\n  <div class=\"row panel\">\n    <div class=\"col-md-4 bg_blur \">\n      <button (click)=\"addAdFriend()\" class=\"follow_btn hidden-xs\">Follow</button>\n    </div>\n    <div class=\"col-md-8  col-xs-12\" *ngIf=\"user\">\n      <img src=\"../../../../assets/img/logo.jpg\" class=\"img-thumbnail picture hidden-xs\" />\n      <div class=\"header\">\n        <h1>{{user.username}}</h1>\n        <h4>{{user.userType=='1' ? \"Normal User\" : \"Administartor\" }}</h4>\n        <span>Left for future addons.</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row nav\" *ngIf=\"user\">\n      <a class=\"col-md-4 col-xs-4 well\" (click)=\"changeIndex(1)\" style=\"color: white\">\n        <i class=\"fa fa-heart-o fa-lg\" style=\"color: white\"></i> {{user.favirates.length}}</a>\n      <a class=\"col-md-4 col-xs-4 well\" (click)=\"changeIndex(2)\" style=\"color: white\">\n        <i class=\"fa fa-users fa-lg\" style=\"color: white\"></i> {{user.friends.length}}</a>\n      <a class=\"col-md-4 col-xs-4 well\" style=\"color: white\">\n        <i class=\"fa fa-thumbs-o-up fa-lg\" style=\"color: white\"></i> 26</a>\n  </div>\n</div>\n\n<div>\n  <div class=\"container-fluid\" *ngIf=\" index == 1\">\n    <div class=\"card card-body\" style=\"color: black\">\n      <p>Collection Information</p>\n      <table class=\"table table-striped table-hover\" *ngIf=\"user\">\n        <thead class=\"container-fluid\">\n          <td class=\"col-sm-3\">Collection Name</td>\n          <td class=\"col-sm-3\">Date Created</td>\n          <td class=\"col-sm-3\">Number Of Movies</td>\n        </thead>\n        <tr *ngFor=\"let f of user.favirates\" routerLink=\"/collection/{{f._id}}\">\n          <td class=\"col-sm-3\">{{f.name}}</td>\n          <td class=\"col-sm-3\">{{f.dateCreated | date: 'MM/dd/yyyy'}}</td>\n          <td class=\"col-sm-3\">{{f.movies.length}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class=\"container-fluid\" *ngIf=\" index == 2\">\n    <div class=\"card card-body\" style=\"color: black\">\n      <p>Friends Information</p>\n      <table class=\"table table-striped table-hover\" *ngIf=\"user\">\n        <thead class=\"container-fluid\">\n        <td class=\"col-sm-3\">Friend Name</td>\n        <td class=\"col-sm-3\">Date Created</td>\n        <td class=\"col-sm-3\">Number Of Collection</td>\n        </thead>\n        <tr *ngFor=\"let f of user.friends\" routerLink=\"/userPage/{{f._id}}\">\n          <td class=\"col-sm-3\">   {{f.username}}</td>\n          <td class=\"col-sm-3\">{{f.dateCreated | date: 'MM/dd/yyyy'}}</td>\n          <td class=\"col-sm-3\">{{f.favirates.length}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__ = __webpack_require__("../../../../../src/app/services/collection.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_material_service_client__ = __webpack_require__("../../../../../src/app/services/material.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_review_service_client__ = __webpack_require__("../../../../../src/app/services/review.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPageComponent = (function () {
    function UserPageComponent(route, sharedService, userService, collectionService, materialService, reviewService) {
        this.route = route;
        this.sharedService = sharedService;
        this.userService = userService;
        this.collectionService = collectionService;
        this.materialService = materialService;
        this.reviewService = reviewService;
        this.index = 1;
        this.errMsg = 'Please Login In first.';
        this.sucMsg = 'Add sucessfully';
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            var id = params['uid'];
            _this.userService.findUserById(id)
                .subscribe(function (u) {
                _this.user = u;
            });
        });
    };
    UserPageComponent.prototype.changeIndex = function (i) {
        this.index = i;
    };
    UserPageComponent.prototype.addAdFriend = function () {
        var _this = this;
        if (!this.loggedInUser) {
            this.errFlag = true;
            this.sucFlag = false;
        }
        else {
            this.userService.addAsFriend(this.user._id, this.loggedInUser._id)
                .subscribe(function (u) {
                _this.errFlag = false;
                _this.sucFlag = true;
            });
        }
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-page',
        template: __webpack_require__("../../../../../src/app/components/user/user-page/user-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-page/user-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserServiceClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__["a" /* CollectionServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collection_service_client__["a" /* CollectionServiceClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service_client__["a" /* MaterialServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service_client__["a" /* MaterialServiceClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_review_service_client__["a" /* ReviewServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_review_service_client__["a" /* ReviewServiceClient */]) === "function" && _f || Object])
], UserPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/admin-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.userService.adminLoggedIn();
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserServiceClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserServiceClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/collection.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
var CollectionServiceClient = (function () {
    function CollectionServiceClient(http) {
        this.http = http;
        this.api = {
            'createCollection': this.createCollection,
            'findAllCollections': this.findAllCollections,
            'fetchAllCollection': this.fetchAllCollection,
            'deleteCollection': this.deleteCollection,
            'addMovieToCollection': this.addMovieToCollection,
            'removeMovieFromCollection': this.removeMovieFromCollection,
            'findCollectoinDetail': this.findCollectoinDetail,
        };
    }
    CollectionServiceClient.prototype.fetchAllCollection = function () {
        return this.http.get(baseUrl + '/collection/fetchAllCollection')
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.createCollection = function (fav) {
        var url = baseUrl + '/collection/create';
        return this.http.post(url, fav)
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.findAllCollections = function (userId) {
        var url = baseUrl + '/collection/findAllCollection/' + userId;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.deleteCollection = function (c) {
        var url = baseUrl + '/collection/deleteCollection/' + c._id;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.addMovieToCollection = function (movie, c) {
        var url = baseUrl + '/collection/addMovieToCollection/' + c._id;
        return this.http.post(url, movie)
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.removeMovieFromCollection = function (mid, cid) {
        var url = baseUrl + '/collection/removeMovieFromCollection/';
        return this.http.post(url, { movie: mid, collection: cid })
            .map(function (res) {
            return res.json();
        });
    };
    CollectionServiceClient.prototype.findCollectoinDetail = function (id) {
        var url = baseUrl + '/collection/findCollectionDetail/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return CollectionServiceClient;
}());
CollectionServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CollectionServiceClient);

var _a;
//# sourceMappingURL=collection.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/material.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialServiceClient = (function () {
    function MaterialServiceClient(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'findOrCreate': this.findOrCreate,
            'updateMaterial': this.updateMaterial,
            'fingAllMaterialByUserId': this.fingAllMaterialByUserId,
            'findAllMaterialByMovieId': this.findAllMaterialByMovieId,
            'deleteMaterial': this.deleteMaterial,
            'findAllMaterial': this.findAllMaterial,
        };
    }
    MaterialServiceClient.prototype.findAllMaterial = function () {
        return this.http.get(this.baseUrl + '/material/findAllMaterial')
            .map(function (res) {
            return res.json();
        });
    };
    MaterialServiceClient.prototype.deleteMaterial = function (id) {
        var url = this.baseUrl + '/material/deleteMaterial/' + id;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    MaterialServiceClient.prototype.findOrCreate = function (material) {
        var url = this.baseUrl + '/material/findOrCreate';
        return this.http.post(url, material)
            .map(function (res) {
            return res.json();
        });
    };
    MaterialServiceClient.prototype.updateMaterial = function (material) {
        var url = this.baseUrl + '/material/updateMaterial';
        return this.http.put(url, material)
            .map(function (res) {
            return res.json();
        });
    };
    MaterialServiceClient.prototype.findAllMaterialByMovieId = function (id) {
        var url = this.baseUrl + '/material/findAllMaterialByMovieId/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    MaterialServiceClient.prototype.fingAllMaterialByUserId = function (id) {
        var url = this.baseUrl + '/material/fingAllMaterialByUserId/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return MaterialServiceClient;
}());
MaterialServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MaterialServiceClient);

var _a;
//# sourceMappingURL=material.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieServiceClient = (function () {
    function MovieServiceClient(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createMovie': this.findOrCreateMovie,
            'addMaterial': this.addMaterial,
        };
    }
    MovieServiceClient.prototype.findOrCreateMovie = function (movie) {
        var url = this.baseUrl + '/movie/findOrCreate';
        return this.http.post(url, movie)
            .map(function (res) {
            return res.json();
        });
    };
    MovieServiceClient.prototype.addMaterial = function (material) {
        var url = this.baseUrl + '/movie/addMaterial';
        return this.http.post(url, material)
            .map(function (res) {
            return res.json();
        });
    };
    MovieServiceClient.prototype.addReview = function (review) {
        var url = this.baseUrl + '/movie/addReview';
        return this.http.post(url, review)
            .map(function (res) {
            return res.json();
        });
    };
    return MovieServiceClient;
}());
MovieServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MovieServiceClient);

var _a;
//# sourceMappingURL=movie.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/omdb.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
var OmdbServiceClient = (function () {
    function OmdbServiceClient(http) {
        this.http = http;
    }
    OmdbServiceClient.prototype.searchByTitleForNextPage = function (search, page) {
        var title = search + '&page=' + page;
        return this.http.post(baseUrl + '/movie/searchByName', { searchTerm: title })
            .map(function (res) {
            return res.json();
        });
    };
    OmdbServiceClient.prototype.searchByTitle = function (title) {
        return this.http.post(baseUrl + '/movie/searchByName', { searchTerm: title })
            .map(function (res) {
            return res.json();
        });
    };
    OmdbServiceClient.prototype.searchById = function (id) {
        return this.http.post(baseUrl + '/movie/searchById', { searchId: id })
            .map(function (res) {
            return res.json();
        });
    };
    OmdbServiceClient.prototype.searchPosterTitle = function (title) {
        return this.http.post(baseUrl + '/movie/posterName', { searchTerm: title })
            .map(function (res) {
            return res.json();
        });
    };
    OmdbServiceClient.prototype.searchPosterId = function (id) {
        return this.http.post(baseUrl + '/movie/posterId', { searchId: id })
            .map(function (res) {
            return res.json();
        });
    };
    return OmdbServiceClient;
}());
OmdbServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OmdbServiceClient);

var _a;
//# sourceMappingURL=omdb.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/review.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewServiceClient = (function () {
    function ReviewServiceClient(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'findOrCreate': this.findOrCreate,
            'updateReview': this.updateReview,
            'findAllReviewByMovieId': this.findAllReviewByMovieId,
            'fingAllReviewByUserId': this.fingAllReviewByUserId,
            'deleteReview': this.deleteReview,
            'findAllReview': this.findAllReview,
        };
    }
    ReviewServiceClient.prototype.findAllReview = function () {
        return this.http.get(this.baseUrl + '/review/findAllReview')
            .map(function (res) {
            return res.json();
        });
    };
    ReviewServiceClient.prototype.deleteReview = function (id) {
        var url = this.baseUrl + '/review/deleteReview/' + id;
        return this.http.delete(url)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewServiceClient.prototype.findOrCreate = function (review) {
        var url = this.baseUrl + '/review/findOrCreate';
        return this.http.post(url, review)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewServiceClient.prototype.updateReview = function (review) {
        var url = this.baseUrl + '/review/updateReview';
        return this.http.put(url, review)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewServiceClient.prototype.findAllReviewByMovieId = function (id) {
        var url = this.baseUrl + '/review/findAllReviewByMovieId/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    ReviewServiceClient.prototype.fingAllReviewByUserId = function (id) {
        var url = this.baseUrl + '/review/fingAllReviewByUserId/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return ReviewServiceClient;
}());
ReviewServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewServiceClient);

var _a;
//# sourceMappingURL=review.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = null;
        this.movie = null;
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
var UserServiceClient = (function () {
    function UserServiceClient(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'findUserByName': this.findUserByName,
            'login': this.login,
            'register': this.register,
            'adminLoggedIn': this.adminLoggedIn,
            'loggedIn': this.loggedIn,
            'logout': this.logout,
            'findAllUsers': this.findAllUsers,
            'findUserById': this.findUserById,
            'addAsFriend': this.addAsFriend,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'findAllFriends': this.findAllFriends,
            'deleteFriend': this.deleteFriend,
        };
    }
    UserServiceClient.prototype.deleteFriend = function (fid, did) {
        return this.http.post(this.baseUrl + '/api/user/deleteFriend', { from: fid, deleted: did })
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.findAllFriends = function (uid) {
        return this.http.get(this.baseUrl + '/api/user/findUserById/' + uid)
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password,
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.findUserByName = function (username) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/findUserByName', { username: username })
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.register = function (user) {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.adminLoggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0 && user.userType === '0') {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserServiceClient.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserServiceClient.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserServiceClient.prototype.findAllUsers = function () {
        var url = this.baseUrl + '/api/users';
        return this.http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserServiceClient.prototype.addAsFriend = function (from, to) {
        var url = this.baseUrl + '/api/user/addAsFriend';
        return this.http.post(url, { from: from, to: to })
            .map(function (res) {
            return res.json();
        });
    };
    UserServiceClient.prototype.findUserById = function (id) {
        var url = this.baseUrl + '/api/user/findUserById/' + id;
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    return UserServiceClient;
}());
UserServiceClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], UserServiceClient);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map