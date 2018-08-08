webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contracts_contracts_component__ = __webpack_require__("./src/app/contracts/contracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contracts_contract_contract_component__ = __webpack_require__("./src/app/contracts/contract/contract.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        component: __WEBPACK_IMPORTED_MODULE_2__contracts_contracts_component__["a" /* ContractsComponent */],
        path: 'contracts'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
        path: ''
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_4__contracts_contract_contract_component__["a" /* ContractComponent */],
        path: 'contract/:uid'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <app-employees></app-employees> -->\n  <!-- <app-login></app-login> -->\n  <div class=\"text-center\">\n    <h2 class=\"jumbotron\">\n      Contracts\n    </h2>\n  </div>\n\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employees_employee_employee_component__ = __webpack_require__("./src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__employees_employee_list_employee_list_component__ = __webpack_require__("./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contracts_contracts_component__ = __webpack_require__("./src/app/contracts/contracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contracts_contract_contract_component__ = __webpack_require__("./src/app/contracts/contract/contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contracts_contract_service__ = __webpack_require__("./src/app/contracts/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    // apiKey: 'AIzaSyA1ktbggFjkecBf_5tGpNJ-IZSWxfrH7Gc',
    // authDomain: 'fir-angular-54be3.firebaseapp.com',
    // databaseURL: 'https://fir-angular-54be3.firebaseio.com',
    // projectId: 'fir-angular-54be3',
    // storageBucket: 'fir-angular-54be3.appspot.com',
    // messagingSenderId: '253969748614'
    apiKey: "AIzaSyCesNh1gNmyMcepb60Hu4vj4qovBjWTcms",
    authDomain: "remedium-ed376.firebaseapp.com",
    databaseURL: "https://remedium-ed376.firebaseio.com",
    projectId: "remedium-ed376",
    storageBucket: "remedium-ed376.appspot.com",
    messagingSenderId: "110623256059"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contracts_contracts_component__["a" /* ContractsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contracts_contract_contract_component__["a" /* ContractComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__core_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_17__contracts_contract_service__["a" /* ContractService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contracts/contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractService = /** @class */ (function () {
    function ContractService(firebase) {
        this.firebase = firebase;
        this.contactList = firebase.list('/files');
    }
    ContractService.prototype.insertContact = function (contractId, createdDate, mediaUrl, name, type, uid) {
        this.contactList.push({
            contractId: contractId,
            createdDate: createdDate,
            mediaUrl: mediaUrl,
            name: name,
            type: type,
            uid: uid
        });
    };
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "./src/app/contracts/contract/contract.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/contracts/contract/contract.component.html":
/***/ (function(module, exports) {

module.exports = "<p><span class=\"title\">UID:</span> {{contract['uid']}}</p>\n<p><span class=\"title\">Address:</span> {{contract['address']}}</p>\n<p><span class=\"title\">AgentId:</span> {{contract['agentId']}}</p>\n<p><span class=\"title\">agentName:</span> {{contract['agentName']}}</p>\n<p><span class=\"title\">budget:</span> {{contract['budget']}}</p>\n<p><span class=\"title\">description:</span> {{contract['description']}}</p>\n<p><span class=\"title\">endDate:</span> {{contract['endDate']}}</p>\n<p><span class=\"title\">escrow:</span> {{contract['escrow']}}</p>\n<p><span class=\"title\">orderDate:</span> {{contract['orderDate']}}</p>\n<p><span class=\"title\">photoAccount:</span> {{contract['photoAccount']}}</p>\n<p><span class=\"title\">photographerId:</span> {{contract['photographerId']}}</p>\n<p><span class=\"title\">photographerName:</span> {{contract['photographerName']}}</p>\n<p><span class=\"title\">status:</span> {{contract['status']}}</p>\n<p><span class=\"title\">title:</span> {{contract['title']}}</p>\n\n<div class=\"form-group\"></div>\n<input type=\"text\" [(ngModel)]=\"file_name\" class=\"form-control\" placeholder=\"File Name\">\n<input type=\"file\" (change)=\"uploads($event)\" accept=\".png,.jpg\" multiple class=\"form-control\">\n<!-- <div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\"\n    [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n</div> -->\n\n<div class=\"alert alert-info\" role=\"alert\" *ngIf=\"cur_file_counts == cur_uploaded_files\">\n  Files are uploaded\n</div>"

/***/ }),

/***/ "./src/app/contracts/contract/contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contract_service__ = __webpack_require__("./src/app/contracts/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContractComponent = /** @class */ (function () {
    function ContractComponent(router, activeRouter, db, afStorage, contractService) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.db = db;
        this.afStorage = afStorage;
        this.contractService = contractService;
        this.uid = '';
        this.downloadURL = '';
        this.cur_file_uid = '';
        this.file_name = '';
        this.cur_file_created = '';
        this.cur_file_counts = 0;
        this.cur_uploaded_files = -1;
        this.uid = this.activeRouter.snapshot.params['uid'];
        var reff = this.db.database.ref('contracts/' + this.uid);
        var me = this;
        reff.once('value').then(function (snapshot) {
            console.log(snapshot.toJSON());
            me.contract = snapshot.toJSON();
        });
    }
    ContractComponent.prototype.ngOnInit = function () {
    };
    ContractComponent.prototype.upload = function (event) {
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('files/' + id);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        var me = this;
        this.task.then(function (data) {
            // me.downloadURL = data.ref.getDownloadURL()['i'];
            var a = data.ref.getDownloadURL();
            me.cur_file_uid = data.ref.name;
            me.cur_file_created = data.metadata.timeCreated;
            a.then(function (data) {
                me.downloadURL = data;
                me.pushfiledata();
            });
        });
    };
    ContractComponent.prototype.uploads = function (event) {
        var files = event.target.files;
        var files_length = files.length;
        this.cur_file_counts = files_length;
        this.cur_uploaded_files = 0;
        console.log(files_length);
        for (var i = 0; i < files_length; i++) {
            console.log(i);
            var id = Math.random().toString(36).substring(2);
            this.ref = this.afStorage.ref('files/' + id);
            this.task = this.ref.put(event.target.files[i]);
            var me = this;
            this.task.then(function (data) {
                var a = data.ref.getDownloadURL();
                var cur_file_uid = data.ref.name;
                var cur_file_created = data.metadata.timeCreated;
                a.then(function (data) {
                    // me.downloadURL = data;
                    me.contractService.insertContact(me.uid, cur_file_created, data, me.file_name, 0, cur_file_uid);
                    me.cur_uploaded_files++;
                });
            });
        }
    };
    ContractComponent.prototype.pushfiledata = function () {
        this.contractService.insertContact(this.uid, this.cur_file_created, this.downloadURL, this.file_name, 0, this.cur_file_uid);
    };
    ContractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contract',
            template: __webpack_require__("./src/app/contracts/contract/contract.component.html"),
            styles: [__webpack_require__("./src/app/contracts/contract/contract.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_4__contract_service__["a" /* ContractService */]])
    ], ContractComponent);
    return ContractComponent;
}());



/***/ }),

/***/ "./src/app/contracts/contracts.component.css":
/***/ (function(module, exports) {

module.exports = ".contract{\r\n    padding: 10px;\r\n    border: solid 1px #888;\r\n    margin: 5px 5px 20px;\r\n    -webkit-box-shadow: 4px 4px 6px 0px #abaaaa;\r\n            box-shadow: 4px 4px 6px 0px #abaaaa;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.contract:hover{\r\n    background: #888;\r\n    color: white;\r\n}\r\n\r\n.contract .title{\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contracts/contracts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let contract of contracts\">\n    <div class=\"contract\" (click)=\"gotocontract(contract['uid'])\">\n      <p><span class=\"title\">UID:</span> {{contract['uid']}}</p>\n      <p><span class=\"title\">Address:</span> {{contract['address']}}</p>\n      <p><span class=\"title\">AgentId:</span> {{contract['agentId']}}</p>\n      <p><span class=\"title\">agentName:</span> {{contract['agentName']}}</p>\n      <p><span class=\"title\">budget:</span> {{contract['budget']}}</p>\n      <p><span class=\"title\">description:</span> {{contract['description']}}</p>\n      <p><span class=\"title\">endDate:</span> {{contract['endDate']}}</p>\n      <p><span class=\"title\">escrow:</span> {{contract['escrow']}}</p>\n      <p><span class=\"title\">orderDate:</span> {{contract['orderDate']}}</p>\n      <p><span class=\"title\">photoAccount:</span> {{contract['photoAccount']}}</p>\n      <p><span class=\"title\">photographerId:</span> {{contract['photographerId']}}</p>\n      <p><span class=\"title\">photographerName:</span> {{contract['photographerName']}}</p>\n      <p><span class=\"title\">status:</span> {{contract['status']}}</p>\n      <p><span class=\"title\">title:</span> {{contract['title']}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contracts/contracts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractsComponent = /** @class */ (function () {
    function ContractsComponent(db, router) {
        this.db = db;
        this.router = router;
        this.contracts = [];
    }
    ContractsComponent.prototype.ngOnInit = function () {
        var ref = this.db.database.ref('contracts');
        var me = this;
        ref.once('value').then(function (snapshot) {
            // console.log(snapshot.toJSON());
            var x = snapshot.toJSON();
            snapshot.forEach(function (item) {
                // console.log(item);
                // console.log(item.key);
                // console.log(item.toJSON());
                me.contracts.push(item.toJSON());
            });
        });
    };
    ContractsComponent.prototype.gotocontract = function (uid) {
        console.log(uid);
        this.router.navigate(['/contract/' + uid]);
    };
    ContractsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contracts',
            template: __webpack_require__("./src/app/contracts/contracts.component.html"),
            styles: [__webpack_require__("./src/app/contracts/contracts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ContractsComponent);
    return ContractsComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
            console.log(_this.authState);
        });
    }
    AuthService.prototype.loginWithEmail = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Employee Register</h6>\n<table class=\"table table-sm table-hover\">\n  <tr *ngFor=\"let employee of employeeList\">\n    <td>{{employee.name}}</td>\n    <td>{{employee.position}}</td>\n    \n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, db) {
        this.employeeService = employeeService;
        this.db = db;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        // var x = this.employeeService.getData();
        // x.valueChanges().subscribe(item => {
        //   // this.employeeList = [];
        //   // item.forEach(element => {
        //   //   var y = element.payload.toJSON();
        //   //   y['$key'] = element.key;
        //   //   this.employeeList.push(y as Employee);
        //   // });
        // });
        var ref = this.db.database.ref('employees');
        ref.once('value').then(function (snapshot) {
            console.log(snapshot.toJSON());
        });
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee-list',
            template: __webpack_require__("./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee-list/employee-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\">\n  <div class=\"form-group\">\n    <label for=\"\">Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"employeeService.seletedEmployee.name\" placeholder=\"Name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Position</label>\n    <input type=\"text\" class=\"form-control\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"employeeService.seletedEmployee.position\" placeholder=\"Position\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Office</label>\n    <input type=\"text\" class=\"form-control\" name=\"office\" #office=\"ngModel\" [(ngModel)]=\"employeeService.seletedEmployee.office\" placeholder=\"Office\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Salary</label>\n    <div class=\"input-group\">\n      <div class=\"input-group-addon\">\n        <i class=\"fa fa-dollar\"></i>\n      </div>\n      <input type=\"text\" class=\"form-control\" name=\"salary\" #salary=\"ngModel\" [(ngModel)]=\"employeeService.seletedEmployee.salary\" placeholder=\"Salary\">\n    </div>\n    \n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-default\" type=\"submit\">\n      <i class=\"fa fa-floppy-o\"></i>\n      Save</button>\n    <button class=\"btn btn-default\" (click)=\"resetForm(employeeForm)\" type=\"button\">\n      <i class=\"fa fa-repeat\"></i>\n      Reset</button>\n  </div>\n</form>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    File Upload\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      Select a file for upload:\n    </h5>\n    <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\">\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"downloadURL!= ''\">\n      File uploaded: <a [href]=\"downloadURL\">{{downloadURL}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, afStorage) {
        this.employeeService = employeeService;
        this.afStorage = afStorage;
        this.downloadURL = '';
        this.employeeService.getData();
        // this.resetForm();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent.prototype.onSubmit = function (employeeForm) {
        this.employeeService.insertEmployee(employeeForm.value);
        this.resetForm(employeeForm);
        // alert();
        // console.log(employeeForm.value);
    };
    EmployeeComponent.prototype.resetForm = function (employeeForm) {
        this.employeeService.seletedEmployee = {
            $key: null,
            name: '',
            position: '',
            office: '',
            salary: 0
        };
    };
    EmployeeComponent.prototype.upload = function (event) {
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('upload/' + id);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        var me = this;
        this.task.then(function (data) {
            me.downloadURL = data.ref.getDownloadURL()['i'];
            var a = data.ref.getDownloadURL();
            a.then(function (data) {
                me.downloadURL = data;
            });
        });
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2 class=\"jumbotron\">\n    Employee Register\n  </h2>\n</div>\n\n<div class=\"row\">\n  <app-login></app-login>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <!-- <app-employee></app-employee> -->\n  </div>\n  <div class=\"col-md-5\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees/employees.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__("./src/app/employees/shared/employee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.seletedEmployee = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]();
        this.employeeList = firebase.list('/employees');
    }
    EmployeeService.prototype.getData = function () {
        // this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (employee) {
        this.employeeList.push({
            name: employee.name,
            position: employee.position,
            office: employee.office,
            salary: employee.salary
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            name: employee.name,
            position: employee.position,
            office: employee.position,
            salary: employee.salary
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"form-group\">\n    <label>Email address</label>\n    <input type=\"email\" class=\"form-control\"  placeholder=\"Enter email\" [(ngModel)]=\"logininfo.email\">\n    \n  </div>\n  <div class=\"form-group\">\n    <label >Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"logininfo.password\">\n  </div>\n \n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("./src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.logininfo = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log(this.logininfo);
        var me = this;
        this.auth.loginWithEmail(this.logininfo.email, this.logininfo.password).then(function (data) {
            console.log(me.auth.authState);
            me.router.navigate(['/contracts']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map