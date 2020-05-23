import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
import axios from 'axios';
let SigninComponent = class SigninComponent {
    constructor(router, encrypteService, httpService) {
        this.router = router;
        this.encrypteService = encrypteService;
        this.httpService = httpService;
        this.username = '';
        this.password = '';
    }
    ngOnInit() {
    }
    userLogin() {
        this.loginValidation();
    }
    loginValidation() {
        if (!this.username || !this.password) {
            let loginWarn = $('#loginWarn');
            loginWarn.addClass('fa fa-times');
            loginWarn.text('username or password can not be empty');
            loginWarn.css('color', 'red');
            return false;
        }
        axios
            .post("http://localhost:7001/user/signin", {
            username: this.username,
            password: this.password
        })
            .then((response) => {
            if (response.data != null) {
                console.log(response);
                if (response.data.resetPwd == true) {
                    this.router.navigateByUrl(this.router.createUrlTree(["/user/reset/pwd"], {
                        queryParams: {
                            username: this.username
                        }
                    }));
                }
                if (response.data.userType == "admin") {
                    this.router.navigateByUrl(this.router.createUrlTree(["/admin/land"], {
                        queryParams: {
                            username: this.username
                        }
                    }));
                }
                if (response.data.userType == "user") {
                    this.router.navigateByUrl(this.router.createUrlTree(["/user/land"], {
                        queryParams: {
                            username: this.username
                        }
                    }));
                }
            }
        })
            .catch(error => {
            console.log(error);
        });
        return false;
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.css']
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map