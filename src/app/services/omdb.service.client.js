"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var environment_1 = require("../../environments/environment");
var baseUrl = environment_1.environment.baseUrl;
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
    core_1.Injectable()
], OmdbServiceClient);
exports.OmdbServiceClient = OmdbServiceClient;
//# sourceMappingURL=omdb.service.client.js.map