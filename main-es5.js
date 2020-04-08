(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-section\">\n\n    <div class=\"text-center\">\n        <img id=\"profile\" class=\"slide-in-blurred-top\" width=\"300\" alt=\"Angular Logo\" src=\"assets/profile_512.jpg\">\n    </div>\n    \n    <div class=\"tracking-in-expand-fwd-top\">\n      <h1>Ivan Blažević</h1>\n      <div class=\"info-section\">\n        <h2><i class=\"fas fa-map-marker-alt\"></i> Vienna, Austria</h2>\n        <h2><i class=\"fas fa-university\"></i> Software Developer</h2>\n        <h2><i class=\"fas fa-envelope\"></i>&nbsp;<a href=\"mailto:iblazevi@gmail.com\">iblazevi@gmail.com</a></h2>\n        <h2><i class=\"fas fa-phone\"></i> (+43) 664 629 0512</h2>\n      </div>      \n    </div>\n    \n</div>\n\n<p class=\"swing-in-top-fwd\">With over 15 years of experience in software development and working with many different technologies, I have found my niche in frontend development. \n  <br>\n  At 2013 I have joined a startup from Washington DC where I first got introduced to Angular. A year after being in the company I became a lead and main responsible for the frontend architecture, UI implementation, and quality of the product. \n  \n  At January 2018 I joined Palfinger as a part of the IoT team. Very soon I became a lead for UI implementation of the product and moved towards the architecture, improving the communication between multiple teams in terms of code sharing and branding. My greatest passion is UI implementation and frontend in general but I am not foreign with the backend, writing bash scripts, setting up build pipelines or any other non-development work required to ensure reliability and quality of the product. \n  <br>\n  I like a pragmatic and simple approach and I am not a fan of buzzwords or over-engineering. I am always glad to share the knowledge and willing to accept critique and other opinions.</p>\n\n<div class=\"download text-center\">\n  <a target=\"_blank\" href=\"assets/CV.pdf\"><i class=\"fas fa-download\"></i>&nbsp;<span>Download CV</span></a>\n</div>\n\n<div class=\"text-center social\">\n  <app-social icon=\"stack-overflow\" url=\"https://stackoverflow.com/users/1630166/blazh\"></app-social>\n  <app-social icon=\"linkedin\" url=\"https://www.linkedin.com/in/iblazevic\"></app-social>\n  <app-social icon=\"skype\" url=\"skype:blazh985?userinfo\"></app-social>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/social/social.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/social/social.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <a target=\"_blank\" [href]=\"url\">\n    <i class=\"fab fa-{{ icon }}\"></i>\n  </a>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div id=\"router-container\" [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience-item/experience-item.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience-item/experience-item.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"date\">\n    <div>\n      {{ data.date }}\n    </div>\n    <a target=\"_blank\" [href]=\"data.site\">\n      <img class=\"company-logo\" src=\"assets/{{ data.logo }}\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"separator\">\n    <div class=\"line\"></div>\n  </div>\n  <div class=\"content\">\n    <h1>\n      {{ data.title }}\n    </h1>\n    <ul>\n      <li *ngFor=\"let i of data.items\">\n        {{ i }}\n      </li>\n    </ul>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chart-container\">\n    <ngx-charts-bar-vertical \n        [view]=\"view\"\n        [scheme]=\"colorScheme\"\n        [results]=\"single\"\n        [gradient]=\"gradient\"\n        [xAxis]=\"showXAxis\"\n        [yAxis]=\"showYAxis\"\n        [legend]=\"showLegend\"\n        [showXAxisLabel]=\"showXAxisLabel\"\n        [showYAxisLabel]=\"showYAxisLabel\"\n        [showGridLines]=\"showGridLines\"\n        [xAxisLabel]=\"xAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n</div>\n\n<div class=\"swing-in-left-bck\">\n    <app-experience-item [data]=\"e\" *ngFor=\"let e of experiences\"></app-experience-item>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div id=\"logo\" routerLink=\"/about\">\n    <div class=\"profile-image\">\n      <img src=\"assets/profile_124.jpg\" alt=\"profile\">\n    </div>\n    <div id=\"title\">\n      <div>ivan</div>\n      <div>blažević</div>\n    </div>\n  </div>\n\n  <ul>\n    <li>\n      <a routerLink=\"/experience\" routerLinkActive=\"active\"><i class=\"fas fa-briefcase\"></i>Experience</a>\n    </li>\n    <li>\n      <a routerLink=\"/open-source\" routerLinkActive=\"active\"><i class=\"fas fa-file-code\"></i>Open Source</a>\n    </li>\n    <li>\n      <a routerLink=\"/about\" routerLinkActive=\"active\"><i class=\"fas fa-user\"></i>About Me</a>\n    </li>\n  </ul>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/code/code.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/code/code.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-grid\">\n  <div class=\"flex-item\" *ngFor=\"let item of examples;let i = index\">\n    <app-box [link]=\"item.link\" [animationDelay]=\"(0.2 * i)\">\n      <div class=\"box-image-container\">\n        <img [src]=\"item.img\">\n      </div>\n      <span class=\"box-title\">{{ item.title }}</span>\n    </app-box>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/libraries/libraries.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/libraries/libraries.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-grid\">\n  <div class=\"flex-item\" *ngFor=\"let item of items;let i = index\">\n    <app-box [link]=\"item.link\" [animationDelay]=\"isTabSwitched ? (0.2 * i) : (0.2 * i) + 0.4\" [minHeight]=\"92\">\n      <span class=\"box-title\">{{ item.title }}</span>\n      <div class=\"box-description\">{{ item.description }}</div>\n    </app-box>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source-item/open-source-item.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source-item/open-source-item.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h4>Item text</h4>\n  <div>\n    content of the item\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabs-container text-center\">\n    <div>\n        <div class=\"button\" value=\"left\" routerLink=\"libraries\" routerLinkActive=\"active\">\n            libraries\n        </div>    \n        <div class=\"button\" value=\"right\" routerLink=\"code\" routerLinkActive=\"active\">\n            code examples\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/box/box.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/box/box.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a target=\"_blank\" \n  [href]=\"link\"\n  class=\"slide-in-fwd-center\"\n  [style.animationDelay]=\"animationDelay + 's'\"\n  (mouseenter)=\"onHover()\">\n  <div class=\"box\" [style.minHeight]=\"minHeight + 'px'\">\n    <ng-content></ng-content>\n  </div>\n</a>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                        if (e.indexOf(p[i]) < 0)
                            t[p[i]] = s[p[i]];
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/about/about.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/about/about.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header-section {\n  display: flex;\n}\n\nimg#profile {\n  border-radius: 100%;\n}\n\n.tracking-in-expand-fwd-top {\n  margin-left: 20px;\n}\n\n.info-section i {\n  width: 30px;\n  text-align: center;\n}\n\np {\n  font-size: 18px;\n}\n\nh1 {\n  font-size: 4em;\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\n\n.download {\n  padding: 50px 0;\n}\n\n.download a {\n  text-decoration: none;\n}\n\n.social {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FER0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURJQTtFQUNJLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FERUk7RUFDSSxxQkFBQTtBQ0FSOztBRElBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuaW1nI3Byb2ZpbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi50cmFja2luZy1pbi1leHBhbmQtZndkLXRvcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pbmZvLXNlY3Rpb24ge1xuICAgIGkge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5kb3dubG9hZCB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4uc29jaWFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi5oZWFkZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmltZyNwcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnRyYWNraW5nLWluLWV4cGFuZC1md2QtdG9wIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pbmZvLXNlY3Rpb24gaSB7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRvd25sb2FkIHtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuLmRvd25sb2FkIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/about/social/social.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/about/social/social.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\n  width: 50px;\n  margin: 10px;\n  transition: all 0.2s ease-in-out;\n}\ndiv:hover {\n  transform: scale(1.2, 1.2);\n}\na {\n  color: gray;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvYWJvdXQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNESjtBREdJO0VBQ0ksMEJBQUE7QUNEUjtBREtBO0VBQ0ksV0VaYztFRmFkLGVBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbmRpdiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsMS4yKVxuICAgIH1cbn1cblxuYSB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufSIsImRpdiB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuZGl2OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG59XG5cbmEge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiA0MHB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMGY4MWZmO1xuJHNlY29uZGFyeS1jb2xvcjogZ3JheTsiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/about/social/social.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/about/social/social.component.ts ***!
          \**************************************************/
        /*! exports provided: SocialComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function () { return SocialComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SocialComponent = /** @class */ (function () {
                function SocialComponent(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                Object.defineProperty(SocialComponent.prototype, "url", {
                    get: function () {
                        return this.sanitizer.bypassSecurityTrustUrl(this._url);
                    },
                    set: function (value) {
                        this._url = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SocialComponent;
            }());
            SocialComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], SocialComponent.prototype, "icon", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
            ], SocialComponent.prototype, "url", null);
            SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-social',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/social/social.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.component.scss */ "./src/app/about/social/social.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
            ], SocialComponent);
            /***/ 
        }),
        /***/ "./src/app/animations.ts": 
        /*!*******************************!*\
          !*** ./src/app/animations.ts ***!
          \*******************************/
        /*! exports provided: slideInAnimation */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () { return slideInAnimation; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('About => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                        ], { optional: true }),
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Experience => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
                        ], { optional: true }),
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('OpenSource => About', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
                        ], { optional: true }),
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('About => Experience', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
                        ], { optional: true }),
                    ])
                ]),
            ]);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
            /* harmony import */ var _open_source_code_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-source/code/code.component */ "./src/app/open-source/code/code.component.ts");
            /* harmony import */ var _open_source_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-source/libraries/libraries.component */ "./src/app/open-source/libraries/libraries.component.ts");
            /* harmony import */ var _open_source_open_source_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./open-source/open-source.component */ "./src/app/open-source/open-source.component.ts");
            var routes = [
                { path: '', redirectTo: 'experience', pathMatch: 'full' },
                {
                    path: 'experience',
                    component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"],
                    data: {
                        animation: 'Experience'
                    }
                },
                {
                    path: 'open-source',
                    component: _open_source_open_source_component__WEBPACK_IMPORTED_MODULE_7__["OpenSourceComponent"],
                    data: {
                        animation: 'OpenSource'
                    },
                    children: [
                        { path: '', redirectTo: 'libraries', pathMatch: 'full' },
                        {
                            path: 'libraries',
                            component: _open_source_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_6__["LibrariesComponent"],
                        },
                        {
                            path: 'code',
                            component: _open_source_code_code_component__WEBPACK_IMPORTED_MODULE_5__["CodeComponent"],
                        }
                    ]
                },
                {
                    path: 'about',
                    component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                    data: {
                        animation: 'About'
                    }
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#router-container {\n  margin-top: 160px;\n  margin-bottom: 80px;\n  padding: 0 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdXRlci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgcGFkZGluZzogMCA4MHB4O1xufSIsIiNyb3V0ZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIHBhZGRpbmc6IDAgODBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent.prototype.prepareRoute = function (outlet) {
                    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    animations: [
                        _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
            /* harmony import */ var _open_source_open_source_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-source/open-source.component */ "./src/app/open-source/open-source.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience-item/experience-item.component */ "./src/app/experience/experience-item/experience-item.component.ts");
            /* harmony import */ var _open_source_open_source_item_open_source_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./open-source/open-source-item/open-source-item.component */ "./src/app/open-source/open-source-item/open-source-item.component.ts");
            /* harmony import */ var _open_source_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./open-source/libraries/libraries.component */ "./src/app/open-source/libraries/libraries.component.ts");
            /* harmony import */ var _open_source_code_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./open-source/code/code.component */ "./src/app/open-source/code/code.component.ts");
            /* harmony import */ var _shared_components_box_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/box/box.component */ "./src/app/shared/components/box/box.component.ts");
            /* harmony import */ var _about_social_social_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/social/social.component */ "./src/app/about/social/social.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                        _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
                        _open_source_open_source_component__WEBPACK_IMPORTED_MODULE_9__["OpenSourceComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                        _experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceItemComponent"],
                        _open_source_open_source_item_open_source_item_component__WEBPACK_IMPORTED_MODULE_12__["OpenSourceItemComponent"],
                        _open_source_libraries_libraries_component__WEBPACK_IMPORTED_MODULE_13__["LibrariesComponent"],
                        _open_source_code_code_component__WEBPACK_IMPORTED_MODULE_14__["CodeComponent"],
                        _shared_components_box_box_component__WEBPACK_IMPORTED_MODULE_15__["BoxComponent"],
                        _about_social_social_component__WEBPACK_IMPORTED_MODULE_16__["SocialComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/experience/data.ts": 
        /*!************************************!*\
          !*** ./src/app/experience/data.ts ***!
          \************************************/
        /*! exports provided: EXPERIENCES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIENCES", function () { return EXPERIENCES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EXPERIENCES = [
                {
                    title: "Lead Frontend Developer, Platomics GMBH",
                    date: "2019 - present",
                    logo: "platomics.webp",
                    site: "https://www.platomics.com",
                    items: [
                        "Creating HQ prototypes using Figma",
                        "Pipeline integration using docker images on GitLabs",
                        "Leading small frontend team, interviewing candidates",
                        "Ensuring code quality using linters and SonarQube",
                        "Working in the agile process model (Scrum)",
                        "Implementation using Angular 8, NGXS for state management, TestCafe (e2e tests) & JEST (unit tests), Swagger & OpenAPI for communication with backend"
                    ]
                },
                {
                    title: "Lead Frontend Developer, PALFINGER AG",
                    date: "2018 - 2019",
                    logo: "palfinger.svg",
                    site: "https://www.palfinger.com",
                    items: [
                        "UI/UX implementation lead",
                        "Taking care about the code quality by utilizing dedicated tools during the build process, managing build pipelines",
                        "IOT platform implementation, utilize different types of charts, maps customization and presentation of the geodata",
                        "Working in the agile process model (Scrum), occasionally took role of the Scrum master",
                        "Working close with the designers to ensure a generic UX across the platform",
                        "Introducing latest technologies, working on monorepo environment, ensuring code quality with unit & frontend tests",
                        "REST API e2e tests, reactive programming (RxJS, NgRx)"
                    ]
                },
                {
                    title: "Lead Frontend Developer, Aquicore Inc.",
                    date: "2013 - 2016",
                    logo: "aquicore.png",
                    site: "https://aquicore.com",
                    items: [
                        "SaaS enterprise software frontend architect",
                        "Participated in all stages of the product life cycle",
                        "Created/used responsive web frameworks to ensure high standards of the product",
                        "Worked with data visualizations using Flot Charts and Highcharts, developed custom visualizations/charts",
                        "Created mockups/wireframes/HQ designs based on requirements",
                        "Tested front-end code in multiple browsers to ensure cross-browser compatibility, unit and e2e test scripting",
                        "Maintenance/custom development of external web site using Jekyll/Wordpress, performance optimization",
                        "Occasionally worked on backend architecture, technical documentation"
                    ]
                },
                {
                    title: "DevOps, NTH Mobile",
                    date: "2009 - 2013",
                    logo: "nth.png",
                    site: "https://www.nth-mobile.com",
                    items: [
                        "Platform/db administrator, maintenance and troubleshooting, system integration",
                        "Analyzed technical requirements and technical implementation/development/maintenance of mobile services",
                        "Performed complex SQL queries for the purpose of maintenance/debugging, created stored procedures and functions",
                        "Developed software for optimization of service deployment process",
                        "Test automation and product deployment to test/dev/production environments",
                        "Regression testing with JMeter"
                    ]
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/experience/experience-item/experience-item.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/experience/experience-item/experience-item.component.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.container {\n  display: flex;\n}\n\n.container .date {\n  margin-top: 10px;\n  min-width: 150px;\n  text-align: right;\n}\n\n.container .date .company-logo {\n  width: 120px;\n  margin-top: 12px;\n  filter: gray;\n  /* IE6-9 */\n  -webkit-filter: grayscale(100%);\n  /* Chrome 19+ & Safari 6+ */\n}\n\n.container .date .company-logo:hover {\n  filter: none;\n  -webkit-filter: grayscale(0%);\n}\n\n.container .separator {\n  margin: 0 20px;\n  position: relative;\n}\n\n.container .separator .line {\n  position: absolute;\n  top: 0;\n  bottom: 4px;\n  width: 1px;\n  border-right: 4px dotted rgba(0, 0, 0, 0.2);\n}\n\n.container .content h1 {\n  margin-top: 0;\n}\n\n.container li {\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWl0ZW0vZXhwZXJpZW5jZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtaXRlbS9leHBlcmllbmNlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURDUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFBYyxVQUFBO0VBQ2QsK0JBQUE7RUFBaUMsMkJBQUE7QUNHN0M7O0FERlk7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNJaEI7O0FEQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QUNDWjs7QURJUTtFQUNJLGFBQUE7QUNGWjs7QURNSTtFQUNJLGlCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UtaXRlbS9leHBlcmllbmNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZGF0ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgIC5jb21wYW55LWxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheTsgLyogSUU2LTkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIENocm9tZSAxOSsgJiBTYWZhcmkgNisgKi8gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlcGFyYXRvciB7XG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggZG90dGVkIHJnYmEoMCwwLDAsIDAuMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciAuZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhaW5lciAuZGF0ZSAuY29tcGFueS1sb2dvIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmaWx0ZXI6IGdyYXk7XG4gIC8qIElFNi05ICovXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC8qIENocm9tZSAxOSsgJiBTYWZhcmkgNisgKi9cbn1cbi5jb250YWluZXIgLmRhdGUgLmNvbXBhbnktbG9nbzpob3ZlciB7XG4gIGZpbHRlcjogbm9uZTtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG59XG4uY29udGFpbmVyIC5zZXBhcmF0b3Ige1xuICBtYXJnaW46IDAgMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAuc2VwYXJhdG9yIC5saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogNHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQ6IDRweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRhaW5lciAuY29udGVudCBoMSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFpbmVyIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/experience/experience-item/experience-item.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/experience/experience-item/experience-item.component.ts ***!
          \*************************************************************************/
        /*! exports provided: ExperienceItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceItemComponent", function () { return ExperienceItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ExperienceItemComponent = /** @class */ (function () {
                function ExperienceItemComponent() {
                }
                return ExperienceItemComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ExperienceItemComponent.prototype, "data", void 0);
            ExperienceItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-experience-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience-item/experience-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience-item.component.scss */ "./src/app/experience/experience-item/experience-item.component.scss")).default]
                })
            ], ExperienceItemComponent);
            /***/ 
        }),
        /***/ "./src/app/experience/experience.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/experience/experience.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".chart-container {\n  height: 320px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuY2hhcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/experience/experience.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/experience/experience.component.ts ***!
          \****************************************************/
        /*! exports provided: ExperienceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () { return ExperienceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/experience/data.ts");
            var ExperienceComponent = /** @class */ (function () {
                function ExperienceComponent() {
                    this.experiences = _data__WEBPACK_IMPORTED_MODULE_2__["EXPERIENCES"];
                    this.single = [
                        {
                            "name": "Javascript",
                            "value": 12
                        },
                        {
                            "name": "Typescript",
                            "value": 5
                        },
                        {
                            "name": "Angular",
                            "value": 7
                        },
                        {
                            "name": "HTML/CSS",
                            "value": 12
                        },
                        {
                            "name": "JAVA",
                            "value": 3
                        }
                    ];
                    this.view = [700, 300];
                    // options
                    this.showXAxis = true;
                    this.showYAxis = true;
                    this.gradient = false;
                    this.showLegend = false;
                    this.showXAxisLabel = true;
                    this.showGridLines = false;
                    this.showYAxisLabel = true;
                    this.yAxisLabel = 'Years of experience';
                    this.colorScheme = {
                        domain: ['#5AA454', '#A10A28', '#C7B42C', '#0f81ff', '#AAAAAA']
                    };
                }
                return ExperienceComponent;
            }());
            ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-experience',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/experience/experience.component.scss")).default]
                })
            ], ExperienceComponent);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/navbar/navbar.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  background: white;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);\n  z-index: 100;\n  min-width: 1024px;\n}\nnav #title {\n  margin: auto 10px;\n  font-size: 26px;\n  text-align: left;\n  text-transform: capitalize;\n  color: gray;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\nul li {\n  color: gray;\n  text-align: center;\n  margin: 0 24px;\n  display: inline-block;\n}\nul li i {\n  display: block;\n  font-size: 24px;\n  margin-bottom: 5px;\n}\nul li a {\n  color: inherit;\n  text-decoration: none;\n}\nul li a.active {\n  color: #0f81ff;\n}\n#logo {\n  display: flex;\n  cursor: pointer;\n  margin-left: 12px;\n}\n.profile-image {\n  border-radius: 100%;\n  width: 60px;\n  height: 60px;\n  padding: 4px;\n  vertical-align: middle;\n  border: 2px solid #0f81ff;\n}\n.profile-image img {\n  border-radius: 100%;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREo7QURHSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXRXBCVTtBRG1CbEI7QURLQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FESUk7RUFDSSxXRTdCVTtFRjhCVixrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZSO0FESVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRlo7QURLUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0haO0FES1k7RUFDSSxjRTlDQTtBRDJDaEI7QURTQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFdBO0VBQ0ksbUJBQUE7RUFDQSxXQUplO0VBS2YsWUFMZTtFQU1mLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDUko7QURVSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSUiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzJztcblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWluLXdpZHRoOiAxMDI0cHg7XG5cbiAgICAjdGl0bGUge1xuICAgICAgICBtYXJnaW46IGF1dG8gMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgfVxufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgbGkge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgMjRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4jbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbiRwcm9maWxlSW1hZ2VTaXplOiA2MHB4O1xuXG4ucHJvZmlsZS1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogJHByb2ZpbGVJbWFnZVNpemU7XG4gICAgaGVpZ2h0OiAkcHJvZmlsZUltYWdlU2l6ZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcblxuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB6LWluZGV4OiAxMDA7XG4gIG1pbi13aWR0aDogMTAyNHB4O1xufVxubmF2ICN0aXRsZSB7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogZ3JheTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxudWwgbGkge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxudWwgbGkgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbnVsIGxpIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxudWwgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogIzBmODFmZjtcbn1cblxuI2xvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzBmODFmZjtcbn1cbi5wcm9maWxlLWltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiJHByaW1hcnktY29sb3I6ICMwZjgxZmY7XG4kc2Vjb25kYXJ5LWNvbG9yOiBncmF5OyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/open-source/code/code.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/open-source/code/code.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZW4tc291cmNlL2NvZGUvY29kZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/open-source/code/code.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/open-source/code/code.component.ts ***!
          \****************************************************/
        /*! exports provided: CodeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function () { return CodeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CodeComponent = /** @class */ (function () {
                function CodeComponent() {
                    this.examples = [
                        {
                            link: "https://stackblitz.com/edit/angular-maps-custom-markers-pointers",
                            title: "Custom markers for maps",
                            img: "assets/maps.jpg"
                        },
                        {
                            link: "https://github.com/ivanblazevic/cv",
                            title: "This CV as code example",
                            img: "assets/cv_as.jpg"
                        },
                        {
                            link: "https://codepen.io/ivanblazevic/pen/geByqq",
                            title: "Star rating using SVG & CSS",
                            img: "assets/star.png"
                        }
                    ];
                }
                return CodeComponent;
            }());
            CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-code',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/code/code.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.scss */ "./src/app/open-source/code/code.component.scss")).default]
                })
            ], CodeComponent);
            /***/ 
        }),
        /***/ "./src/app/open-source/libraries/data.ts": 
        /*!***********************************************!*\
          !*** ./src/app/open-source/libraries/data.ts ***!
          \***********************************************/
        /*! exports provided: LIBRARIES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIBRARIES", function () { return LIBRARIES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LIBRARIES = [
                {
                    link: "https://www.npmjs.com/package/radix-player",
                    title: "RadixPlayer",
                    description: "Internet radio streamer with web interface. Originally created for raspberryPI but can be installed on any system which runs NodeJS & has audio system :)"
                },
                {
                    link: "https://www.npmjs.com/package/stylelint-regex",
                    title: "Stylelint Regex",
                    description: "Full flexibility for stylelint rule creation using regex"
                },
                {
                    link: "https://www.npmjs.com/package/stylelint-restrict",
                    title: "Stylelint Restrict",
                    description: "Restrict usage of color variables in SASS/SCSS only to certain files"
                },
                {
                    link: "https://www.npmjs.com/package/tslint-prefer-case",
                    title: "TSlint prefer case",
                    description: "TSLint rules for members casing"
                }
            ];
            /***/ 
        }),
        /***/ "./src/app/open-source/libraries/libraries.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/open-source/libraries/libraries.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".box-description {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvb3Blbi1zb3VyY2UvbGlicmFyaWVzL2xpYnJhcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3Blbi1zb3VyY2UvbGlicmFyaWVzL2xpYnJhcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL29wZW4tc291cmNlL2xpYnJhcmllcy9saWJyYXJpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59IiwiLmJveC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/open-source/libraries/libraries.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/open-source/libraries/libraries.component.ts ***!
          \**************************************************************/
        /*! exports provided: LibrariesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrariesComponent", function () { return LibrariesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/open-source/libraries/data.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var LibrariesComponent = /** @class */ (function () {
                function LibrariesComponent(router) {
                    var _this = this;
                    this.router = router;
                    this.isTabSwitched = false;
                    this.items = _data__WEBPACK_IMPORTED_MODULE_2__["LIBRARIES"];
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
                        .subscribe(function (e) {
                        _this.isTabSwitched = e["url"] != '/open-source';
                    });
                }
                return LibrariesComponent;
            }());
            LibrariesComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LibrariesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-libraries',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./libraries.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/libraries/libraries.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./libraries.component.scss */ "./src/app/open-source/libraries/libraries.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], LibrariesComponent);
            /***/ 
        }),
        /***/ "./src/app/open-source/open-source-item/open-source-item.component.scss": 
        /*!******************************************************************************!*\
          !*** ./src/app/open-source/open-source-item/open-source-item.component.scss ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 14px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-bottom: 14px;\n}\n.container h4 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvb3Blbi1zb3VyY2Uvb3Blbi1zb3VyY2UtaXRlbS9vcGVuLXNvdXJjZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGVuLXNvdXJjZS9vcGVuLXNvdXJjZS1pdGVtL29wZW4tc291cmNlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9vcGVuLXNvdXJjZS9vcGVuLXNvdXJjZS1pdGVtL29wZW4tc291cmNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIFxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5jb250YWluZXIgaDQge1xuICBtYXJnaW4tdG9wOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/open-source/open-source-item/open-source-item.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/open-source/open-source-item/open-source-item.component.ts ***!
          \****************************************************************************/
        /*! exports provided: OpenSourceItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSourceItemComponent", function () { return OpenSourceItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OpenSourceItemComponent = /** @class */ (function () {
                function OpenSourceItemComponent() {
                }
                OpenSourceItemComponent.prototype.ngOnInit = function () {
                };
                return OpenSourceItemComponent;
            }());
            OpenSourceItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-open-source-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-source-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source-item/open-source-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-source-item.component.scss */ "./src/app/open-source/open-source-item/open-source-item.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], OpenSourceItemComponent);
            /***/ 
        }),
        /***/ "./src/app/open-source/open-source.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/open-source/open-source.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tabs-container {\n  margin-bottom: 60px;\n}\n\n.button {\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 20px;\n  font-weight: bold;\n  text-transform: capitalize;\n  cursor: pointer;\n  margin: 0 10px;\n}\n\n.button.active {\n  color: #0f81ff;\n  box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.15), 0 1px 2px 0 rgba(60, 64, 67, 0.3);\n}\n\n.button:hover {\n  color: #0f81ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvb3Blbi1zb3VyY2Uvb3Blbi1zb3VyY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29wZW4tc291cmNlL29wZW4tc291cmNlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JsYXpoL0RvY3VtZW50cy9HaXRIdWIvY3Yvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0ksY0VoQlE7RUZpQlIsbUZBQUE7QUNEUjs7QURJSTtFQUNJLGNFckJRO0FEbUJoQiIsImZpbGUiOiJzcmMvYXBwL29wZW4tc291cmNlL29wZW4tc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4udGFicy1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LDAuMTUpLCAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LDAuMyk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG59IiwiLnRhYnMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uYnV0dG9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMGY4MWZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSksIDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zKTtcbn1cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzBmODFmZjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzBmODFmZjtcbiRzZWNvbmRhcnktY29sb3I6IGdyYXk7Il19 */");
            /***/ 
        }),
        /***/ "./src/app/open-source/open-source.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/open-source/open-source.component.ts ***!
          \******************************************************/
        /*! exports provided: OpenSourceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSourceComponent", function () { return OpenSourceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OpenSourceComponent = /** @class */ (function () {
                function OpenSourceComponent() {
                }
                OpenSourceComponent.prototype.ngOnInit = function () {
                };
                return OpenSourceComponent;
            }());
            OpenSourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-open-source',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-source.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/open-source/open-source.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-source.component.scss */ "./src/app/open-source/open-source.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], OpenSourceComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/box/box.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/shared/components/box/box.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".box {\n  transition: all 0.15s ease-in-out;\n}\n.box:hover {\n  transform: scale(1.1);\n}\n.slide-in-fwd-center {\n  -webkit-animation: slide-in-fwd-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-fwd-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2019-5-26 2:28:59\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-fwd-center\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-fwd-center {\n  0% {\n    transform: translateZ(-1400px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateZ(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibGF6aC9Eb2N1bWVudHMvR2l0SHViL2N2L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7QURBSTtFQUNFLHFCQUFBO0FDRU47QURFQTtFQUNDLHFGQUFBO0VBQ1EsNkVBQUE7QUNDVDtBREdBOzs7bURBQUE7QUFLQTs7OztFQUFBO0FBS0M7RUFDRztJQUVVLDhCQUFBO0lBQ1IsVUFBQTtFQ0RKO0VER0U7SUFFVSx3QkFBQTtJQUNSLFVBQUE7RUNESjtBQUNGO0FER0U7RUFDRTtJQUVVLDhCQUFBO0lBQ1IsVUFBQTtFQ0RKO0VER0U7SUFFVSx3QkFBQTtJQUNSLFVBQUE7RUNESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbn1cblxuLnNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tZndkLWNlbnRlciAwLjZzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLWZ3ZC1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktNS0yNiAyOjI4OjU5XG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtaW4tZndkLWNlbnRlclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAiLCIuYm94IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLmJveDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tZndkLWNlbnRlciAwLjZzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLWZ3ZC1jZW50ZXIgMC42cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktNS0yNiAyOjI4OjU5XG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWluLWZ3ZC1jZW50ZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWZ3ZC1jZW50ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tZndkLWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTE0MDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/box/box.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/components/box/box.component.ts ***!
          \********************************************************/
        /*! exports provided: BoxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function () { return BoxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
            /* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
            var BoxComponent = /** @class */ (function () {
                function BoxComponent() {
                    this.sound = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
                        src: ['assets/sounds/ui_tap-variant-01.wav']
                    });
                }
                BoxComponent.prototype.onHover = function () {
                    this.sound.play();
                };
                return BoxComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], BoxComponent.prototype, "link", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
            ], BoxComponent.prototype, "animationDelay", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
            ], BoxComponent.prototype, "minHeight", void 0);
            BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-box',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/box/box.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./box.component.scss */ "./src/app/shared/components/box/box.component.scss")).default]
                })
            ], BoxComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/blazh/Documents/GitHub/cv/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map