import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import axios from 'axios';
let UserCompanyListComponent = class UserCompanyListComponent {
    constructor() {
        this.searchResults = [];
        this.companyList = [];
    }
    ngOnInit() {
        this.companyList = this.companyList.slice(this.companyList.length + 1);
        axios.get("http://localhost:7002/company/list")
            .then((response) => {
            for (let json of response.data.companies) {
                let tmpJson = {
                    compayName: json.compayName,
                    turnOver: json.turnOver,
                    CEO: json.CEO,
                    boardChairman: json.boardChairman,
                    sector: json.sector,
                    briefWriteup: json.briefWriteup,
                    latestStockPrice: json.currentPrice,
                    logo: atob(json.logo)
                };
                this.companyList.push(tmpJson);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        this.companyList = this.companyList.slice(this.companyList.length + 1);
        for (let json of this.searchResults) {
            let tmpJson = {
                compayName: json.compayName,
                turnOver: json.turnOver,
                CEO: json.CEO,
                boardChairman: json.boardChairman,
                sector: json.sector,
                briefWriteup: json.briefWriteup,
                latestStockPrice: json.currentPrice,
                logo: atob(json.logo)
            };
            this.companyList.push(tmpJson);
        }
    }
};
__decorate([
    Input()
], UserCompanyListComponent.prototype, "searchResults", void 0);
UserCompanyListComponent = __decorate([
    Component({
        selector: 'app-user-company-list',
        templateUrl: './user-company-list.component.html',
        styleUrls: ['./user-company-list.component.css']
    })
], UserCompanyListComponent);
export { UserCompanyListComponent };
//# sourceMappingURL=user-company-list.component.js.map