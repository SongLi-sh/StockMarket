import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let UserProfileComponent = class UserProfileComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = '';
        this.contactNo = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.username = params['username'];
        });
    }
    update() {
        axios.put("http://localhost:7001/user/profile", {
            username: this.username,
            contactNo: this.contactNo
        })
            .then((response) => {
            if (response.data.contactNo) {
                this.router.navigateByUrl(this.router.createUrlTree(['user/land'], {
                    queryParams: {
                        username: this.username
                    }
                }));
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
    cancel() {
        this.router.navigateByUrl(this.router.createUrlTree(['user/land'], {
            queryParams: {
                username: this.username
            }
        }));
    }
};
UserProfileComponent = __decorate([
    Component({
        selector: 'app-user-profile',
        templateUrl: './user-profile.component.html',
        styleUrls: ['./user-profile.component.css']
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map