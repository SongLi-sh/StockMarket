import { __decorate } from "tslib";
import { Component } from '@angular/core';
let VerifyCodeComponent = class VerifyCodeComponent {
    constructor(router, activeRoute, encrptService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.encrptService = encrptService;
        this.username = '';
        this.digit6 = '';
        this.placeholder = '6 digits code';
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            //let encryptedPrefixCode = params['prefixCode']
            //this.prefixCode = this.encrptService.aesDecrypt(encryptedPrefixCode)
            this.prefixCode = params['prefixCode'];
            // let encryptedSuffixCode = params['suffixCode']
            // this.suffixCode = this.encrptService.aesDecrypt(encryptedSuffixCode)
            this.suffixCode = params['suffixCode'];
            this.username = params['username'];
        });
    }
    digit6Focus() {
        this.placeholder = '';
    }
    didit6Blur() {
        this.placeholder = '6 gigits code';
    }
    verify() {
        if (this.digit6 == this.suffixCode) {
            this.router.navigateByUrl(this.router.createUrlTree([
                '/user/signup/submitpassword'
            ], {
                queryParams: {
                    'username': this.username
                }
            }));
        }
        else {
            console.log('verfiy failed');
        }
    }
};
VerifyCodeComponent = __decorate([
    Component({
        selector: 'app-verify-code',
        templateUrl: './verify-code.component.html',
        styleUrls: ['./verify-code.component.css']
    })
], VerifyCodeComponent);
export { VerifyCodeComponent };
//# sourceMappingURL=verify-code.component.js.map