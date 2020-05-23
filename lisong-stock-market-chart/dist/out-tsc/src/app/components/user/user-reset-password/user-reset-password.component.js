import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let UserResetPasswordComponent = class UserResetPasswordComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = '';
        this.newPwd = '';
        this.newPwd2 = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.username = params['username'];
        });
    }
    reset() {
        if (this.newPwd.length > 0 && this.newPwd2.length > 0) {
            if (this.newPwd == this.newPwd2) {
                axios.put("http://localhost:7001/user/pwd/", {
                    username: this.username,
                    password: this.newPwd
                })
                    .then((response) => {
                    this.router.navigateByUrl('user/signin');
                })
                    .catch((error) => {
                    console.log(error);
                });
            }
            else {
                var regiWarn = $('#regiWarn');
                regiWarn.addClass('fa fa-times');
                regiWarn.text('password inconsistent');
                regiWarn.css('color', 'red');
            }
        }
        else {
            var regiWarn = $('#regiWarn');
            regiWarn.addClass('fa fa-times');
            regiWarn.text('password could not blank');
            regiWarn.css('color', 'red');
        }
    }
};
UserResetPasswordComponent = __decorate([
    Component({
        selector: 'app-user-reset-password',
        templateUrl: './user-reset-password.component.html',
        styleUrls: ['./user-reset-password.component.css']
    })
], UserResetPasswordComponent);
export { UserResetPasswordComponent };
//# sourceMappingURL=user-reset-password.component.js.map