(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/services/api-backend.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/api-backend.service.ts ***!
  \*******************************************************/
/*! exports provided: ApiBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiBackendService", function() { return ApiBackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ApiBackendService = /** @class */ (function () {
    function ApiBackendService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.backend.url;
    }
    ApiBackendService.prototype.get = function (route, params) {
        var _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params });
        return this.http.get(this.url + "/" + route, { params: _params });
    };
    ApiBackendService.prototype.post = function (route, obj) {
        return this.http.post(this.url + "/" + route, obj);
    };
    ApiBackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiBackendService);
    return ApiBackendService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_teste_teste_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/teste/teste.component */ "./src/app/pages/teste/teste.component.ts");








var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'teste', component: _pages_teste_teste_component__WEBPACK_IMPORTED_MODULE_7__["TesteComponent"] },
    {
        path: 'dashboard',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: './admin/admin.module#AdminModule'
    },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">ADMIN</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/projetos\" routerLinkActive=\"active\">Dashboard Projetos</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/teste\" routerLinkActive=\"active\">Teste</a>\n                </li>\n            </ul>\n            <span class=\"navbar-text\">\n                Navegação de Administrador\n            </span>\n        </div>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sitevitorpereira';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_teste_teste_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/teste/teste.component */ "./src/app/pages/teste/teste.component.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _services_log_log_publishers_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/log/log-publishers.service */ "./src/app/services/log/log-publishers.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipe/date-format.pipe */ "./src/app/pipe/date-format.pipe.ts");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "./src/app/components/timeline/timeline.component.ts");
/* harmony import */ var _components_list_skills_list_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/list-skills/list-skills.component */ "./src/app/components/list-skills/list-skills.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_list_experience_list_experience_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list-experience/list-experience.component */ "./src/app/components/list-experience/list-experience.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");













// ProductBFFService,









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _pages_teste_teste_component__WEBPACK_IMPORTED_MODULE_12__["TesteComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_16__["DateFormatPipe"],
                _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_17__["TimelineComponent"],
                _components_list_skills_list_skills_component__WEBPACK_IMPORTED_MODULE_18__["ListSkillsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _components_list_experience_list_experience_component__WEBPACK_IMPORTED_MODULE_20__["ListExperienceComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
            ],
            providers: [
                _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _services_log_log_service__WEBPACK_IMPORTED_MODULE_13__["LogService"],
                _services_log_log_publishers_service__WEBPACK_IMPORTED_MODULE_14__["LogPublishersService"],
                _pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_16__["DateFormatPipe"]
            ],
            exports: [_pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_16__["DateFormatPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"submited || submited_error\">\n\t<div *ngIf=\"!submited_error\" class=\"alert alert-success\" role=\"alert\">\n\t\t<h4 class=\"alert-heading\">Sucesso!</h4>\n\t\t<p>Seu Contato foi enviado com Sucesso, em breve entrarei em contato.</p>\n\t</div>\n\n\t<div *ngIf=\"submited_error\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<h4 class=\"alert-heading\">Erro Inesperado!</h4>\n\t\t<p>Tive um problema na hora de enviar seu contato, tente novamente em alguns instantes.</p>\n\t\t<hr>\n\t\t<p class=\"mb-0\">Seu problema persiste? Envie uma mensagem para <b>vitor_gja_@hotmail.com</b></p>\n\t</div>\n</ng-container>\n<ng-container *ngIf=\"!submited\">\n\t<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleFormControlInput1\">Nome</label>\n\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\"  formControlName=\"name\" placeholder=\"name@example.com\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleFormControlInput1\">Email</label>\n\t\t\t<!-- <span class=\"float-right\">{{contactForm.controls.email}}  </span> -->\n\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\"  formControlName=\"email\" placeholder=\"name@example.com\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"exampleFormControlTextarea1\">Example textarea</label>\n\t\t\t<!-- <span class=\"float-right\"> {{contactForm.controls.description}}  </span> -->\n\t\t\t<textarea class=\"form-control\" id=\"exampleFormControlTextarea1\"  formControlName=\"description\" rows=\"3\"></textarea>\n\t\t</div>\n\t\t<p>\n\t\t\t* Campos obrigatorios\n\t\t\t<button type=\"submit\" class=\"btn btn-primary float-right\" [disabled]=\"!contactForm.valid\">Enviar</button>\n\t\t</p>\n\t</form>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_services_api_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/services/api-backend.service */ "./src/app/admin/services/api-backend.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(apiBackend) {
        this.apiBackend = apiBackend;
        this.submited = false;
        this.submited_error = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        console.warn(this.contactForm);
        var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ url: window.location.host }, this.contactForm.value);
        this.apiBackend.post("email/contact", body).subscribe(function (data) {
            _this.submited = true;
            _this.submited_error = false;
        }, function (err) {
            console.error("Erro: ", err);
            _this.submited_error = true;
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_services_api_backend_service__WEBPACK_IMPORTED_MODULE_3__["ApiBackendService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small text-light py-3  bg-dark\">\n\t<!-- Copyright -->\n\t<div class=\"footer-copyright text-center py-3\">© {{getYear()}} Copyright:\n\t\t<a href=\"http://vitorpereira.com.br/\"> vitorpereira.com.br</a> / \n\t\t<a href=\"https://vitorgja.github.io/\"> vitorgja.github.io</a>\n\t</div>\n\t<!-- Copyright -->\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date(Date.now());
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getYear = function () {
        return this.year.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/list-experience/list-experience.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/list-experience/list-experience.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-experience\">\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let item of experience\">\n\t\t\t<div *ngIf=\"item.active\" class=\"card w-100 m-3 border-0 bg-transparent\">\n\t\t\t\t<div class=\"row no-gutters\">\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t<img src=\"{{item.image}}\" class=\"img-fluid p-2 {{item.background}}\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col pl-3\">\n\t\t\t\t\t\t<div class=\"card-block px-2\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">{{item.title}}</h4>\n\t\t\t\t\t\t\t<h5 class=\"card-title\">{{item.role_of}}</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">{{item.description}}</p>\n\t\t\t\t\t\t\t<p class=\"card-text bg-transparent\">{{parseDate(item.date_start)}} <b>-</b> {{parseDate(item.date_end)}} </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t</div>\n</div>\n\n\t\n\n"

/***/ }),

/***/ "./src/app/components/list-experience/list-experience.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/list-experience/list-experience.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1leHBlcmllbmNlL2xpc3QtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/list-experience/list-experience.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/list-experience/list-experience.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExperienceComponent", function() { return ListExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/date-format.pipe */ "./src/app/pipe/date-format.pipe.ts");



var ListExperienceComponent = /** @class */ (function () {
    function ListExperienceComponent(datePipe) {
        this.datePipe = datePipe;
    }
    ListExperienceComponent.prototype.ngOnInit = function () {
    };
    ListExperienceComponent.prototype.parseDate = function (date) {
        return this.datePipe.transform(date, "MM/yyyy");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListExperienceComponent.prototype, "experience", void 0);
    ListExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-experience',
            template: __webpack_require__(/*! ./list-experience.component.html */ "./src/app/components/list-experience/list-experience.component.html"),
            styles: [__webpack_require__(/*! ./list-experience.component.scss */ "./src/app/components/list-experience/list-experience.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"]])
    ], ListExperienceComponent);
    return ListExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/list-skills/list-skills.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-skills/list-skills.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-skills\">\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let item of skills\">\n\t\t\t<div *ngIf=\"item.active\" class=\"list-skill-item col-6 mb-5\">\n\t\t\t\t<span><b>{{item.title}}</b></span>\n\t\t\t\t<span class=\"float-right\">{{item.percent}}%</span>\n\t\t\t\t<div class=\"progress mt-3\" style=\"height: 10px;\">\n\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"item.percent\" aria-valuenow=\"\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t</div>\n</div>\t\n"

/***/ }),

/***/ "./src/app/components/list-skills/list-skills.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-skills/list-skills.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-skills .list-skill-item:nth-child(1) .progress-bar {\n  background-color: #f5bf00; }\n\n.list-skills .list-skill-item:nth-child(2) .progress-bar {\n  background-color: #f7951c; }\n\n.list-skills .list-skill-item:nth-child(3) .progress-bar {\n  background-color: #f36422; }\n\n.list-skills .list-skill-item:nth-child(4) .progress-bar {\n  background-color: #ed1c24; }\n\n.list-skills .list-skill-item:nth-child(5) .progress-bar {\n  background-color: #e10236; }\n\n.list-skills .list-skill-item:nth-child(6) .progress-bar {\n  background-color: #b90062; }\n\n.list-skills .list-skill-item:nth-child(7) .progress-bar {\n  background-color: #876363; }\n\n.list-skills .list-skill-item:nth-child(8) .progress-bar {\n  background-color: #3c70b5; }\n\n.list-skills .list-skill-item:nth-child(9) .progress-bar {\n  background-color: #04ad81; }\n\n.list-skills .list-skill-item:nth-child(10) .progress-bar {\n  background-color: #87c15e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9wcm9qZXRvcy1saW51eC92aXRvcnBlcmVpcmEvdml0b3JnamEtZ2hwYWdlL3NyYy9hcHAvY29tcG9uZW50cy9saXN0LXNraWxscy9saXN0LXNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUVzQyx5QkFmWixFQUFBOztBQWExQjtFQUdzQyx5QkFmWCxFQUFBOztBQVkzQjtFQUlzQyx5QkFmUCxFQUFBOztBQVcvQjtFQUtzQyx5QkFmZixFQUFBOztBQVV2QjtFQU1zQyx5QkFmWixFQUFBOztBQVMxQjtFQU9zQyx5QkFmZCxFQUFBOztBQVF4QjtFQVFzQyx5QkFmWixFQUFBOztBQU8xQjtFQVNzQyx5QkFmYixFQUFBOztBQU16QjtFQVVzQyx5QkFmYixFQUFBOztBQUt6QjtFQVd1Qyx5QkFmUixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXNraWxscy9saXN0LXNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAgIGJsYWNrOiByZ2IoNDQsNDgsNTYpLFxyXG4gICAgeWVsbG93OiByZ2IoMjQ1LDE5MSwwKSxcclxuICAgIG9yYW5nZTogcmdiKDI0NywxNDksMjgpLFxyXG4gICAgZGFya29yYW5nZTogcmdiKDI0MywxMDAsMzQpLFxyXG4gICAgcmVkOiByZ2IoMjM3LDI4LDM2KSxcclxuICAgIGRhcmtyZWQ6IHJnYigyMjUsMiw1NCksXHJcbiAgICBncmFwZTogcmdiKDE4NSwwLDk4KSxcclxuICAgIHB1cnBsZTogcmdiKDEzNSw5OSw5OSksXHJcbiAgICBibHVlOiByZ2IoNjAsMTEyLDE4MSksXHJcbiAgICBncmVlbjogcmdiKDQsMTczLDEyOSksXHJcbiAgICBsaWdodGdyZWVuOiByZ2IoMTM1LDE5Myw5NCksXHJcbik7XHJcblxyXG5cclxuLmxpc3Qtc2tpbGxze1xyXG4gICAgLmxpc3Qtc2tpbGwtaXRlbXtcclxuICAgICAgICAmOm50aC1jaGlsZCgxKSAucHJvZ3Jlc3MtYmFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHllbGxvdyk7IH1cclxuICAgICAgICAmOm50aC1jaGlsZCgyKSAucHJvZ3Jlc3MtYmFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIG9yYW5nZSk7IH1cclxuICAgICAgICAmOm50aC1jaGlsZCgzKSAucHJvZ3Jlc3MtYmFyeyBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIGRhcmtvcmFuZ2UpOyB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNCkgLnByb2dyZXNzLWJhcnsgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCByZWQpOyB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNSkgLnByb2dyZXNzLWJhcnsgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBkYXJrcmVkKTsgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDYpIC5wcm9ncmVzcy1iYXJ7IGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgZ3JhcGUpOyB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoNykgLnByb2dyZXNzLWJhcnsgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwdXJwbGUpOyB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoOCkgLnByb2dyZXNzLWJhcnsgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBibHVlKTsgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDkpIC5wcm9ncmVzcy1iYXJ7IGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgZ3JlZW4pOyB9XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMTApIC5wcm9ncmVzcy1iYXJ7IGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgbGlnaHRncmVlbik7IH0gIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBlYWNoICRjb2xvciBpbiAkY29sb3JzIHtcclxuICAgIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCAkY29sb3IpXHJcbiAgICB9ICAgICAgICAgICAgICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/list-skills/list-skills.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/list-skills/list-skills.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSkillsComponent", function() { return ListSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListSkillsComponent = /** @class */ (function () {
    function ListSkillsComponent() {
    }
    ListSkillsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListSkillsComponent.prototype, "skills", void 0);
    ListSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-skills',
            template: __webpack_require__(/*! ./list-skills.component.html */ "./src/app/components/list-skills/list-skills.component.html"),
            styles: [__webpack_require__(/*! ./list-skills.component.scss */ "./src/app/components/list-skills/list-skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListSkillsComponent);
    return ListSkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/timeline/timeline.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-timeline4\">\n\t<ng-container *ngFor=\"let item of timeline\">\n\t\t<div *ngIf=\"item.active\" class=\"timeline\">\n\t\t\t<a href=\"#\" class=\"timeline-content\">\n\t\t\t\t<span class=\"year\">{{parseDate(item.date)}}</span>\n\t\t\t\t<div class=\"inner-content\">\n\t\t\t\t\t<h3 class=\"title\">{{item.title}}</h3>\n\t\t\t\t\t<h4 class=\"subtitle\" *ngIf=\"item.subtitle\">{{item.subtitle}}</h4>\n\t\t\t\t\t<p class=\"description\">{{item.description}}</p>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</ng-container>\n</div>"

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.main-timeline {\n  position: relative; }\n.main-timeline:before {\n    content: \"\";\n    width: 5px;\n    height: 100%;\n    border-radius: 20px;\n    margin: 0 auto;\n    background: #242922;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0; }\n.main-timeline .timeline {\n    display: inline-block;\n    margin-bottom: 50px;\n    position: relative; }\n.main-timeline .timeline:before {\n      content: \"\";\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      border: 4px solid #fff;\n      background: #ec496e;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      z-index: 1;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n.main-timeline .timeline-icon {\n    display: inline-block;\n    width: 130px;\n    height: 130px;\n    border-radius: 50%;\n    border: 3px solid #ec496e;\n    padding: 13px;\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 30%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n.main-timeline .timeline-icon i {\n      display: block;\n      border-radius: 50%;\n      background: #ec496e;\n      font-size: 64px;\n      color: #fff;\n      line-height: 100px;\n      z-index: 1;\n      position: relative; }\n.main-timeline .timeline-icon:after, .main-timeline .timeline-icon:before {\n      content: \"\";\n      width: 100px;\n      height: 4px;\n      background: #ec496e;\n      position: absolute;\n      top: 50%;\n      right: -100px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n.main-timeline .timeline-icon:after {\n      width: 70px;\n      height: 50px;\n      background: #fff;\n      top: 89px;\n      right: -30px; }\n.main-timeline .timeline-content {\n    width: 50%;\n    padding: 0 50px;\n    margin: 52px 0 0;\n    float: right;\n    position: relative; }\n.main-timeline .timeline-content:before {\n      content: \"\";\n      width: 70%;\n      height: 100%;\n      border: 3px solid #ec496e;\n      border-top: none;\n      border-right: none;\n      position: absolute;\n      bottom: -13px;\n      left: 35px; }\n.main-timeline .timeline-content:after {\n      content: \"\";\n      width: 37px;\n      height: 3px;\n      background: #ec496e;\n      position: absolute;\n      top: 13px;\n      left: 0; }\n.main-timeline .title {\n    font-size: 20px;\n    font-weight: 600;\n    color: #ec496e;\n    text-transform: uppercase;\n    margin: 0 0 5px; }\n.main-timeline .description {\n    display: inline-block;\n    font-size: 16px;\n    color: #404040;\n    line-height: 20px;\n    letter-spacing: 1px;\n    margin: 0; }\n.main-timeline .timeline:nth-child(even) .timeline-icon {\n    left: auto;\n    right: 30%; }\n.main-timeline .timeline:nth-child(even) .timeline-icon:before {\n      right: auto;\n      left: -100px; }\n.main-timeline .timeline:nth-child(even) .timeline-icon:after {\n      right: auto;\n      left: -30px; }\n.main-timeline .timeline:nth-child(even) .timeline-content {\n    float: left; }\n.main-timeline .timeline:nth-child(even) .timeline-content:before {\n      left: auto;\n      right: 35px;\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg); }\n.main-timeline .timeline:nth-child(even) .timeline-content:after {\n      left: auto;\n      right: 0; }\n.main-timeline .timeline:nth-child(2n) .timeline-content:after {\n    background: #f9850f; }\n.main-timeline .timeline:nth-child(2n) .timeline-icon i, .main-timeline .timeline:nth-child(2n) .timeline-icon:before {\n    background: #f9850f; }\n.main-timeline .timeline:nth-child(2n):before {\n    background: #f9850f; }\n.main-timeline .timeline:nth-child(2n) .timeline-icon {\n    border-color: #f9850f; }\n.main-timeline .timeline:nth-child(2n) .title {\n    color: #f9850f; }\n.main-timeline .timeline:nth-child(2n) .timeline-content:before {\n    border-left-color: #f9850f;\n    border-bottom-color: #f9850f; }\n.main-timeline .timeline:nth-child(3n) .timeline-content:after {\n    background: #8fb800; }\n.main-timeline .timeline:nth-child(3n) .timeline-icon i, .main-timeline .timeline:nth-child(3n) .timeline-icon:before {\n    background: #8fb800; }\n.main-timeline .timeline:nth-child(3n):before {\n    background: #8fb800; }\n.main-timeline .timeline:nth-child(3n) .timeline-icon {\n    border-color: #8fb800; }\n.main-timeline .timeline:nth-child(3n) .title {\n    color: #8fb800; }\n.main-timeline .timeline:nth-child(3n) .timeline-content:before {\n    border-left-color: #8fb800;\n    border-bottom-color: #8fb800; }\n.main-timeline .timeline:nth-child(4n) .timeline-content:after {\n    background: #2fcea5; }\n.main-timeline .timeline:nth-child(4n) .timeline-icon i, .main-timeline .timeline:nth-child(4n) .timeline-icon:before {\n    background: #2fcea5; }\n.main-timeline .timeline:nth-child(4n):before {\n    background: #2fcea5; }\n.main-timeline .timeline:nth-child(4n) .timeline-icon {\n    border-color: #2fcea5; }\n.main-timeline .timeline:nth-child(4n) .title {\n    color: #2fcea5; }\n.main-timeline .timeline:nth-child(4n) .timeline-content:before {\n    border-left-color: #2fcea5;\n    border-bottom-color: #2fcea5; }\n@media only screen and (max-width: 1200px) {\n  .main-timeline .timeline-icon:before {\n    width: 50px;\n    right: -50px; }\n  .main-timeline .timeline:nth-child(even) .timeline-icon:before {\n    right: auto;\n    left: -50px; }\n  .main-timeline .timeline-content {\n    margin-top: 75px; } }\n@media only screen and (max-width: 990px) {\n  .main-timeline .timeline {\n    margin: 0 0 10px; }\n  .main-timeline .timeline-icon {\n    left: 25%; }\n  .main-timeline .timeline:nth-child(even) .timeline-icon {\n    right: 25%; }\n  .main-timeline .timeline-content {\n    margin-top: 115px; } }\n@media only screen and (max-width: 767px) {\n  .main-timeline {\n    padding-top: 50px; }\n    .main-timeline:before {\n      left: 80px;\n      right: 0;\n      margin: 0; }\n    .main-timeline .timeline {\n      margin-bottom: 70px; }\n      .main-timeline .timeline:before {\n        top: 0;\n        left: 83px;\n        right: 0;\n        margin: 0; }\n    .main-timeline .timeline-icon {\n      width: 60px;\n      height: 60px;\n      line-height: 40px;\n      padding: 5px;\n      top: 0;\n      left: 0; }\n    .main-timeline .timeline:nth-child(even) .timeline-icon {\n      left: 0;\n      right: auto; }\n    .main-timeline .timeline-icon:before, .main-timeline .timeline:nth-child(even) .timeline-icon:before {\n      width: 25px;\n      left: auto;\n      right: -25px; }\n    .main-timeline .timeline-icon:after, .main-timeline .timeline:nth-child(even) .timeline-icon:after {\n      width: 25px;\n      height: 30px;\n      top: 44px;\n      left: auto;\n      right: -5px; }\n    .main-timeline .timeline-icon i {\n      font-size: 30px;\n      line-height: 45px; }\n    .main-timeline .timeline-content {\n      width: 100%;\n      margin-top: -15px;\n      padding-left: 130px;\n      padding-right: 5px; }\n    .main-timeline .timeline:nth-child(even) .timeline-content {\n      width: 100%;\n      margin-top: -15px;\n      padding-left: 130px;\n      padding-right: 5px;\n      float: right; }\n    .main-timeline .timeline-content:before {\n      width: 50%;\n      left: 120px; }\n    .main-timeline .timeline:nth-child(even) .timeline-content:before {\n      width: 50%;\n      left: 120px;\n      right: auto;\n      -webkit-transform: rotateY(0);\n              transform: rotateY(0); }\n    .main-timeline .timeline-content:after, .main-timeline .timeline:nth-child(even) .timeline-content:after {\n      left: 85px; } }\n@media only screen and (max-width: 479px) {\n  .main-timeline .timeline-content, .main-timeline .timeline:nth-child(2n) .timeline-content {\n    padding-left: 110px; }\n  .main-timeline .timeline-content:before, .main-timeline .timeline:nth-child(2n) .timeline-content:before {\n    left: 99px; }\n  .main-timeline .timeline-content:after, .main-timeline .timeline:nth-child(2n) .timeline-content:after {\n    left: 65px; } }\n/******************* Timeline Demo - 4 *****************/\n.main-timeline4 {\n  overflow: hidden;\n  position: relative; }\n.main-timeline4:before {\n    content: \"\";\n    width: 5px;\n    height: 84%;\n    background: #333;\n    position: absolute;\n    top: 70px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.main-timeline4 .timeline-content:before {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    content: \"\"; }\n.main-timeline4 .timeline {\n    width: 50%;\n    padding-left: 100px;\n    float: right;\n    position: relative; }\n.main-timeline4 .timeline:before {\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: \"\";\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      background: #fff;\n      border: 5px solid #333;\n      position: absolute;\n      left: -10px; }\n.main-timeline4 .timeline-content {\n    display: block;\n    padding-left: 150px;\n    position: relative; }\n.main-timeline4 .timeline-content:before {\n      width: 90px;\n      height: 10px;\n      border-top: 7px dotted #333;\n      position: absolute;\n      left: -92px; }\n.main-timeline4 .year {\n    display: inline-block;\n    width: 120px;\n    height: 120px;\n    line-height: 100px;\n    border-radius: 50%;\n    border: 10px solid #f54957;\n    font-size: 22px;\n    color: #f54957;\n    text-align: center;\n    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    font-weight: bold; }\n.main-timeline4 .year:before {\n      content: \"\";\n      border-left: 20px solid #f54957;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      position: absolute;\n      bottom: -13px;\n      right: 0;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n.main-timeline4 .inner-content {\n    padding: 20px 0; }\n.main-timeline4 .title {\n    font-size: 24px;\n    font-weight: 600;\n    color: #f54957;\n    text-transform: uppercase;\n    margin: 0 0 5px; }\n.main-timeline4 .subtitle {\n    font-size: 16px;\n    font-weight: 500;\n    color: #2c3038;\n    text-transform: uppercase;\n    margin: 0 0 5px; }\n.main-timeline4 .description {\n    font-size: 16px;\n    color: #2c3038;\n    margin: 0 0 5px; }\n@media only screen and (min-width: 768px) {\n    .main-timeline4 .timeline:nth-child(even) .title, .main-timeline4 .timeline:nth-child(even) .subtitle, .main-timeline4 .timeline:nth-child(even) .description {\n      text-align: right; } }\n.main-timeline4 .timeline:nth-child(2n) {\n    padding: 0 100px 0 0; }\n.main-timeline4 .timeline:nth-child(2n) .timeline-content:before, .main-timeline4 .timeline:nth-child(2n) .year, .main-timeline4 .timeline:nth-child(2n):before {\n      left: auto;\n      right: -10px; }\n.main-timeline4 .timeline:nth-child(2n) .timeline-content {\n      padding: 0 150px 0 0; }\n.main-timeline4 .timeline:nth-child(2n) .timeline-content:before {\n        right: -92px; }\n.main-timeline4 .timeline:nth-child(2n) .year {\n      right: 0; }\n.main-timeline4 .timeline:nth-child(2n) .year:before {\n        right: auto;\n        left: 0;\n        border-left: none;\n        border-right: 20px solid #f54957;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n.main-timeline4 .timeline:nth-child(2) {\n    margin-top: 110px; }\n.main-timeline4 .timeline:nth-child(odd) {\n    margin: -110px 0 0; }\n.main-timeline4 .timeline:nth-child(even) {\n    margin-bottom: 80px; }\n.main-timeline4 .timeline:first-child, .main-timeline4 .timeline:last-child:nth-child(even) {\n    margin: 0; }\n.main-timeline4 .timeline:nth-child(1n) .year {\n    border-color: #f5bf00;\n    color: #f5bf00; }\n.main-timeline4 .timeline:nth-child(1) .year:before {\n    border-left-color: #f5bf00; }\n.main-timeline4 .timeline:nth-child(1n) .title {\n    color: #f5bf00; }\n.main-timeline4 .timeline:nth-child(2n) .year {\n    border-color: #f7951c;\n    color: #f7951c; }\n.main-timeline4 .timeline:nth-child(2) .year:before {\n    border-right-color: #f7951c; }\n.main-timeline4 .timeline:nth-child(2n) .title {\n    color: #f7951c; }\n.main-timeline4 .timeline:nth-child(3n) .year {\n    border-color: #f36422;\n    color: #f36422; }\n.main-timeline4 .timeline:nth-child(3) .year:before {\n    border-left-color: #f36422; }\n.main-timeline4 .timeline:nth-child(3n) .title {\n    color: #f36422; }\n.main-timeline4 .timeline:nth-child(4n) .year {\n    border-color: #ed1c24;\n    color: #ed1c24; }\n.main-timeline4 .timeline:nth-child(4) .year:before {\n    border-right-color: #ed1c24; }\n.main-timeline4 .timeline:nth-child(4n) .title {\n    color: #ed1c24; }\n.main-timeline4 .timeline:nth-child(5n) .year {\n    border-color: #e10236;\n    color: #e10236; }\n.main-timeline4 .timeline:nth-child(5) .year:before {\n    border-left-color: #e10236; }\n.main-timeline4 .timeline:nth-child(5n) .title {\n    color: #e10236; }\n.main-timeline4 .timeline:nth-child(6n) .year {\n    border-color: #b90062;\n    color: #b90062; }\n.main-timeline4 .timeline:nth-child(6) .year:before {\n    border-right-color: #b90062; }\n.main-timeline4 .timeline:nth-child(6n) .title {\n    color: #b90062; }\n.main-timeline4 .timeline:nth-child(7n) .year {\n    border-color: #876363;\n    color: #876363; }\n.main-timeline4 .timeline:nth-child(7) .year:before {\n    border-left-color: #876363; }\n.main-timeline4 .timeline:nth-child(7n) .title {\n    color: #876363; }\n.main-timeline4 .timeline:nth-child(8n) .year {\n    border-color: #3c70b5;\n    color: #3c70b5; }\n.main-timeline4 .timeline:nth-child(8) .year:before {\n    border-right-color: #3c70b5; }\n.main-timeline4 .timeline:nth-child(8n) .title {\n    color: #3c70b5; }\n.main-timeline4 .timeline:nth-child(9n) .year {\n    border-color: #04ad81;\n    color: #04ad81; }\n.main-timeline4 .timeline:nth-child(9) .year:before {\n    border-left-color: #04ad81; }\n.main-timeline4 .timeline:nth-child(9n) .title {\n    color: #04ad81; }\n.main-timeline4 .timeline:nth-child(10n) .year {\n    border-color: #87c15e;\n    color: #87c15e; }\n.main-timeline4 .timeline:nth-child(10) .year:before {\n    border-right-color: #87c15e; }\n.main-timeline4 .timeline:nth-child(10n) .title {\n    color: #87c15e; }\n@media only screen and (max-width: 1200px) {\n  .main-timeline4 .year {\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); } }\n@media only screen and (max-width: 990px) {\n  .main-timeline4 .timeline {\n    padding-left: 75px; }\n    .main-timeline4 .timeline:nth-child(2n) {\n      padding: 0 75px 0 0; }\n  .main-timeline4 .timeline-content {\n    padding-left: 130px; }\n  .main-timeline4 .timeline:nth-child(2n) .timeline-content {\n    padding: 0 130px 0 0; }\n  .main-timeline4 .timeline-content:before {\n    width: 68px;\n    left: -68px; }\n  .main-timeline4 .timeline:nth-child(2n) .timeline-content:before {\n    right: -68px; } }\n@media only screen and (max-width: 767px) {\n  .main-timeline4 {\n    overflow: visible; }\n    .main-timeline4:before {\n      height: 100%;\n      top: 0;\n      left: 0;\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    .main-timeline4 .timeline {\n      width: 100%;\n      float: none;\n      text-align: center;\n      padding: 0;\n      margin: 0 0 10px; }\n      .main-timeline4 .timeline:before, .main-timeline4 .timeline:nth-child(2n):before {\n        top: 60px;\n        left: -9px;\n        -webkit-transform: translateX(0);\n                transform: translateX(0); }\n      .main-timeline4 .timeline:nth-child(even), .main-timeline4 .timeline:nth-child(odd) {\n        width: 100%;\n        float: none;\n        text-align: center;\n        padding: 0;\n        margin: 0 0 10px; }\n    .main-timeline4 .timeline-content, .main-timeline4 .timeline:nth-child(2n) .timeline-content {\n      padding: 0; }\n    .main-timeline4 .timeline-content:before {\n      display: none; }\n    .main-timeline4 .timeline:nth-child(2n) .timeline-content:before {\n      display: none; }\n    .main-timeline4 .timeline:nth-child(2n) .year {\n      position: relative;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    .main-timeline4 .year {\n      position: relative;\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n    .main-timeline4 .timeline:nth-child(2n) .year:before, .main-timeline4 .year:before {\n      border: none;\n      border-right: 20px solid #f54957;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      top: 50%;\n      left: -23px;\n      bottom: auto;\n      right: auto;\n      -webkit-transform: rotate(0);\n              transform: rotate(0); }\n    .main-timeline4 .timeline:nth-child(2n) .year:before {\n      border-right-color: #1ebad0; }\n    .main-timeline4 .timeline:nth-child(3n) .year:before {\n      border-right-color: #7cba01; }\n    .main-timeline4 .timeline:nth-child(4n) .year:before {\n      border-right-color: #f8781f; }\n    .main-timeline4 .inner-content {\n      padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9wcm9qZXRvcy1saW51eC92aXRvcnBlcmVpcmEvdml0b3JnamEtZ2hwYWdlL3NyYy9zdHlsZXMuc2NzcyIsIi9tbnQvYy9wcm9qZXRvcy1saW51eC92aXRvcnBlcmVpcmEvdml0b3JnamEtZ2hwYWdlL3NyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ3VCQTtFQUNJLGtCQUFrQixFQUFBO0FBRHRCO0lBR00sV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUSxFQUFBO0FBWmQ7SUFlTSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0FBakJ4QjtNQW1CUSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxVQUFVO01BQ1Ysd0NBQWdDO2NBQWhDLGdDQUFnQyxFQUFBO0FBN0J4QztJQWlDTSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0FBM0NqQztNQTZDUSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixVQUFVO01BQ1Ysa0JBQWtCLEVBQUE7QUFwRDFCO01BdURRLFdBQVc7TUFDWCxZQUFZO01BQ1osV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLGFBQWE7TUFDYixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUE7QUE5RG5DO01BaUVRLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxZQUFZLEVBQUE7QUFyRXBCO0lBeUVNLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtBQTdFeEI7TUErRVEsV0FBVztNQUNYLFVBQVU7TUFDVixZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixVQUFVLEVBQUE7QUF2RmxCO01BMEZRLFdBQVc7TUFDWCxXQUFXO01BQ1gsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULE9BQU8sRUFBQTtBQWhHZjtJQW9HTSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0FBeEdyQjtJQTJHTSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVMsRUFBQTtBQWhIZjtJQXFIVSxVQUFVO0lBQ1YsVUFBVSxFQUFBO0FBdEhwQjtNQXdIWSxXQUFXO01BQ1gsWUFBWSxFQUFBO0FBekh4QjtNQTRIWSxXQUFXO01BQ1gsV0FBVyxFQUFBO0FBN0h2QjtJQWlJVSxXQUFXLEVBQUE7QUFqSXJCO01BbUlZLFVBQVU7TUFDVixXQUFXO01BQ1gsa0NBQTBCO2NBQTFCLDBCQUEwQixFQUFBO0FBckl0QztNQXdJWSxVQUFVO01BQ1YsUUFBUSxFQUFBO0FBeklwQjtJQStJVSxtQkFBbUIsRUFBQTtBQS9JN0I7SUFtSlksbUJBQW1CLEVBQUE7QUFuSi9CO0lBdUpVLG1CQUFtQixFQUFBO0FBdko3QjtJQTBKVSxxQkFBcUIsRUFBQTtBQTFKL0I7SUE2SlUsY0FBYyxFQUFBO0FBN0p4QjtJQWdLVSwwQkFBMEI7SUFDMUIsNEJBQTRCLEVBQUE7QUFqS3RDO0lBc0tVLG1CQUFtQixFQUFBO0FBdEs3QjtJQTBLWSxtQkFBbUIsRUFBQTtBQTFLL0I7SUE4S1UsbUJBQW1CLEVBQUE7QUE5SzdCO0lBaUxVLHFCQUFxQixFQUFBO0FBakwvQjtJQW9MVSxjQUFjLEVBQUE7QUFwTHhCO0lBdUxVLDBCQUEwQjtJQUMxQiw0QkFBNEIsRUFBQTtBQXhMdEM7SUE2TFUsbUJBQW1CLEVBQUE7QUE3TDdCO0lBaU1ZLG1CQUFtQixFQUFBO0FBak0vQjtJQXFNVSxtQkFBbUIsRUFBQTtBQXJNN0I7SUF3TVUscUJBQXFCLEVBQUE7QUF4TS9CO0lBMk1VLGNBQWMsRUFBQTtBQTNNeEI7SUE4TVUsMEJBQTBCO0lBQzFCLDRCQUE0QixFQUFBO0FBTXBDO0VBQ0U7SUFFSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBSGhCO0lBTUksV0FBVztJQUNYLFdBQVcsRUFBQTtFQVBmO0lBVUksZ0JBQWdCLEVBQUEsRUFDakI7QUFJTDtFQUNFO0lBRUksZ0JBQWdCLEVBQUE7RUFGcEI7SUFLSSxTQUFTLEVBQUE7RUFMYjtJQVFJLFVBQVUsRUFBQTtFQVJkO0lBV0ksaUJBQWlCLEVBQUEsRUFDbEI7QUFJTDtFQUNFO0lBQ0UsaUJBQWlCLEVBQUE7SUFEbkI7TUFHSSxVQUFVO01BQ1YsUUFBUTtNQUNSLFNBQVMsRUFBQTtJQUxiO01BUUksbUJBQW1CLEVBQUE7TUFSdkI7UUFVTSxNQUFNO1FBQ04sVUFBVTtRQUNWLFFBQVE7UUFDUixTQUFTLEVBQUE7SUFiZjtNQWlCSSxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osTUFBTTtNQUNOLE9BQU8sRUFBQTtJQXRCWDtNQXlCSSxPQUFPO01BQ1AsV0FBVyxFQUFBO0lBMUJmO01BNkJJLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWSxFQUFBO0lBL0JoQjtNQWtDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLFNBQVM7TUFDVCxVQUFVO01BQ1YsV0FBVyxFQUFBO0lBdENmO01BeUNJLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtJQTFDckI7TUE2Q0ksV0FBVztNQUNYLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCLEVBQUE7SUFoRHRCO01BbURJLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7SUF2RGhCO01BMERJLFVBQVU7TUFDVixXQUFXLEVBQUE7SUEzRGY7TUE4REksVUFBVTtNQUNWLFdBQVc7TUFDWCxXQUFXO01BQ1gsNkJBQXFCO2NBQXJCLHFCQUFxQixFQUFBO0lBakV6QjtNQW9FSSxVQUFVLEVBQUEsRUFDWDtBQUlMO0VBQ0U7SUFFSSxtQkFBbUIsRUFBQTtFQUZ2QjtJQUtJLFVBQVUsRUFBQTtFQUxkO0lBUUksVUFBVSxFQUFBLEVBQ1g7QUFJTCx3REFBQTtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBRnBCO0lBSUksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtBQVgvQjtJQWNJLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtBQWhCZjtJQStCSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtBQWxDdEI7TUFvQk0sUUFBUTtNQUNSLG1DQUEyQjtjQUEzQiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtBQTdCakI7SUFxQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtBQXZDdEI7TUF5Q00sV0FBVztNQUNYLFlBQVk7TUFDWiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtBQTdDakI7SUFpREkscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGlCQUFpQixFQUFBO0FBOURyQjtNQWdFTSxXQUFXO01BQ1gsK0JBQStCO01BQy9CLGtDQUFrQztNQUNsQyxxQ0FBcUM7TUFDckMsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixRQUFRO01BQ1IsZ0NBQXdCO2NBQXhCLHdCQUF3QixFQUFBO0FBdkU5QjtJQTJFSSxlQUFlLEVBQUE7QUEzRW5CO0lBOEVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlLEVBQUE7QUFsRm5CO0lBcUZJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTtBQXpGbkI7SUE0RkksZUFBZTtJQUNmLGNBQW9CO0lBQ3BCLGVBQWUsRUFBQTtBQUdmO0lBakdKO01Bb0dVLGlCQUFpQixFQUFBLEVBQ2xCO0FBckdUO0lBeUdNLG9CQUFvQixFQUFBO0FBekcxQjtNQTJHUSxVQUFVO01BQ1YsWUFBWSxFQUFBO0FBNUdwQjtNQStHUSxvQkFBb0IsRUFBQTtBQS9HNUI7UUFpSFUsWUFBWSxFQUFBO0FBakh0QjtNQXFIUSxRQUFRLEVBQUE7QUFySGhCO1FBdUhVLFdBQVc7UUFDWCxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdDQUFnQztRQUNoQyxpQ0FBeUI7Z0JBQXpCLHlCQUF5QixFQUFBO0FBM0huQztJQWdJTSxpQkFBaUIsRUFBQTtBQWhJdkI7SUFtSU0sa0JBQWtCLEVBQUE7QUFuSXhCO0lBc0lNLG1CQUFtQixFQUFBO0FBdEl6QjtJQXlJTSxTQUFTLEVBQUE7QUF2ZWhCO0lBQ0MscUJETHdCO0lDTWxCLGNETmtCLEVBQUE7QUNRekI7SUFDTywwQkRUa0IsRUFBQTtBQ1d6QjtJQUNPLGNEWmtCLEVBQUE7QUNJekI7SUFDQyxxQkRKeUI7SUNLbkIsY0RMbUIsRUFBQTtBQ08xQjtJQUNPLDJCRFJtQixFQUFBO0FDVTFCO0lBQ08sY0RYbUIsRUFBQTtBQ0cxQjtJQUNDLHFCREg2QjtJQ0l2QixjREp1QixFQUFBO0FDTTlCO0lBQ08sMEJEUHVCLEVBQUE7QUNTOUI7SUFDTyxjRFZ1QixFQUFBO0FDRTlCO0lBQ0MscUJERnFCO0lDR2YsY0RIZSxFQUFBO0FDS3RCO0lBQ08sMkJETmUsRUFBQTtBQ1F0QjtJQUNPLGNEVGUsRUFBQTtBQ0N0QjtJQUNDLHFCRER3QjtJQ0VsQixjREZrQixFQUFBO0FDSXpCO0lBQ08sMEJETGtCLEVBQUE7QUNPekI7SUFDTyxjRFJrQixFQUFBO0FDQXpCO0lBQ0MscUJEQXNCO0lDQ2hCLGNERGdCLEVBQUE7QUNHdkI7SUFDTywyQkRKZ0IsRUFBQTtBQ012QjtJQUNPLGNEUGdCLEVBQUE7QUNEdkI7SUFDQyxxQkRDd0I7SUNBbEIsY0RBa0IsRUFBQTtBQ0V6QjtJQUNPLDBCREhrQixFQUFBO0FDS3pCO0lBQ08sY0ROa0IsRUFBQTtBQ0Z6QjtJQUNDLHFCREV1QjtJQ0RqQixjRENpQixFQUFBO0FDQ3hCO0lBQ08sMkJERmlCLEVBQUE7QUNJeEI7SUFDTyxjRExpQixFQUFBO0FDSHhCO0lBQ0MscUJER3VCO0lDRmpCLGNERWlCLEVBQUE7QUNBeEI7SUFDTywwQkREaUIsRUFBQTtBQ0d4QjtJQUNPLGNESmlCLEVBQUE7QUNKeEI7SUFDQyxxQkRJNkI7SUNIdkIsY0RHdUIsRUFBQTtBQ0Q5QjtJQUNPLDJCREF1QixFQUFBO0FDRTlCO0lBQ08sY0RIdUIsRUFBQTtBQ3VpQjdCO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQzVCO0FBR0g7RUFDRTtJQUVJLGtCQUFrQixFQUFBO0lBRnRCO01BSU0sbUJBQW1CLEVBQUE7RUFKekI7SUFRSSxtQkFBbUIsRUFBQTtFQVJ2QjtJQVdJLG9CQUFvQixFQUFBO0VBWHhCO0lBY0ksV0FBVztJQUNYLFdBQVcsRUFBQTtFQWZmO0lBa0JJLFlBQVksRUFBQSxFQUNiO0FBSUw7RUFDRTtJQUNFLGlCQUFpQixFQUFBO0lBRG5CO01BR0ksWUFBWTtNQUNaLE1BQU07TUFDTixPQUFPO01BQ1AsZ0NBQXdCO2NBQXhCLHdCQUF3QixFQUFBO0lBTjVCO01BY0ksV0FBVztNQUNYLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGdCQUFnQixFQUFBO01BbEJwQjtRQVVNLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0NBQXdCO2dCQUF4Qix3QkFBd0IsRUFBQTtNQVo5QjtRQW9CTSxXQUFXO1FBQ1gsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZ0JBQWdCLEVBQUE7SUF4QnRCO01BNEJJLFVBQVUsRUFBQTtJQTVCZDtNQStCSSxhQUFhLEVBQUE7SUEvQmpCO01BbUNNLGFBQWEsRUFBQTtJQW5DbkI7TUFzQ00sa0JBQWtCO01BQ2xCLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtJQXZDOUI7TUEyQ0ksa0JBQWtCO01BQ2xCLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtJQTVDNUI7TUErQ0ksWUFBWTtNQUNaLGdDQUFnQztNQUNoQyxrQ0FBa0M7TUFDbEMscUNBQXFDO01BQ3JDLFFBQVE7TUFDUixXQUFXO01BQ1gsWUFBWTtNQUNaLFdBQVc7TUFDWCw0QkFBb0I7Y0FBcEIsb0JBQW9CLEVBQUE7SUF2RHhCO01BMkRNLDJCQUEyQixFQUFBO0lBM0RqQztNQThETSwyQkFBMkIsRUFBQTtJQTlEakM7TUFpRU0sMkJBQTJCLEVBQUE7SUFqRWpDO01BcUVJLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuXG4kY29sb3JzOiAoXG4gICAgYmxhY2s6IHJnYig0NCw0OCw1NiksXG4gICAgeWVsbG93OiByZ2IoMjQ1LDE5MSwwKSxcbiAgICBvcmFuZ2U6IHJnYigyNDcsMTQ5LDI4KSxcbiAgICBkYXJrb3JhbmdlOiByZ2IoMjQzLDEwMCwzNCksXG4gICAgcmVkOiByZ2IoMjM3LDI4LDM2KSxcbiAgICBkYXJrcmVkOiByZ2IoMjI1LDIsNTQpLFxuICAgIGdyYXBlOiByZ2IoMTg1LDAsOTgpLFxuICAgIHB1cnBsZTogcmdiKDEzNSw5OSw5OSksXG4gICAgYmx1ZTogcmdiKDYwLDExMiwxODEpLFxuICAgIGdyZWVuOiByZ2IoNCwxNzMsMTI5KSxcbiAgICBsaWdodGdyZWVuOiByZ2IoMTM1LDE5Myw5NCksXG4pO1xuXG4kdmFyaWF0aW9uczogKFxuXHRsaWdodDogKFxuXHRcdGZ1bmN0aW9uOiBsaWdodGVuLFxuXHRcdHBhcmFtZXRlcnM6IDE1JVxuXHQpLFxuXHRkYXJrOiAoXG5cdFx0ZnVuY3Rpb246IGRhcmtlbixcblx0XHRwYXJhbWV0ZXJzOiAxMCVcblx0KSxcblx0ZmFkZTogKFxuXHRcdGZ1bmN0aW9uOiByZ2JhLFxuXHRcdHBhcmFtZXRlcnM6IC43XG5cdCksXG5cdGdyYXk6IChcblx0XHRmdW5jdGlvbjogZ3JheXNjYWxlXG5cdCksXG5cdHNoYWRlOiAoXG5cdFx0ZnVuY3Rpb246IG1peCxcblx0XHRwYXJhbWV0ZXJzOiB3aGl0ZSA4MCVcblx0KVxuKTtcblxuQGZ1bmN0aW9uIGNvbG9yLXZhcmlhdGlvbigkY29sb3IsICR2YXJpYXRpb246IGZhbHNlKSB7XG5cbiAgICBAaWYgbWFwLWhhcy1rZXkoJGNvbG9ycywgJGNvbG9yKSB7XG4gICAgXHQkY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yKTtcbiAgICB9IEBlbHNlIHtcbiAgICBcdEBpZiB0eXBlLW9mKCRjb2xvcikgIT0gY29sb3Ige1xuICAgICAgICBcdEBlcnJvciBcIkludmFsaWQgY29sb3IgbmFtZTogYCN7JGNvbG9yfWAuXCI7XG4gICAgICBcdH1cbiAgICB9XG4gIFxuICAgIEBpZiAkdmFyaWF0aW9uIHtcblx0XHRAaWYgbm90IG1hcC1oYXMta2V5KCR2YXJpYXRpb25zLCAkdmFyaWF0aW9uKSB7XG5cdFx0XHRAZXJyb3IgXCJJbnZhbGlkICR2YXJpYXRpb246IGAjeyR2YXJpYXRpb259YC5cIjtcblx0XHR9IEBlbHNlIHtcblx0XHRcdCR0aGlzLXZhcmlhdGlvbjogbWFwLWdldCgkdmFyaWF0aW9ucywgJHZhcmlhdGlvbik7XG5cdFx0XHQkYXJnczogam9pbihtYXAtZ2V0KCR0aGlzLXZhcmlhdGlvbiwgZnVuY3Rpb24pLCAkY29sb3IpO1xuXHRcdFx0QGlmIG1hcC1nZXQoJHRoaXMtdmFyaWF0aW9uLCBwYXJhbWV0ZXJzKSB7XG5cdFx0XHRcdCRhcmdzOiBqb2luKCRhcmdzLCBtYXAtZ2V0KCR0aGlzLXZhcmlhdGlvbiwgcGFyYW1ldGVycykpO1xuXHRcdFx0fVxuXHRcdFx0QHJldHVybiBjYWxsKCRhcmdzLi4uKTtcbiAgICAgIFx0fVxuICAgIH1cbiAgICBAcmV0dXJuICRjb2xvcjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbkBtaXhpbiB0aW1lbGluZS1jb2xvci1taXhpbigkbnVtYmVyLCAkY29sb3IpIHtcclxuXHQkZGlyZWN0aW9uOiBcImxlZnRcIjtcclxuXHRAaWYgJG51bWJlciAlIDIgPT0gMCB7XHJcblx0XHQkZGlyZWN0aW9uOiBcInJpZ2h0XCI7XHJcblx0fVxyXG5cdEBkZWJ1ZyAkZGlyZWN0aW9uO1xyXG5cdFxyXG5cdCY6bnRoLWNoaWxkKCN7JG51bWJlcn1uKSAueWVhciB7XHJcblx0XHRib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG5cdH1cclxuXHQmOm50aC1jaGlsZCgjeyRudW1iZXJ9KSAueWVhcjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci0jeyRkaXJlY3Rpb259LWNvbG9yOiAkY29sb3I7XHJcblx0fVxyXG5cdCY6bnRoLWNoaWxkKCN7JG51bWJlcn1uKSAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3I7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi5tYWluLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogIzI0MjkyMjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWM0OTZlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWM0OTZlO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjNDk2ZTtcclxuICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWM0OTZlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICByaWdodDogLTEwMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0b3A6IDg5cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgbWFyZ2luOiA1MnB4IDAgMDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlYzQ5NmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTEzcHg7XHJcbiAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgfVxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYzQ5NmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTNweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjZWM0OTZlO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUge1xyXG4gICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgIHJpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmOTg1MGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgIGksICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ODUwZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5ODUwZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjk4NTBmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6ICNmOTg1MGY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2Y5ODUwZjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmOTg1MGY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzhmYjgwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgICAgaSwgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGZiODAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGZiODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM4ZmI4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzhmYjgwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjOGZiODAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzhmYjgwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoNG4pIHtcclxuICAgICAgICAudGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmZjZWE1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICBpLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmNlYTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZmNlYTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzJmY2VhNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmZjZWE1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZWxpbmUtY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyZmNlYTU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmZjZWE1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm1haW4tdGltZWxpbmUge1xyXG4gICAgICAudGltZWxpbmUtaWNvbjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtNTBweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pY29uOmJlZm9yZSB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLm1haW4tdGltZWxpbmUge1xyXG4gICAgICAudGltZWxpbmUge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWFpbi10aW1lbGluZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogODBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDgzcHg7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmUtaWNvbjpiZWZvcmUsIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWljb246YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmUtaWNvbjphZnRlciwgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaWNvbjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogNDRweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1pY29uIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsZWZ0OiAxMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBsZWZ0OiAxMjBweDtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIsIC50aW1lbGluZTpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDg1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gICAgLm1haW4tdGltZWxpbmUge1xyXG4gICAgICAudGltZWxpbmUtY29udGVudCwgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlLCAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDk5cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIsIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50OmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qKioqKioqKioqKioqKioqKioqIFRpbWVsaW5lIERlbW8gLSA0ICoqKioqKioqKioqKioqKioqL1xyXG4gIFxyXG4gIC5tYWluLXRpbWVsaW5lNCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDg0JTtcclxuICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDcwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogN3B4IGRvdHRlZCAjMzMzO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtOTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnllYXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjU0OTU3O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGNvbG9yOiAjZjU0OTU3O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjZjU0OTU3O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMTNweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lci1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogI2Y1NDk1NztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogcmdiKDQ0LDQ4LDU2KTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogcmdiKDQ0LDQ4LDU2KTtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgICAgLnRpdGxlLCAuc3VidGl0bGUsIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMDBweCAwIDA7XHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlLCAueWVhciwgJjpiZWZvcmUge1xyXG4gICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxNTBweCAwIDA7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtOTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnllYXIge1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkICNmNTQ5NTc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBtYXJnaW46IC0xMTBweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpmaXJzdC1jaGlsZCwgJjpsYXN0LWNoaWxkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDJuKSAueWVhciB7XHJcbiAgICAvLyAgICAgYm9yZGVyLWNvbG9yOiAjMWViYWQwO1xyXG4gICAgLy8gICAgIGNvbG9yOiAjMWViYWQwO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDIpIC55ZWFyOmJlZm9yZSB7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMWViYWQwO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDJuKSAudGl0bGUge1xyXG4gICAgLy8gICAgIGNvbG9yOiAjMWViYWQwO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDNuKSAueWVhciB7XHJcbiAgICAvLyAgICAgYm9yZGVyLWNvbG9yOiAjN2NiYTAxO1xyXG4gICAgLy8gICAgIGNvbG9yOiAjN2NiYTAxO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDMpIC55ZWFyOmJlZm9yZSB7XHJcbiAgICAvLyAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICM3Y2JhMDE7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoM24pIC50aXRsZSB7XHJcbiAgICAvLyAgICAgY29sb3I6ICM3Y2JhMDE7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNG4pIC55ZWFyIHtcclxuICAgIC8vICAgICBib3JkZXItY29sb3I6ICNmODc4MWY7XHJcbiAgICAvLyAgICAgY29sb3I6ICNmODc4MWY7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNCkgLnllYXI6YmVmb3JlIHtcclxuICAgIC8vICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmODc4MWY7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNG4pIC50aXRsZSB7XHJcbiAgICAvLyAgICAgY29sb3I6ICNmODc4MWY7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIC8vIFZUUlxyXG4gICAgLy8gICAmOm50aC1jaGlsZCg1bikgLnllYXIge1xyXG4gICAgLy8gICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xyXG4gICAgLy8gICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNSkgLnllYXI6YmVmb3JlIHtcclxuICAgIC8vICAgICBib3JkZXItbGVmdC1jb2xvcjogcHVycGxlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgICY6bnRoLWNoaWxkKDVuKSAudGl0bGUge1xyXG4gICAgLy8gICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNm4pIC55ZWFyIHtcclxuICAgIC8vICAgICBib3JkZXItY29sb3I6IGJyb3duO1xyXG4gICAgLy8gICAgIGNvbG9yOiBicm93bjtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICAmOm50aC1jaGlsZCg2KSAueWVhcjpiZWZvcmUge1xyXG4gICAgLy8gICAgIGJvcmRlci1yaWdodC1jb2xvcjogYnJvd247XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgJjpudGgtY2hpbGQoNm4pIC50aXRsZSB7XHJcbiAgICAvLyAgICAgY29sb3I6IGJyb3duO1xyXG5cdC8vICAgfVxyXG5cdFxyXG5cdCRpOjA7XHJcblx0ICBAZWFjaCAkdGVtYSwgJGNvbG9yIGluICRjb2xvcnMge1xyXG5cdFx0Ly8gJGk6IGluZGV4KCRjb2xvcnMsICR0ZW1hOiRjb2xvcik7XHJcblx0XHRAaWYgJGkgIT0gMCB7XHJcblx0XHRcdCRmb286ICR0ZW1hICRjb2xvcjtcclxuXHRcdFx0QGRlYnVnICRmb287XHJcblx0XHRcdEBpbmNsdWRlIHRpbWVsaW5lLWNvbG9yLW1peGluKCRpLCAkY29sb3IpO1xyXG5cdFx0fVxyXG5cdFx0JGk6ICRpKzE7XHJcblx0ICB9XHJcblx0ICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5tYWluLXRpbWVsaW5lNCAueWVhciB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIC5tYWluLXRpbWVsaW5lNCB7XHJcbiAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDc1cHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMzBweCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICBsZWZ0OiAtNjhweDtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgIHJpZ2h0OiAtNjhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubWFpbi10aW1lbGluZTQge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAmOmJlZm9yZSwgJjpudGgtY2hpbGQoMm4pOmJlZm9yZSB7XHJcbiAgICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAtOXB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pLCAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lLWNvbnRlbnQsIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC55ZWFyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnllYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICAgICAgLnRpbWVsaW5lOm50aC1jaGlsZCgybikgLnllYXI6YmVmb3JlLCAueWVhcjpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgI2Y1NDk1NztcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogLTIzcHg7XHJcbiAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMm4pIC55ZWFyOmJlZm9yZSB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICMxZWJhZDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDNuKSAueWVhcjpiZWZvcmUge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjN2NiYTAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm50aC1jaGlsZCg0bikgLnllYXI6YmVmb3JlIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2Y4NzgxZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVyLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipe/date-format.pipe */ "./src/app/pipe/date-format.pipe.ts");



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(datePipe) {
        this.datePipe = datePipe;
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent.prototype.parseDate = function (date) {
        return this.datePipe.transform(date, "MM/yyyy");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TimelineComponent.prototype, "timeline", void 0);
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/components/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pipe_date_format_pipe__WEBPACK_IMPORTED_MODULE_2__["DateFormatPipe"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/log/log.service */ "./src/app/services/log/log.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService, logger) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.logger = logger;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        this.logger.info("Usuario não logado tentando acessar a Aplicação", state.url, "not-permission");
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_log_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/skill.ts":
/*!*********************************!*\
  !*** ./src/app/models/skill.ts ***!
  \*********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/models/timeline.ts":
/*!************************************!*\
  !*** ./src/app/models/timeline.ts ***!
  \************************************/
/*! exports provided: Timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
var Timeline = /** @class */ (function () {
    function Timeline() {
    }
    return Timeline;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <fa name=\"cog\" animation=\"spin\"></fa> -->\n\n\n<section #backToTop class=\"header\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-end\">\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<ul class=\"nav flex-column\">\n\t\t\t\t\t<li class=\"nav-item bg-black\">\n\t\t\t\t\t\t<a class=\"nav-link\">\n\t\t\t\t\t\t\t<img src=\"/assets/img/thumb-vitor.jpg\" class=\"rounded-circle pr-1\" width=\"35px\">\n\t\t\t\t\t\t\t<span class=\"assinatura pl-2\">Vitor P.</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-yellow\">\n\t\t\t\t\t\t<a href=\"/\" class=\"nav-link py-3 font-weight-bold\"><span></span> Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-orange\">\n\t\t\t\t\t\t<a (click)=\"scroll(about)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Sobre</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-darkorange\">\n\t\t\t\t\t\t<a (click)=\"scroll(mySkills)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Habilidades</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-red\">\n\t\t\t\t\t\t<a (click)=\"scroll(expirience)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Experiencia</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-darkred\">\n\t\t\t\t\t\t<a (click)=\"scroll(education)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Educação</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-grape\">\n\t\t\t\t\t\t<a (click)=\"scroll(portfolio)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Portfolio</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-purple\">\n\t\t\t\t\t\t<a (click)=\"scroll(contact)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Contato</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"nav-item bg-blue\">\n\t\t\t\t\t\t<a (click)=\"scroll(curriculum)\" class=\"nav-link py-3 font-weight-bold\"><span></span> Curriculo</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item bg-green\">\n\t\t\t\t\t\t<a class=\"nav-link py-3 font-weight-bold\">\n\t\t\t\t\t\t\t<a href=\"https://facebook.com/vitorgja\" class=\"p-1 mr-3\">\n\t\t\t\t\t\t\t\t<fa name=\"facebook\"></fa>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"https://github.com/vitorgja\" class=\"p-1 mr-3\">\n\t\t\t\t\t\t\t\t<fa name=\"github-alt\"></fa>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"https://gitlab.com/vitorgja\" class=\"p-1 mr-3\">\n\t\t\t\t\t\t\t\t<fa name=\"gitlab\"></fa>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/vitorgja/\" class=\"p-1 mr-3\">\n\t\t\t\t\t\t\t\t<fa name=\"linkedin\"></fa>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li class=\"nav-item bg-lightgreen\"></li> -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section #about class=\"hi-iam-vitor py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"name h1 mb-0\">Vitor Pereira</h2>\n\t\t\t\t<h3 class=\" h4\"><sup>Analista Sênior</sup></h3>\n\t\t\t\t<p class=\"description mb-0\">\n\t\t\t\t\tAnalista de Sistemas sênior, graduado em Sistemas para Internet na instituição de ensino Faculdade de Tecnologia Rubens Lara(FATEC-RL), já participei de diversos projetos na área de tecnologia pelas consultorias em que tive a oportunidade de passar, atuando diretamente na frente de desenvolvimento, documentação e organização estrutural das empresas. \n\t\t\t\t</p>\n\t\t\t\t<p class=\"assinatura\">Vitor P.</p>\n\t\t\t\t<ul class=\"list-group list-group-flush mt-4\">\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Apelido:</strong> vitorgja</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Email:</strong> vitor_gja_@hotmail.com</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Telefone:</strong> +55 (13) 98862-4558</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Data de Nascimnto:</strong> 13 de Janeiro de 1992</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Endereço:</strong> Av: São João, Nº 728</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section #mySkills class=\"my-skills py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Minhas Habilidades</h2>\n\t\t\t\t<h3 class=\"h4\">Habilidades</h3>\n\t\t\t\t<p>Abaixo segue uma lista com as tecnologias que conheço ou tive a oportunidade de trabalhar.</p>\n\t\t\t\t\n\t\t\t\t<app-list-skills [skills]=\"skills\" class=\"mt-4\"></app-list-skills>\n\t\t\t\t\n\t\t\t</div><!-- .col-8 -->\n\t\t</div><!-- .row -->\n\t</div><!-- .container -->\n</section>\n\n<section #expirience class=\"expirience py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Minhas Experiências</h2>\n\t\t\t\t<h3 class=\"h4\">Experiências</h3>\n\t\t\t\t<p>Abaixo segue uma lista com as Empresas/Instituições que trabalhei ou fiz parte.</p>\n\t\t\t\t\n\t\t\t\t<app-list-experience [experience]=\"experience\" class=\"mt-4\"></app-list-experience>\n\t\t\t</div><!-- .col-8 -->\n\t\t</div><!-- .row -->\n\t</div><!-- .container -->\n</section>\n\n<section #education class=\"education py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Educação</h2>\n\t\t\t\t<h3 class=\"h4\">Formação Acadêmica</h3>\n\t\t\t\t\n\t\t\t\t<ul class=\"list-group list-group-flush mt-4\">\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Instituição:</strong> Faculdade de Tecnologia Rubens Lara</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Graduação:</strong> Sistemas Para Internet</li>\n\t\t\t\t\t<li class=\"list-group-item p-1 pl-0\"><strong>Período:</strong> 2013 <b>-</b> 2017</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t</div><!-- .col-8 -->\n\t\t</div><!-- .row -->\n\t</div><!-- .container -->\n</section>\n\n<section #portfolio class=\"timeline py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Portfolio</h2>\n\t\t\t\t<h3 class=\"h4\">Timeline Portfolio</h3>\n\t\t\t\t<p>Montei essa timeline para expor os ultimos trabalhos realizados.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<app-timeline [timeline]=\"projetos\"></app-timeline>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section #contact class=\"contact py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Contato</h2>\n\t\t\t\t<p>Entre em contato para falar comigo ou ter mais detalhes.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<app-contact></app-contact>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section #curriculum class=\"save py-5\">\n\t<div class=\"container my-5\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2 class=\"h1 mb-5\">Veja Meu Currículo</h2>\n\n\t\t\t\t<div class=\"float-left mr-5\">\n\t\t\t\t\t<fa name=\"save\" class=\"fa-5x\"></fa>\n\t\t\t\t</div>\n\t\t\t\t<h3 class=\"h4\">Currículo</h3>\n\t\t\t\t<p>Faça o download de meu Currículo em formato \".PDF\" para conhecer um pouco mais sobre meu perfil profissional.</p>\n\t\t\t\t<p class=\"lead\">\n\t\t\t\t\t<a class=\"pb-4\" href=\"https://drive.google.com/file/d/1BT9AMrdDEUc8dKh4clu1B7y6QBLwOlaW/view?usp=sharing\">\n\t\t\t\t\t\t<fa name=\"file-pdf-o\"></fa> \n\t\t\t\t\t\tDownlod Currículo\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Satisfy\");\nsection {\n  padding: 70px auto; }\nsection:nth-child(even) {\n    background-color: #f9f9f9; }\nsection h1, section h2, section h3, section h4, section h5, section h6, section p {\n    color: #2c3038; }\nsection .assinatura {\n    font-family: 'Satisfy', cursive;\n    font-size: 25px; }\nsection.header .container {\n    background-image: url('https://vitorgja.github.io/assets/img/header-vitor.jpg');\n    background-repeat: no-repeat;\n    background-size: 70%;\n    background-position-y: -50px; }\nsection.header .container [class*=\"bg-\"] a {\n      color: #FFF; }\nsection.header .container .bg-black {\n      background-color: #2c3038; }\nsection.header .container .bg-yellow {\n      background-color: #f5bf00; }\nsection.header .container .bg-orange {\n      background-color: #f7951c; }\nsection.header .container .bg-darkorange {\n      background-color: #f36422; }\nsection.header .container .bg-red {\n      background-color: #ed1c24; }\nsection.header .container .bg-darkred {\n      background-color: #e10236; }\nsection.header .container .bg-grape {\n      background-color: #b90062; }\nsection.header .container .bg-purple {\n      background-color: #876363; }\nsection.header .container .bg-blue {\n      background-color: #3c70b5; }\nsection.header .container .bg-green {\n      background-color: #04ad81; }\nsection.header .container .bg-lightgreen {\n      background-color: #87c15e; }\nsection.hi-iam-vitor .list-group .list-group-item, section.education .list-group .list-group-item {\n    background-color: transparent;\n    border-color: transparent; }\nsection.save .float-left fa {\n    vertical-align: top;\n    font-size: 8.7em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9wcm9qZXRvcy1saW51eC92aXRvcnBlcmVpcmEvdml0b3JnamEtZ2hwYWdlL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUFZO0FBRVo7RUFDSSxrQkFBa0IsRUFBQTtBQUR0QjtJQUlRLHlCQUFrQyxFQUFBO0FBSjFDO0lBU3lCLGNBQW9CLEVBQUE7QUFUN0M7SUFXUSwrQkFBK0I7SUFDL0IsZUFBZSxFQUFBO0FBWnZCO0lBa0JZLCtFQUFtRDtJQUNuRCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDRCQUE0QixFQUFBO0FBckJ4QztNQXVCNkIsV0FBVyxFQUFBO0FBdkJ4QztNQXdCdUIseUJBQStCLEVBQUE7QUF4QnREO01BeUJ3Qix5QkFBZ0MsRUFBQTtBQXpCeEQ7TUEwQndCLHlCQUFpQyxFQUFBO0FBMUJ6RDtNQTJCNEIseUJBQWlDLEVBQUE7QUEzQjdEO01BNEJxQix5QkFBZ0MsRUFBQTtBQTVCckQ7TUE2QnlCLHlCQUErQixFQUFBO0FBN0J4RDtNQThCdUIseUJBQStCLEVBQUE7QUE5QnREO01BK0J3Qix5QkFBZ0MsRUFBQTtBQS9CeEQ7TUFnQ3NCLHlCQUFpQyxFQUFBO0FBaEN2RDtNQWlDdUIseUJBQWdDLEVBQUE7QUFqQ3ZEO01Ba0M0Qix5QkFBaUMsRUFBQTtBQWxDN0Q7SUF1Q1ksNkJBQTZCO0lBQzdCLHlCQUF5QixFQUFBO0FBeENyQztJQWtEZ0IsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TYXRpc2Z5Jyk7XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogNzBweCBhdXRvO1xyXG5cclxuICAgICY6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksMjQ5LDI0OSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBoMSxoMixoMyxoNCxoNSxoNixwIHtjb2xvcjogcmdiKDQ0LDQ4LDU2KTsgfVxyXG4gICAgLmFzc2luYXR1cmF7IFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeScsIGN1cnNpdmU7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJi5oZWFkZXJ7XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2hlYWRlci12aXRvci5qcGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtNTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICBbY2xhc3MqPVwiYmctXCJdIGF7Y29sb3I6ICNGRkY7IH1cclxuICAgICAgICAgICAgLmJnLWJsYWNreyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsNDgsNTYpOyB9XHJcbiAgICAgICAgICAgIC5iZy15ZWxsb3d7IGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMTkxLDApIH1cclxuICAgICAgICAgICAgLmJnLW9yYW5nZXsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywxNDksMjgpOyB9XHJcbiAgICAgICAgICAgIC5iZy1kYXJrb3JhbmdleyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLDEwMCwzNCk7IH1cclxuICAgICAgICAgICAgLmJnLXJlZHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywyOCwzNik7IH1cclxuICAgICAgICAgICAgLmJnLWRhcmtyZWR7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsMiw1NCk7IH1cclxuICAgICAgICAgICAgLmJnLWdyYXBleyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LDAsOTgpOyB9XHJcbiAgICAgICAgICAgIC5iZy1wdXJwbGV7IGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsOTksOTkpOyB9XHJcbiAgICAgICAgICAgIC5iZy1ibHVleyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsMTEyLDE4MSk7IH1cclxuICAgICAgICAgICAgLmJnLWdyZWVueyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwxNzMsMTI5KTsgfVxyXG4gICAgICAgICAgICAuYmctbGlnaHRncmVlbnsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwxOTMsOTQpOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5oaS1pYW0tdml0b3IsICYuZWR1Y2F0aW9ue1xyXG4gICAgICAgIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG4gICAgJi5zYXZle1xyXG4gICAgICAgIC5mbG9hdC1sZWZ0e1xyXG4gICAgICAgICAgICBmYXtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDguN2VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: Experience, HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_services_api_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/services/api-backend.service */ "./src/app/admin/services/api-backend.service.ts");
/* harmony import */ var _models_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/timeline */ "./src/app/models/timeline.ts");
/* harmony import */ var _models_skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/skill */ "./src/app/models/skill.ts");





var Experience = /** @class */ (function () {
    function Experience() {
    }
    return Experience;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiBackend) {
        this.apiBackend = apiBackend;
        this.projetos = new Array();
        this.skills = new Array();
        this.experience = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiBackend.get("skills", { "_order": "asc", "_sort": "title" }).subscribe(function (skills) {
            _this.skills = skills.map(function (skill) {
                var _skill = new _models_skill__WEBPACK_IMPORTED_MODULE_4__["Skill"]();
                _skill.title = skill.title;
                _skill.percent = skill.percent || false;
                _skill.active = skill.active;
                return _skill;
            });
        });
        this.apiBackend.get("experiences", { "_order": "desc", "_sort": "date_end" }).subscribe(function (experience) {
            _this.experience = experience;
        });
        this.apiBackend.get("projects", { "_order": "desc", "_sort": "date_end" }).subscribe(function (projetos) {
            _this.projetos = projetos.map(function (projeto) {
                var timeline = new _models_timeline__WEBPACK_IMPORTED_MODULE_3__["Timeline"]();
                timeline.title = projeto.title || null;
                timeline.subtitle = projeto.company || null;
                timeline.date = projeto.date_end;
                timeline.description = projeto.description;
                timeline.active = projeto.active;
                return timeline;
            });
        });
    };
    HomeComponent.prototype.scroll = function (el) {
        console.warn("el: ", el);
        el.scrollIntoView({ behavior: "smooth" });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_services_api_backend_service__WEBPACK_IMPORTED_MODULE_2__["ApiBackendService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-3\"></div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"jumbotron\">\n\t\t\t\t<h1 class=\"display-4\">Página de Login</h1>\n\t\t\t\t<p class=\"lead\">login</p>\n\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n\t\t\t\t\t\t formControlName=\"login\" [ngClass]=\"{ 'is-invalid': submitted && f.login.errors }\" />\n\n\t\t\t\t\t\t<div *ngIf=\"submitted && f.login.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<small *ngIf=\"f.login.errors.required\" class=\"form-text text-muted\">\n\t\t\t\t\t\t\t\tLogin Obrigatorio!\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"exampleInputPassword1\">Password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName=\"password\"\n\t\t\t\t\t\t [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n\t\t\t\t\t\t\t<small *ngIf=\"f.password.errors.required\" class=\"form-text text-muted\">\n\t\t\t\t\t\t\t\tLogin Obrigatorio!\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group form-check\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n\t\t\t\t\t\t<label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button [disabled]=\"loading\" class=\"btn btn-primary\">logar</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3\"></div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, alertService, logger, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.logger = logger;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("this.authenticationService: ", this.authenticationService);
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.login.value, this.f.password.value)
            // .pipe(first())
            .subscribe(function (data) {
            console.log("subscribe data: ", data);
            if (!data.access_token) {
                _this.alertService.error('Login ou senha Invalidos!');
                _this.logger.log("Login ou senha Invalidos", _this.f.login.value, "");
                _this.loading = false;
                _this.submitted = false;
            }
            else {
                _this.alertService.success('Usuario Logado com Sucesso!');
                localStorage.setItem('vtr_current_user', JSON.stringify(data));
                _this.logger.log("Usuário fazendo Login", _this.f.login.value, _this.returnUrl, "login");
                _this.router.navigate(['/'], {
                    queryParams: { "refresh": 1 },
                });
                // 	location.href = this.returnUrl;
                _this.loading = false;
            }
        }, function (err) {
            _this.alertService.error(err);
            _this.logger.error("Erro ao Fazer o Login", _this.f.login.value, "error-login-bff");
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_log_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"],
            _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/teste/teste.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/teste/teste.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  teste works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/teste/teste.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/teste/teste.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/teste/teste.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/teste/teste.component.ts ***!
  \************************************************/
/*! exports provided: TesteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteComponent", function() { return TesteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var TesteComponent = /** @class */ (function () {
    function TesteComponent(porra) {
        // public porra: AuthenticationService
        // const porra = AuthenticationService;
        this.porra = porra;
        console.log("porra: ", porra);
    }
    TesteComponent.prototype.ngOnInit = function () {
    };
    TesteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teste',
            template: __webpack_require__(/*! ./teste.component.html */ "./src/app/pages/teste/teste.component.html"),
            styles: [__webpack_require__(/*! ./teste.component.scss */ "./src/app/pages/teste/teste.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TesteComponent);
    return TesteComponent;
}());



/***/ }),

/***/ "./src/app/pipe/date-format.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/date-format.pipe.ts ***!
  \******************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateFormat'
// })
// export class DateFormatPipe implements PipeTransform {
//   transform(value: any, args?: any): any {
//     return null;
//   }
// }


var DateFormatPipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DateFormatPipe, _super);
    function DateFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipe.prototype.transform = function (value, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.apply(this, [value].concat(args));
    };
    DateFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/services/alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        //clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.info = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'info', text: message });
    };
    AlertService.prototype.warning = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'warning', text: message });
    };
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.backend.url;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('vtr_current_user')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.url + "/auth/login", {
            email: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('vtr_current_user', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('vtr_current_user');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/log/log-entry.ts":
/*!*******************************************!*\
  !*** ./src/app/services/log/log-entry.ts ***!
  \*******************************************/
/*! exports provided: LogEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogEntry", function() { return LogEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_level_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-level.enum */ "./src/app/services/log/log-level.enum.ts");



var LogEntry = /** @class */ (function () {
    function LogEntry() {
        // Public Properties
        this.userId = "";
        this.correlationId = "";
        this.level = _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug;
        this.description = "";
        this.create = new Date();
        this.extraInfo = [];
    }
    LogEntry.prototype.buildLogString = function () {
        var ret = "";
        ret = "Create: " + new Date() + " - ";
        ret += "Level: " + _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"][this.level];
        ret += " - Description: " + this.description;
        if (this.extraInfo.length) {
            ret += " - Extra Info: " + this.formatParams(this.extraInfo);
        }
        return ret;
    };
    LogEntry.prototype.formatParams = function (params) {
        var ret = params.join(",");
        // Is there at least one object in the array?
        if (params.some(function (p) { return typeof p == "object"; })) {
            ret = "";
            // Build comma-delimited string
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var item = params_1[_i];
                ret += JSON.stringify(item) + ",";
            }
        }
        return ret;
    };
    LogEntry = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LogEntry);
    return LogEntry;
}());



/***/ }),

/***/ "./src/app/services/log/log-level.enum.ts":
/*!************************************************!*\
  !*** ./src/app/services/log/log-level.enum.ts ***!
  \************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Information"] = 2] = "Information";
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    LogLevel[LogLevel["Off"] = 6] = "Off";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "./src/app/services/log/log-publishers.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/log/log-publishers.service.ts ***!
  \********************************************************/
/*! exports provided: LogPublishersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPublishersService", function() { return LogPublishersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_publishers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-publishers */ "./src/app/services/log/log-publishers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LogPublishersService = /** @class */ (function () {
    function LogPublishersService(http) {
        this.http = http;
        // Public properties
        this.publishers = [];
        // Build publishers arrays
        this.buildPublishers();
    }
    // Build publishers array
    LogPublishersService.prototype.buildPublishers = function () {
        // Create instance of LogConsole Class
        this.publishers.push(new _log_publishers__WEBPACK_IMPORTED_MODULE_2__["LogConsole"]());
        // Create instance of LogLocalStorage Class
        this.publishers.push(new _log_publishers__WEBPACK_IMPORTED_MODULE_2__["LogLocalStorage"]());
        // Create instance of LogWebApi Class
        this.publishers.push(new _log_publishers__WEBPACK_IMPORTED_MODULE_2__["LogWebApi"](this.http));
    };
    LogPublishersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LogPublishersService);
    return LogPublishersService;
}());



/***/ }),

/***/ "./src/app/services/log/log-publishers.ts":
/*!************************************************!*\
  !*** ./src/app/services/log/log-publishers.ts ***!
  \************************************************/
/*! exports provided: LogPublisher, LogConsole, LogLocalStorage, LogWebApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPublisher", function() { return LogPublisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogConsole", function() { return LogConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLocalStorage", function() { return LogLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWebApi", function() { return LogWebApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




// const environment = {services: {logBff: "http://localhost:3000"} };
var LogPublisher = /** @class */ (function () {
    function LogPublisher() {
    }
    return LogPublisher;
}());

var LogConsole = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogConsole, _super);
    function LogConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogConsole.prototype.log = function (entry) {
        // Log to console
        console.log(entry.buildLogString());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    LogConsole.prototype.clear = function () {
        console.clear();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    return LogConsole;
}(LogPublisher));

var LogLocalStorage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogLocalStorage, _super);
    function LogLocalStorage() {
        var _this = 
        // Must call super() from derived classes
        _super.call(this) || this;
        // Set location
        _this.location = "logging";
        return _this;
    }
    // Append log entry to local storage
    LogLocalStorage.prototype.log = function (entry) {
        var ret = false;
        var values;
        try {
            // Get previous values from local storage
            values = JSON.parse(localStorage.getItem(this.location)) || [];
            // Add new log entry to array
            values.push(entry);
            // Store array into local storage
            localStorage.setItem(this.location, JSON.stringify(values));
            // Set return value
            ret = true;
        }
        catch (ex) {
            // Display error in console
            console.log(ex);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(ret);
    };
    // Clear all log entries from local storage
    LogLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.location);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    return LogLocalStorage;
}(LogPublisher));

var LogWebApi = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogWebApi, _super);
    function LogWebApi(http) {
        var _this = 
        // Must call super() from derived classes
        _super.call(this) || this;
        _this.http = http;
        // Set location
        _this.location = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.backend.url + "/logs";
        return _this;
    }
    // Add log entry to back end data store
    LogWebApi.prototype.log = function (entry) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = {
            headers: headers
        };
        this.http.post(this.location, entry, options).subscribe();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    // Clear all log entries from local storage
    LogWebApi.prototype.clear = function () {
        // TODO: Call Web API to clear all values
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    LogWebApi.prototype.handleErrors = function (error) {
        var errors = [];
        var msg = "";
        msg = "Status: " + error.status;
        msg += " - Status Text: " + error.statusText;
        if (error.json()) {
            msg += " - Exception Message: " + error.json().exceptionMessage;
        }
        errors.push(msg);
        console.error('An error occurred', errors);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errors);
    };
    return LogWebApi;
}(LogPublisher));



/***/ }),

/***/ "./src/app/services/log/log.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/log/log.service.ts ***!
  \*********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_level_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-level.enum */ "./src/app/services/log/log-level.enum.ts");
/* harmony import */ var _log_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-entry */ "./src/app/services/log/log-entry.ts");
/* harmony import */ var _log_publishers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-publishers.service */ "./src/app/services/log/log-publishers.service.ts");





var LogService = /** @class */ (function () {
    function LogService(publishersService) {
        this.publishersService = publishersService;
        this.level = _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].All;
        // Set publishers
        this.publishers = this.publishersService.publishers;
    }
    LogService.prototype.shouldLog = function (level) {
        var ret = false;
        if ((level >= this.level && level !== _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Off) || this.level === _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].All) {
            ret = true;
        }
        return ret;
    };
    LogService.prototype.writeToLog = function (msg, level, params) {
        if (this.shouldLog(level)) {
            var entry = new _log_entry__WEBPACK_IMPORTED_MODULE_3__["LogEntry"]();
            entry.userId = null;
            entry.correlationId = null;
            entry.level = level;
            entry.description = msg;
            entry.extraInfo = params;
            for (var _i = 0, _a = this.publishers; _i < _a.length; _i++) {
                var logger = _a[_i];
                logger.log(entry).subscribe(function (response) { return console.log(response); });
            }
        }
    };
    LogService.prototype.log = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].All, optionalParams);
    };
    LogService.prototype.debug = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, optionalParams);
    };
    LogService.prototype.info = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, optionalParams);
    };
    LogService.prototype.warn = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, optionalParams);
    };
    LogService.prototype.error = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, _log_level_enum__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, optionalParams);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_log_publishers_service__WEBPACK_IMPORTED_MODULE_4__["LogPublishersService"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    description: "This Project is running in Develop mode",
    api: {
        backend: {
            url_ba: "http://localhost:8000",
            url: "https://backend-vitorpereira.herokuapp.com"
        }
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/projetos-linux/vitorpereira/vitorgja-ghpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map