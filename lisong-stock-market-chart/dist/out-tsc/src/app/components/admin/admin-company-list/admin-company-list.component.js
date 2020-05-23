import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminCompanyListComponent = class AdminCompanyListComponent {
    constructor() {
        this.companyListShow = false;
        this.createNewCompanyClicked = new EventEmitter();
        this.companyList = [];
    }
    ngOnInit() {
        axios.get('http://localhost:7002/company/list')
            .then((response) => {
            for (let json of response.data.companies) {
                let tmpJson = {
                    companyName: json.companyName,
                    briefWriteup: json.briefWriteup,
                    logo: atob(json.logo)
                };
                this.companyList.push(tmpJson);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
    createNewCompany() {
        this.createNewCompanyClicked.emit(true);
    }
};
__decorate([
    Output()
], AdminCompanyListComponent.prototype, "createNewCompanyClicked", void 0);
AdminCompanyListComponent = __decorate([
    Component({
        selector: 'app-admin-company-list',
        templateUrl: './admin-company-list.component.html',
        styleUrls: ['./admin-company-list.component.css']
    })
], AdminCompanyListComponent);
export { AdminCompanyListComponent };
//# sourceMappingURL=admin-company-list.component.js.map