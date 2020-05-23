import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
let EncryptService = class EncryptService {
    constructor() {
        this.serectKey = 'ibmfullstackdeve';
    }
    aesEncrypt(data) {
        return crypto.AES.encrypt(data, this.serectKey);
    }
    aesDecrypt(encrypted) {
        return crypto.AES.decrypt(encrypted, this.serectKey).toString(crypto.enc.Utf8);
    }
};
EncryptService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], EncryptService);
export { EncryptService };
//# sourceMappingURL=encrypt.service.js.map