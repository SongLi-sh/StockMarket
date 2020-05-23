import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let UserIpoListComponent = class UserIpoListComponent {
    constructor() {
        this.ipoList = [];
    }
    ngOnInit() {
        axios.get("http://localhost:7002/company/IPOlist")
            .then((response) => {
            this.ipoList = response.data.ipoList;
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
UserIpoListComponent = __decorate([
    Component({
        selector: 'app-user-ipo-list',
        templateUrl: './user-ipo-list.component.html',
        styleUrls: ['./user-ipo-list.component.css']
    })
], UserIpoListComponent);
export { UserIpoListComponent };
//# sourceMappingURL=user-ipo-list.component.js.map