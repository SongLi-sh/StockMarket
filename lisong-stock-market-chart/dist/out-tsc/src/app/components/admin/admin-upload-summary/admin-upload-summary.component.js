import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminUploadSummaryComponent = class AdminUploadSummaryComponent {
    constructor() {
        this.isOKClicked = false;
        this.okClicked = new EventEmitter();
    }
    ngOnInit() {
        let companyCode = localStorage.getItem("companyCode");
        axios.post('http://localhost:7002/company/name', {
            companyCode: companyCode
        })
            .then((response) => {
            this.companyName = response.data.companyName;
        })
            .catch((error) => {
            console.log(error);
        });
        this.stockExchange = localStorage.getItem("stockExchange");
        this.NoOfRecordsImported = localStorage.getItem("NoOfRecordsImported");
        this.fromDate = localStorage.getItem("fromDate");
        this.toDate = localStorage.getItem("toDate");
    }
};
__decorate([
    Output()
], AdminUploadSummaryComponent.prototype, "okClicked", void 0);
AdminUploadSummaryComponent = __decorate([
    Component({
        selector: 'app-admin-upload-summary',
        templateUrl: './admin-upload-summary.component.html',
        styleUrls: ['./admin-upload-summary.component.css']
    })
], AdminUploadSummaryComponent);
export { AdminUploadSummaryComponent };
//# sourceMappingURL=admin-upload-summary.component.js.map