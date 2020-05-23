import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
import Axios from 'axios';
let SubmitPasswordComponent = class SubmitPasswordComponent {
    constructor(router, activateRouter) {
        this.router = router;
        this.activateRouter = activateRouter;
        this.username = '';
        this.password = '';
        this.password2 = '';
        this.isPolicyAgreed = false;
        this.signupDisabled = true;
    }
    ngOnInit() {
        this.activateRouter.queryParams.subscribe((params) => {
            this.username = params['username'];
        });
    }
    signup() {
        alert("signup");
        if (this.isPolicyAgreed && this.password == this.password2) {
            Axios.post('http://localhost:7001/user/signup/pwd', {
                username: this.username,
                password: this.password
            })
                .then((response) => {
                this.router.navigateByUrl('/user/signin');
            });
        }
        else {
            var regWarning = $('#regWarning');
            regWarning.addClass('fa fa-times');
            regWarning.text('password is not same');
            regWarning.css('color', 'red');
        }
    }
};
SubmitPasswordComponent = __decorate([
    Component({
        selector: 'app-submit-password',
        templateUrl: './submit-password.component.html',
        styleUrls: ['./submit-password.component.css']
    })
], SubmitPasswordComponent);
export { SubmitPasswordComponent };
//# sourceMappingURL=submit-password.component.js.map