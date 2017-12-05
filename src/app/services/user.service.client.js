"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var environment_1 = require("../../environments/environment");
var baseUrl = environment_1.environment.baseUrl;
var UserServiceClient = (function () {
    function UserServiceClient(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = environment_1.environment.baseUrl;
        this.options = new http_1.RequestOptions();
        this.api = {
            'findUserByName': this.findUserByName
        };
    }
    UserServiceClient.prototype.findUserByName = function (username) {
        this.options.withCredentials = true;
        return this.http.post(baseUrl + 'user/searchName', {});
    };
    return UserServiceClient;
}());
UserServiceClient = __decorate([
    core_1.Injectable()
], UserServiceClient);
exports.UserServiceClient = UserServiceClient;
