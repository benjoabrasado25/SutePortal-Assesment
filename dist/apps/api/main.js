(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maintenance_request_maintenance_request_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maintenance-request/maintenance-request.module */ "./apps/api/src/maintenance-request/maintenance-request.module.ts");
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");





let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_maintenance_request_maintenance_request_module__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequestModule"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_3__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */




function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./apps/api/src/maintenance-request/maintenance-request.controller.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/maintenance-request/maintenance-request.controller.ts ***!
  \****************************************************************************/
/*! exports provided: MaintenanceRequestController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRequestController", function() { return MaintenanceRequestController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _suiteportal_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @suiteportal/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _maintenance_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-request.service */ "./apps/api/src/maintenance-request/maintenance-request.service.ts");
var _a, _b, _c;




let MaintenanceRequestController = class MaintenanceRequestController {
    constructor(maintenanceRequestService) {
        this.maintenanceRequestService = maintenanceRequestService;
        //
    }
    createMaintenanceRequest(maintenanceRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.name)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid name');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.unitNumber)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid unit number');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.email)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid unit email');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.summary)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid summary');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.serviceType)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid Service Type');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.details)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a valid unit details');
            }
            maintenanceRequest["close"] = false;
            return yield this.maintenanceRequestService.createMaintenanceRequest(maintenanceRequest);
        });
    }
    loginWithEmailAndPassword(maintenanceRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.email)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Must provide a email name!');
            }
            if (!(maintenanceRequest === null || maintenanceRequest === void 0 ? void 0 : maintenanceRequest.password)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Password Cannot be empty!');
            }
            return yield this.maintenanceRequestService.loginWithEmailAndPassword(maintenanceRequest.email, maintenanceRequest.password);
        });
    }
    getMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!id) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('No id provided');
            }
            return yield this.maintenanceRequestService.getMaintenanceRequest(id);
        });
    }
    closeMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!id) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('No id provided');
            }
            return yield this.maintenanceRequestService.closeMaintenanceRequest(id);
        });
    }
    getMaintenanceRequestList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintenanceRequestService.getMaintenanceRequestList();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _suiteportal_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequest"] !== "undefined" && _suiteportal_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequest"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], MaintenanceRequestController.prototype, "createMaintenanceRequest", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/login'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _suiteportal_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequest"] !== "undefined" && _suiteportal_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequest"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], MaintenanceRequestController.prototype, "loginWithEmailAndPassword", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], MaintenanceRequestController.prototype, "getMaintenanceRequest", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('/:id/close'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], MaintenanceRequestController.prototype, "closeMaintenanceRequest", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], MaintenanceRequestController.prototype, "getMaintenanceRequestList", null);
MaintenanceRequestController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('maintenance-requests'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _maintenance_request_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRequestService"] !== "undefined" && _maintenance_request_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRequestService"]) === "function" ? _c : Object])
], MaintenanceRequestController);



/***/ }),

/***/ "./apps/api/src/maintenance-request/maintenance-request.dao.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/maintenance-request/maintenance-request.dao.ts ***!
  \*********************************************************************/
/*! exports provided: MaintenanceRequestDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRequestDao", function() { return MaintenanceRequestDao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lowdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lowdb */ "lowdb");
/* harmony import */ var lowdb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lowdb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lowdb/adapters/FileSync */ "lowdb/adapters/FileSync");
/* harmony import */ var lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_4__);





const adapter = new lowdb_adapters_FileSync__WEBPACK_IMPORTED_MODULE_3__('./db/maint-requests.json');
const db = lowdb__WEBPACK_IMPORTED_MODULE_2__(adapter);
db.defaults({ requests: [] }).write();
let MaintenanceRequestDao = class MaintenanceRequestDao {
    get collection() {
        return db.get('requests');
    }
    get users_collection() {
        return db.get('users');
    }
    constructor() {
        //
    }
    insertNewRequest(maintenanceRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = { id: nanoid__WEBPACK_IMPORTED_MODULE_4__["nanoid"](10) };
            yield this.collection
                .push(Object.assign(Object.assign(Object.assign({}, id), maintenanceRequest), { submittedAt: new Date() }))
                .write();
            return id;
        });
    }
    closeMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.collection.chain().find({ id: id }).assign({ close: true }).write();
        });
    }
    loginWithEmailAndPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = yield this.users_collection.find({ email: email }).value();
            console.log(user, password);
            if (user["password"] === password) {
                return { user };
            }
            else {
                return {
                    message: "login failed!"
                };
            }
        });
    }
    getMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.collection.find({ id }).value();
        });
    }
    getMaintenanceRequestList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.collection.value();
        });
    }
};
MaintenanceRequestDao = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MaintenanceRequestDao);



/***/ }),

/***/ "./apps/api/src/maintenance-request/maintenance-request.module.ts":
/*!************************************************************************!*\
  !*** ./apps/api/src/maintenance-request/maintenance-request.module.ts ***!
  \************************************************************************/
/*! exports provided: MaintenanceRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRequestModule", function() { return MaintenanceRequestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maintenance_request_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-request.controller */ "./apps/api/src/maintenance-request/maintenance-request.controller.ts");
/* harmony import */ var _maintenance_request_dao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-request.dao */ "./apps/api/src/maintenance-request/maintenance-request.dao.ts");
/* harmony import */ var _maintenance_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maintenance-request.service */ "./apps/api/src/maintenance-request/maintenance-request.service.ts");





let MaintenanceRequestModule = class MaintenanceRequestModule {
};
MaintenanceRequestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [],
        controllers: [_maintenance_request_controller__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequestController"]],
        providers: [
            _maintenance_request_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceRequestService"],
            _maintenance_request_dao__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRequestDao"],
        ],
    })
], MaintenanceRequestModule);



/***/ }),

/***/ "./apps/api/src/maintenance-request/maintenance-request.service.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/maintenance-request/maintenance-request.service.ts ***!
  \*************************************************************************/
/*! exports provided: MaintenanceRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRequestService", function() { return MaintenanceRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maintenance_request_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-request.dao */ "./apps/api/src/maintenance-request/maintenance-request.dao.ts");
var _a;



let MaintenanceRequestService = class MaintenanceRequestService {
    constructor(maintReqDao) {
        this.maintReqDao = maintReqDao;
        //
    }
    createMaintenanceRequest(maintenanceRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintReqDao.insertNewRequest(maintenanceRequest);
        });
    }
    getMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintReqDao.getMaintenanceRequest(id);
        });
    }
    getMaintenanceRequestList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintReqDao.getMaintenanceRequestList();
        });
    }
    loginWithEmailAndPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintReqDao.loginWithEmailAndPassword(email, password);
        });
    }
    closeMaintenanceRequest(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.maintReqDao.closeMaintenanceRequest(id);
        });
    }
};
MaintenanceRequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _maintenance_request_dao__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequestDao"] !== "undefined" && _maintenance_request_dao__WEBPACK_IMPORTED_MODULE_2__["MaintenanceRequestDao"]) === "function" ? _a : Object])
], MaintenanceRequestService);



/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! exports provided: ServiceType, ALL_SERVICE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["ServiceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_SERVICE_TYPES", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["ALL_SERVICE_TYPES"]; });




/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! exports provided: ServiceType, ALL_SERVICE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_SERVICE_TYPES", function() { return ALL_SERVICE_TYPES; });
var ServiceType;
(function (ServiceType) {
    ServiceType["Electrical"] = "electrical";
    ServiceType["General"] = "general";
    ServiceType["PestControl"] = "pest-control";
    ServiceType["Plumbing"] = "plumbing";
})(ServiceType || (ServiceType = {}));
const ALL_SERVICE_TYPES = [
    ServiceType.Electrical,
    ServiceType.General,
    ServiceType.PestControl,
    ServiceType.Plumbing,
];


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benjoabrasado/Documents/GitHub/Others/SutePortal-Assesment/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "lowdb":
/*!************************!*\
  !*** external "lowdb" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lowdb");

/***/ }),

/***/ "lowdb/adapters/FileSync":
/*!******************************************!*\
  !*** external "lowdb/adapters/FileSync" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lowdb/adapters/FileSync");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map