webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicemeumPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link_we_link_we__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Http} from '@angular/http';

var DevicemeumPage = (function () {
    function DevicemeumPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.i = '';
        this.devicetypename = '';
        this.datas = [{ 'name': '刘聪', 'code': 'hsf1', 'id': '12345' }, { 'name': '刘聪1', 'code': 'hsf2', 'id': '12345' }, { 'name': '刘聪', 'code': 'hsf', 'id': '12345' }];
    }
    DevicemeumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicemeumPage');
    };
    DevicemeumPage.prototype.backlogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    DevicemeumPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    };
    // query(Object){
    //   this.http.get(`http://192.168.1.7:8088/gdy1/opt/QueryHeadQRCodeByOptCode`)
    //     .map(res => res.json()) 
    //     .subscribe(data => {
    //       if (data) this.members = data; 
    //     });
    //     console.log(this.members);
    // }
    DevicemeumPage.prototype.modify = function (Object) {
        this.datas[0].name = Object;
    };
    DevicemeumPage.prototype.add = function (data) {
        this.i = data;
        console.log(data);
        // this.datas.pop();
    };
    DevicemeumPage.prototype.remove = function (id) {
        this.datas.pop();
    };
    DevicemeumPage.prototype.oltquery = function () {
        this.devicetypename = "OLT";
    };
    DevicemeumPage.prototype.obdquery = function () {
        this.devicetypename = "OBD";
    };
    DevicemeumPage.prototype.dpquery = function () {
        this.devicetypename = "DP";
    };
    DevicemeumPage.prototype.linkingwe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__link_we_link_we__["a" /* LinkWePage */]);
    };
    DevicemeumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devicemeum',template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/devicemeum/devicemeum.html"*/'<ion-content >\n\n<ion-grid class="grid-basic-page">\n\n  <ion-row>\n      <ion-col col-9 push-3>  \n      <div>    \n          <button ion-button   clear small (click)="oltquery()">OLT设备</button>\n      </div>\n    </ion-col>\n\n    <ion-col col-3 pull-9>\n      <div>\n         <ion-icon name="people" color="secondary" ></ion-icon> \n      </div>\n    </ion-col>\n  </ion-row>\n\n       <ion-row>\n      <ion-col col-9 push-3>\n        <div>\n        <button ion-button   clear small (click)="obdquery()">OBD设备</button>\n        </div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>\n        <ion-col><ion-icon name="person"  color="bright"></ion-icon>\n        </ion-col>\n        </div>\n      </ion-col>\n     </ion-row>\n\n      <ion-row>\n       <ion-col col-9 push-3>\n        <div>\n          <button ion-button   clear small (click)="dpquery()">DP设备</button>\n        </div>\n       </ion-col>\n       <ion-col col-3 pull-9>\n         <div>\n           <ion-col>\n            <ion-icon name="contact" color="danger"></ion-icon>\n          </ion-col>\n         </div>\n        </ion-col>\n       </ion-row>\n</ion-grid>\n\n\n <div class="grid-basic-page">\n  \n  <div><h1>{{devicetypename}}设备展示表</h1></div>\n  <div class="row">\n    <div class="col-md-6">\n      <label>编码：</label>\n      <input type="text" id="code" sise="2">\n    </div>\n    <div class="col-md-6">\n      <label>名称：</label>\n      <input type="text" id="name" sise="2">\n    </div>\n  </div>\n   <div class="row">\n    <div class="col-md-6">\n      <label>&nbsp;&nbsp;&nbsp;&nbsp;ID：</label>\n      <input type="text" id="id" class="ID">\n    </div>\n    <div class="col-md-6">\n      <button ion-button  clear small (click)=\'query()\'>查询</button>\n      <button ion-button  clear small (click)="add(\'4A\')">新增</button>\n    </div>\n  </div>\n      \n  <table class="table">  \n        <thead>  \n            <tr><th>设备编码</th><th>设备名称</th><th>设备描述</th><th>操作</th></tr>  \n        </thead>  \n        <tbody>  \n          <!-- (click)="openModal({charNum: 1})" -->\n                <tr *ngFor="let item of datas" (click)="openModal({charNum: 0})">\n                <td>{{item.name}}</td>\n                <td>{{item.code}}</td>\n                <td>{{item.id}}</td>\n                <td><button ion-button small>详情</button><button ion-button small (click)="modify(item.code)">修改</button><button ion-button color="danger" small (click)="remove(item.id)">删除</button>\n                </td>   \n          </tr> \n                \n        </tbody>  \n    </table>\n</div>\n\n\n\n\n  <ion-fab top right edge class="fabs-basic">\n    <button ion-fab color="vibrant" mini ><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n    \n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      \n      <button ion-fab (click)=\'linkingwe()\'><ion-icon name="people" ></ion-icon></button>\n\n      <button ion-fab color="danger" (click)=\'backlogin()\'><ion-icon name="arrow-back"></ion-icon></button>\n    </ion-fab-list>\n</ion-fab> \n\n\n</ion-content>\n\n     \n'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/devicemeum/devicemeum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], DevicemeumPage);
    return DevicemeumPage;
}());

var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: '编码', note: 'F23234498790' },
                    { title: '名称', note: 'xxxx名称' },
                    { title: 'ID', note: '100042472429429429' },
                    { title: '创建时间', note: '20171120' },
                    { title: '创建人', note: '刘聪' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage.prototype.ngOnInit = function () { };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/devicemeum/modal-content.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      设备属性\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <!-- <ion-avatar item-start>\n          <img src="{{character.image}}">\n        </ion-avatar> -->\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n\n      <ion-item *ngFor="let item of character[\'items\']">\n       <!--  <div class="row">\n          <div class="col-md-6">{{item.title}}</div>\n          <div class="col-md-6">{{item.note}}</div>\n\n        </div> -->\n        <ion-note item-start>\n          {{item.title}}\n        </ion-note>\n        \n        <ion-note item-end>\n          {{item.note}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/devicemeum/modal-content.html"*/,
            template: "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"{{character.image}}\">\n        </ion-avatar>\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n      <ion-item *ngFor=\"let item of character['items']\">\n        {{item.title}}\n        <ion-note item-end>\n          {{item.note}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=devicemeum.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkWePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LinkWePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LinkWePage = (function () {
    function LinkWePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LinkWePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LinkWePage');
    };
    LinkWePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-link-we',template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/link-we/link-we.html"*/'<!--\n  Generated template for the LinkWePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title color="secondary">关于我们</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n<p>请联系电信资源中心内部IT人员</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/link-we/link-we.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LinkWePage);
    return LinkWePage;
}());

//# sourceMappingURL=link-we.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/devicemeum/devicemeum.module": [
		276,
		3
	],
	"../pages/link-we/link-we.module": [
		277,
		2
	],
	"../pages/login/login.module": [
		278,
		1
	],
	"../pages/olt/olt.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);
//ionic 入口文件 正常不用管


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_devicemeum_devicemeum__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_link_we_link_we__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_leftmeum_leftmeum__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(275);
//根模块，告诉ionic 怎么组装应用
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//引入angular 以及ionic 的系统模块



//引入根组件

//自定义组件
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';





//ionic打包成app以后配置启动画面，以及导航条的服务


// import {Http} from '@angular/http';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_devicemeum_devicemeum__["a" /* DevicemeumPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_link_we_link_we__["a" /* LinkWePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_devicemeum_devicemeum__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_leftmeum_leftmeum__["a" /* BasicPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    statusbarPadding: true,
                }, {
                    links: [
                        { loadChildren: '../pages/devicemeum/devicemeum.module#DevicemeumPageModule', name: 'DevicemeumPage', segment: 'devicemeum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/link-we/link-we.module#LinkWePageModule', name: 'LinkWePage', segment: 'link-we', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/olt/olt.module#OltPageModule', name: 'OltPage', segment: 'olt', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_devicemeum_devicemeum__["a" /* DevicemeumPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_leftmeum_leftmeum__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_link_we_link_we__["a" /* LinkWePage */],
                // OltPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_devicemeum_devicemeum__["b" /* ModalContentPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_leftmeum_leftmeum__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//根组件






var MyApp = (function () {
    function MyApp(platform, config) {
        this.platform = platform;
        this.config = config;
        this.isProductionMode = true;
        this.pages = [
            { title: '设备点管理', component: __WEBPACK_IMPORTED_MODULE_3__pages_leftmeum_leftmeum__["a" /* BasicPage */] },
            { title: '光缆段管理', component: __WEBPACK_IMPORTED_MODULE_3__pages_leftmeum_leftmeum__["b" /* PageOne */] },
            { title: '电缆段管理2', component: __WEBPACK_IMPORTED_MODULE_3__pages_leftmeum_leftmeum__["d" /* PageTwo */] },
            { title: 'xxx管理3', component: __WEBPACK_IMPORTED_MODULE_3__pages_leftmeum_leftmeum__["c" /* PageThree */] }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
    }
    MyApp.prototype.openPage = function (p) {
        console.log(p);
        this.content.setRoot(p.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Menu */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Menu */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n \n<!-- <img src="assets/img/android-statusbar.png" *ngIf="!isLab" class="statusbar-img statusbar-img-md">\n<img src="assets/img/ios-statusbar.png" *ngIf="!isLab" class="statusbar-img statusbar-img-ios">\n<img src="assets/img/wp-statusbar.png" *ngIf="!isLab" class="statusbar-img statusbar-img-wp"> -->\n\n <ion-menu [content]="content" >\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>菜单</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n <ion-content> \n    <ion-list *ngIf="isProductionMode">\n      <button ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">\n      	 <ion-note item-start>\n          {{p.title}}\n        </ion-note>\n        </button>\n\n      <button ion-item menuClose detail-none>\n      	 <ion-note item-start>\n          关闭菜单栏\n        </ion-note>\n      </button>\n    </ion-list>\n  </ion-content>\n </ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n<!--  <div *ngIf="!isProductionMode">\n  <ion-fab left middle>\n    <button ion-fab color="light" (click)="previousSection()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab right middle>\n    <button ion-fab color="light" (click)="nextSection()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</div>-->'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leftmeum_leftmeum__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { appRouter} from '../../app/app.routes'
// import {Http} from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function () {
        // this.http.get(`http://192.168.1.7:8088/gdy1/opt/QueryHeadQRCodeByOptCode`)
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__leftmeum_leftmeum__["a" /* BasicPage */]);
        // this.navCtrl.push(BasicPage);
        // this.navCtrl.;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<p align="center">电信资源APP</p><br><br>\n     <div class="container" id="logincontainer" > \n     <form role="form">\n         <div class="form-group">\n             <span class="glyphicon glyphicon-user" aria-hidden="true" ></span>\n             <label for="name">username</label>\n             <div class="col-md-10" >\n                 <input type="text" class="form-control" id="name" size="10" placeholder="input your name">\n             </div>\n         </div> \n         <div class="form-group">\n             <span class="glyphicon glyphicon-tree-conifer" aria-hidden="true" ></span>\n              <label for="password">password</label>\n              <div class="col-md-10">\n                 <input type="password" class="form-control" id="password" size="10" placeholder="input your password">\n             </div>\n         </div> \n         <div class="form-group" >\n                 <div class="col-md-0.2">\n                     <span class="glyphicon glyphicon-hand-right" aria-hidden="true" id="handlelabel"></span>\n                 </div>\n                 <div class="col-md-5" id="message">\n                     \n                     <button ion-button color="secondary"(click)="login()">登录</button>\n\n                     <button type="button" class="btn btn-warning" >\n                         <span class="glyphicon glyphicon-phone-alt" aria-hidden="true" ></span>  注册\n                     </button>\n                     <button type="button" class="btn btn-warning" >\n                         <span class="glyphicon glyphicon-phone-alt" aria-hidden="true" ></span>  忘记密码\n                     </button>\n                 </div>\n         </div> \n     </form>\n     </div>'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PageTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PageThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicPage = (function () {
    function BasicPage(app, menu, platform) {
        this.platform = platform;
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/leftmeum/deviceContain.html"*/'<ion-header >\n  <ion-navbar >\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      设备点管理界面\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding >\n  <page-devicemeum></page-devicemeum>\n</ion-content>'/*ion-inline-end:"/Users/liucong/Desktop/product/front/deviceManage/src/pages/leftmeum/deviceContain.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* MenuController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */]) === "function" && _c || Object])
    ], BasicPage);
    return BasicPage;
    var _a, _b, _c;
}());

var PageOne = (function () {
    function PageOne() {
    }
    PageOne = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      \u5149\u7F06\u6BB5\u754C\u9762\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<p>welecome to liucong<p>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageOne);
    return PageOne;
}());

var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      \u7535\u7F06\u6BB5\u754C\u9762\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageTwo);
    return PageTwo;
}());

var PageThree = (function () {
    function PageThree() {
    }
    PageThree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      xxx\u754C\u9762\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageThree);
    return PageThree;
}());

//# sourceMappingURL=leftmeum.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map