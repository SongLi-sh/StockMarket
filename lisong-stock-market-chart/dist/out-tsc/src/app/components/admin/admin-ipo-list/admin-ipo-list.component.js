import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import Axios from 'axios';
let AdminIpoListComponent = class AdminIpoListComponent {
    constructor() {
        this.ipoList = [];
        this.createNewIPOClicked = new EventEmitter();
    }
    ngOnInit() {
        Axios.get('http://localhost:7002/company/IPOlist')
            .then((response) => {
            this.ipoList = response.data.ipoList;
        })
            .catch((error) => {
            console.log(error);
        });
    }
    createNewIPO() {
        this.createNewIPOClicked.emit(true);
    }
};
__decorate([
    Output()
], AdminIpoListComponent.prototype, "createNewIPOClicked", void 0);
AdminIpoListComponent = __decorate([
    Component({
        selector: 'app-admin-ipo-list',
        templateUrl: './admin-ipo-list.component.html',
        styleUrls: ['./admin-ipo-list.component.css']
    })
], AdminIpoListComponent);
export { AdminIpoListComponent };
//# sourceMappingURL=admin-ipo-list.component.js.map