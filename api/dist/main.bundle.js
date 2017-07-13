webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateArticleComponent = (function () {
    function CreateArticleComponent(route, router, authService, articleService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.articleService = articleService;
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.article = new __WEBPACK_IMPORTED_MODULE_2__article__["a" /* Article */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.user = user;
                _this.loading = false;
            }, function (error) { return _this.router.navigateByUrl('/login'); });
        }
        catch (exception) {
            console.log(exception);
            if (exception.message === 'no token found') {
                this.router.navigateByUrl('/login');
            }
        }
    };
    CreateArticleComponent.prototype.create = function (article) {
        var _this = this;
        if (this.user.token === undefined) {
            try {
                this.authService.getCurrentUser().then(function (user) {
                    _this.user = user;
                    _this.articleService.postArticle(_this.user.token, article).then(function (response) { return _this.router.navigateByUrl('/article/' + article.url); });
                }, function (error) { return _this.router.navigateByUrl('/login'); });
            }
            catch (exception) {
                console.log(exception);
                if (exception.message === 'no token found') {
                    this.router.navigateByUrl('/login');
                }
            }
        }
        else {
            this.articleService.postArticle(this.user.token, article).then(function (response) { return _this.router.navigateByUrl('/article/' + article.url); });
        }
    };
    return CreateArticleComponent;
}());
CreateArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-create-article',
        template: __webpack_require__(168),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]) === "function" && _d || Object])
], CreateArticleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-article.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(route, router, authService, articleService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.articleService = articleService;
        this.loading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles().then(function (articles) { return _this.articles = articles; });
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.user = user;
            }, function (error) { return _this.router.navigateByUrl('/login'); });
        }
        catch (exception) {
            if (exception.message === 'no token found') {
                console.log(exception.message);
                this.router.navigateByUrl('/login');
            }
        }
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.loading = false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(169),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.user = user;
                _this.router.navigateByUrl('/home');
            }, function (error) { return console.log(error); });
        }
        catch (exception) {
            console.log(exception);
        }
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.loading = false;
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.loading = true;
        this.alert = '';
        console.log('test');
        this.authService.login(user).then(function (response) {
            if (response && response.token) {
                _this.loading = false;
                _this.router.navigateByUrl('/home');
            }
        }, function (error) {
            _this.loading = false;
            error = JSON.parse(error._body);
            _this.alert = error.message.toString();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(170),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.authService.logout();
                _this.router.navigateByUrl('/login');
            }, function (error) { return console.log(error); });
        }
        catch (exception) {
            console.log(exception);
        }
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__(171),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.user = user;
                _this.router.navigateByUrl('/home');
            }, function (error) { return console.log(error); });
        }
        catch (exception) {
            console.log(exception);
        }
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.loading = false;
    };
    SignupComponent.prototype.signup = function (user) {
        var _this = this;
        this.loading = true;
        this.alert = '';
        console.log('test');
        this.authService.signUp(user).then(function (response) {
            if (response && response.token) {
                _this.loading = false;
                _this.router.navigateByUrl('/home');
            }
        }, function (error) {
            _this.loading = false;
            error = JSON.parse(error._body);
            _this.alert = error.message.toString();
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(172),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://reggaeshark.eu:3000/api/';
        this.userUrl = 'user/';
        this.authUrl = 'auth/';
        this.loginUrl = 'login';
        this.signupUrl = 'signup';
        this.tokenKey = 'MongoProjet';
    }
    AuthService.prototype.store = function (token) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    };
    AuthService.prototype.retrieve = function () {
        var storedToken = JSON.parse(localStorage.getItem(this.tokenKey));
        if (!storedToken) {
            throw new Error('no token found');
        }
        return storedToken;
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + this.authUrl + this.loginUrl, JSON.stringify(user), { headers: headers }).toPromise().then(function (response) {
            _this.user = response.json();
            _this.store(_this.user.token);
            console.log(_this);
            return _this.user;
        }).catch(this.handleError);
    };
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + this.authUrl + this.signupUrl, JSON.stringify(user), { headers: headers }).toPromise().then(function (response) {
            _this.user = response.json();
            _this.store(_this.user.token);
            console.log(_this.user);
            return _this.user;
        }).catch(this.handleError);
    };
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        console.log(this.user);
        if (this.user === undefined) {
            var token = this.retrieve();
            return this.http.get(this.baseUrl + this.authUrl + 'isAuth/' + token).toPromise().then(function (response) {
                _this.user = response.json();
                console.log(_this.user);
                return _this.user;
            });
        }
    };
    AuthService.prototype.getCurrentToken = function () {
        return this.user.token;
    };
    AuthService.prototype.isLoggedIn = function () {
        console.log(this.user);
        return this.user !== undefined;
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <a href=\"./home\">Retour à l'accueil</a>\n  <a href=\"./article\">Rédiger un article</a>\n  <a href=\"./logout\">Déconnexion</a>\n  <p class=\"welcome\">Bienvenue {{user.name}}</p>\n</div>\n\n<div class=\"main\">\n  <h1>Article</h1>\n  <div class=\"article-little\">\n    <h2>{{author.article.title}}</h2>\n    <p>{{author.article.text}}</p>\n    <p class=\"date\">Rédigé par {{author.name}} le {{author.article.datePublication | date: 'dd/MM/yyyy'}} à {{author.article.datePublication | date: 'HH:mm'}} </p>\n  </div>\n  <div class=\"comment\" *ngFor=\"let comment of author.article.comments\">\n    <p>{{comment.comment}}</p>\n    <p class=\"date\">Publié le {{comment.datePublication | date: 'dd/MM/yyyy'}} à {{comment.datePublication | date: 'HH:mm'}} par {{comment.name}}</p>\n  </div>\n  <div class=\"comment\">\n    <div class=\"field-wrap\">\n      <label>\n        Texte du commentaire<span class=\"req\">*</span>\n      </label>\n      <input type=\"text\" [(ngModel)]=\"comment.comment\" required autocomplete=\"off\"/>\n    </div>\n    <button (click)=\"postComment(comment)\" class=\"button button-block\" >Commenter</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <a href=\"./home\">Retour à l'accueil</a>\n  <a href=\"./article\">Rédiger un article</a>\n  <a href=\"./logout\">Déconnexion</a>\n  <p class=\"welcome\">Bienvenue {{user.name}}</p>\n</div>\n\n\n<div class=\"main\">\n<div class=\"form\">\n\n  <div class=\"tab-content\">\n    <div id=\"signup\">\n      <h1>Écrire un article</h1>\n\n      <div class=\"field-wrap\">\n        <input  [(ngModel)]=\"article.url\" type=\"text\" required autocomplete=\"off\" placeholder=\"URL\"/>\n      </div>\n\n      <div class=\"field-wrap\">\n        <input  [(ngModel)]=\"article.title\" type=\"text\" required autocomplete=\"off\" placeholder=\"Titre\"/>\n      </div>\n\n\n      <div class=\"field-wrap\">\n\n        <textarea  [(ngModel)]=\"article.text\" required placeholder=\"Texte de l'article\"></textarea>\n      </div>\n      <p class=\"alert\">{{alert}}</p>\n\n      <button *ngIf=\"!loading\" (click)=\"create(article)\" type=\"submit\" class=\"button button-block\">Publier</button>\n\n    </div>\n\n  </div><!-- tab-content -->\n\n</div> <!-- /form -->\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <a href=\"./home\">Retour à l'accueil</a>\n  <a href=\"./article\">Rédiger un article</a>\n  <a href=\"./logout\">Déconnexion</a>\n  <p class=\"welcome\">Bienvenue {{user.name}}</p>\n</div>\n\n<div class=\"main\">\n  <h1>Tous les articles</h1>\n  <div *ngFor=\"let author of articles\">\n    <div class=\"article-little\">\n      <h2>{{author.article.title}}</h2>\n      <p>{{author.article.text.substr(0, 100)}}(...)</p>\n      <p><a href=\"./article/{{author.article.url}}\"><span *ngIf=\"author.article.comments\" >Afficher les commentaires ({{author.article.comments.length}})</span>\n        <span *ngIf=\"!author.article.comments\" >Poster un commentaire</span>\n      </a></p>\n      <p class=\"date\">Publié le {{author.article.datePublication | date: 'dd/MM/yyyy'}} à {{author.article.datePublication | date: 'HH:mm'}} par {{author.name}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n\n  <ul class=\"tab-group\">\n    <li class=\"tab\"><a href=\"./signup\">S'inscrire</a></li>\n    <li class=\"tab active\"><a href=\"./login\">Se connecter</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n\n    <div id=\"login\">\n      <h1>Se connecter</h1>\n\n      <div class=\"field-wrap\">\n        <input type=\"email\" placeholder=\"Adresse email\" [(ngModel)]=\"user.email\" required autocomplete=\"off\"/>\n      </div>\n\n      <div class=\"field-wrap\">\n        <input type=\"password\" placeholder=\"Mot de passe\" [(ngModel)]=\"user.password\" required autocomplete=\"off\"/>\n      </div>\n      <p class=\"alert\">{{alert}}</p>\n\n      <p class=\"forgot\"><a href=\"#\">Mot de passe oublié?</a></p>\n\n      <button *ngIf=\"!loading\" class=\"button button-block\" (click)=\"login(user)\" >Log In</button>\n\n    </div>\n\n  </div><!-- tab-content -->\n\n</div> <!-- /form -->\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n\n  <ul class=\"tab-group\">\n    <li class=\"tab active\"><a href=\"./signup\">S'inscrire</a></li>\n    <li class=\"tab\"><a href=\"./login\">Se connecter</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div id=\"signup\">\n      <h1>Inscrivez vous gratuitement</h1>\n\n      <div class=\"field-wrap\">\n        <input  [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"Nom\" required autocomplete=\"off\"/>\n      </div>\n\n\n      <div class=\"field-wrap\">\n        <input  [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Adresse email\" required autocomplete=\"off\"/>\n      </div>\n\n      <div class=\"field-wrap\">\n        <input  [(ngModel)]=\"user.password\" placeholder=\"Password\" type=\"password\" required autocomplete=\"off\"/>\n      </div>\n      <p class=\"alert\">{{alert}}</p>\n\n      <button *ngIf=\"!loading\" (click)=\"signup(user)\" type=\"submit\" class=\"button button-block\">C'est parti !</button>\n\n    </div>\n\n  </div><!-- tab-content -->\n\n</div> <!-- /form -->\n"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * Created by dupon on 09/07/2017.
 */
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.baseUrl = 'http://reggaeshark.eu:3000/api/';
        this.articleUrl = 'article/';
        this.articlesUrl = 'articles/';
        this.commentUrl = 'comment/';
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.baseUrl + this.articlesUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.getArticleByUrl = function (url) {
        return this.http.get(this.baseUrl + this.articleUrl + url).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.postArticle = function (token, article) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + this.articleUrl + token, JSON.stringify(article), { headers: headers }).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.postComment = function (url, token, comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + this.articleUrl + url + '/' + this.commentUrl + token, JSON.stringify(comment), { headers: headers }).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
/**
 * Created by dupon on 09/07/2017.
 */
var Article = (function () {
    function Article() {
    }
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_article_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_article_create_article_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_12__create_article_create_article_component__["a" /* CreateArticleComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__["a" /* LogoutComponent */] },
    {
        path: 'article/:url',
        component: __WEBPACK_IMPORTED_MODULE_11__article_article_component__["a" /* ArticleComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__article_article_component__["a" /* ArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__create_article_create_article_component__["a" /* CreateArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__["a" /* LogoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__article_service__["a" /* ArticleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleComponent = (function () {
    function ArticleComponent(route, router, authService, articleService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.articleService = articleService;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('test');
        this.comment = new __WEBPACK_IMPORTED_MODULE_6__comment__["a" /* Comment */]();
        if (this.user === undefined) {
            this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        }
        if (this.author === undefined) {
            this.author = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
            this.author.article = new __WEBPACK_IMPORTED_MODULE_3__article__["a" /* Article */]();
        }
        this.url = this.route.snapshot.params['url'];
        this.articleService.getArticleByUrl(this.url).then(function (author) {
            console.log(author);
            _this.author = author;
            _this.loading = true;
        });
        try {
            this.authService.getCurrentUser().then(function (user) {
                _this.user = user;
                _this.loading = false;
            }, function (error) { return _this.router.navigateByUrl('/login'); });
        }
        catch (exception) {
            console.log(exception);
            if (exception.message === 'no token found') {
                this.router.navigateByUrl('/login');
            }
        }
    };
    ArticleComponent.prototype.postComment = function (comment) {
        var _this = this;
        if (this.user.token === undefined) {
            try {
                this.authService.getCurrentUser().then(function (user) {
                    _this.user = user;
                    _this.articleService.postComment(_this.author.article.url, _this.user.token, comment).then(function (response) {
                        if (_this.author.article.comments === undefined) {
                            _this.author.article.comments = [];
                        }
                        comment.name = _this.user.name;
                        comment.datePublication = new Date(Date.now());
                        _this.author.article.comments.push(comment);
                    });
                }, function (error) { return _this.router.navigateByUrl('/login'); });
            }
            catch (exception) {
                console.log(exception);
                if (exception.message === 'no token found') {
                    this.router.navigateByUrl('/login');
                }
            }
        }
        else {
            this.articleService.postComment(this.author.article.url, this.user.token, comment).then(function (response) {
                if (_this.author.article.comments === undefined) {
                    _this.author.article.comments = [];
                }
                comment.name = _this.user.name;
                comment.datePublication = new Date(Date.now());
                _this.author.article.comments.push(comment);
            });
        }
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-article',
        template: __webpack_require__(167),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__article_service__["a" /* ArticleService */]) === "function" && _d || Object])
], ArticleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=article.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
/**
 * Created by dupon on 09/07/2017.
 */
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.bundle.js.map