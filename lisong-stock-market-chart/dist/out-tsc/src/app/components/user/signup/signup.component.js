import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let SignupComponent = class SignupComponent {
    constructor(router, encryptService, emailValidationService) {
        this.router = router;
        this.encryptService = encryptService;
        this.emailValidationService = emailValidationService;
        this.username = '';
        this.placeholder = 'email for signup...';
        this.encryptKey = 'ibmfullstackdeve';
    }
    ngOnInit() {
    }
    usernameBlur() {
        this.placeholder = 'input signup email';
        this.emailValidationService.emailValidation(this.username);
    }
    submit() {
        if (this.emailValidationService.emailValidation(this.username)) {
            axios.post('http://localhost:7001/user/veri/code/', {
                username: this.username
            })
                .then((response) => {
                console.log(response);
                alert("2");
                this.prefixCode = response.data.prefixCode;
                // let encryptedPrefixCode = this.encryptService.aesEncrypt(this.prefixCode)
                this.suffixCode = response.data.suffixCode;
                // let encryptedSuffixCode = this.encryptService.aesEncrypt(this.suffixCode)
                alert("3");
                this.router.navigateByUrl(this.router.createUrlTree(['/user/signup/verifycode'], { queryParams: {
                        'prefixCode': this.prefixCode,
                        'suffixCode': this.suffixCode,
                        'username': this.username
                    }
                }));
            })
                .catch((error) => {
                console.log(error);
            });
        }
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map