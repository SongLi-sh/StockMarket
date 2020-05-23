import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import axios from 'axios';
let HttpService = class HttpService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:9000/ibm/',
            timeout: 2000
        });
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.instance.get(url);
                return res.data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.instance.post(url, data);
                return res.data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map