import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminIpoCreateComponent = class AdminIpoCreateComponent {
    constructor() {
        this.IPOSaved = new EventEmitter();
        this.companyList = [];
        this.stockExchangeList = [];
        this.companyName = '';
        this.stockExchangeName = '';
        this.pricePerShare = '';
        this.totalNoOfShares = '';
        this.remarks = '';
    }
    ngOnInit() {
        this.companyList = this.companyList.slice(this.companyList.length + 1);
        axios.get("http://localhost:7002/company/list")
            .then((response) => {
            this.companyList = response.data.companies;
        })
            .catch(error => {
            console.log(error);
        });
        this.stockExchangeList = this.stockExchangeList.slice(this.stockExchangeList.length + 1);
        axios.get("http://localhost:7004/stock-exchange/list")
            .then((response) => {
            this.stockExchangeList = response.data.stockExchanges;
        })
            .catch(error => {
            console.log(error);
        });
    }
    getCompanyName(event) {
        this.companyName = event.target.value;
    }
    getStockExchangeName(event) {
        this.stockExchangeName = event.target.value;
    }
    openDateTimeChange(event) {
        this.openDateTime = event.target.value;
    }
    save() {
        axios.post('http://localhost:7002/company/IPO', {
            companyName: this.companyName,
            stockExchangeName: this.stockExchangeName,
            pricePerShare: this.pricePerShare,
            totalNoOfShares: this.totalNoOfShares,
            openDateTime: this.openDateTime,
            remarks: this.remarks
        })
            .then((response) => {
            if (response.data.data == 'success') {
                this.IPOSaved.emit(true);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
};
__decorate([
    Output()
], AdminIpoCreateComponent.prototype, "IPOSaved", void 0);
AdminIpoCreateComponent = __decorate([
    Component({
        selector: 'app-admin-ipo-create',
        templateUrl: './admin-ipo-create.component.html',
        styleUrls: ['./admin-ipo-create.component.css']
    })
], AdminIpoCreateComponent);
export { AdminIpoCreateComponent };
//# sourceMappingURL=admin-ipo-create.component.js.map