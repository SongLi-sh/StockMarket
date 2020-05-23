import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let AdminLandingPageComponent = class AdminLandingPageComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.importExcelShow = true;
        this.uploadSummaryShow = false;
        this.companyListShow = false;
        this.companyCreateShow = false;
        this.stockExchangeListShow = false;
        this.stockExchangeCreateShow = false;
        this.ipoListShow = false;
        this.ipoCreateShow = false;
        this.username = '';
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.username = params["username"];
        });
    }
    reSet() {
        this.companyCreateShow = false;
        this.importExcelShow = false;
        this.uploadSummaryShow = false;
        this.companyListShow = false;
        this.stockExchangeListShow = false;
        this.stockExchangeCreateShow = false;
        this.ipoListShow = false;
        this.ipoCreateShow = false;
    }
    updatePwd() { }
    logout() {
        axios.post("http://localhost:7001/user/logout/", {
            username: this.username
        })
            .then((response) => {
            if (response.data.loginStatus == false) {
                this.router.navigateByUrl('user/signin');
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
    profile() { }
    importDataClick() {
        this.reSet();
        this.importExcelShow = true;
    }
    manageCompanyClick() {
        this.reSet();
        this.companyListShow = true;
    }
    manageExchangeClick() {
        this.reSet();
        this.stockExchangeListShow = true;
    }
    updateIPODetailsClick() {
        this.reSet();
        this.ipoListShow = true;
    }
    uploadClicked(event) {
        if (event) {
            this.reSet();
            this.uploadSummaryShow = true;
        }
    }
    okClicked(event) {
        if (event) {
            this.reSet();
            this.importExcelShow = true;
        }
    }
    companySaved(event) {
        if (event) {
            this.reSet();
            this.companyListShow = true;
        }
    }
    createNewCompanyClicked(event) {
        if (event) {
            this.reSet();
            this.companyCreateShow = true;
        }
    }
    newStockExchangeClicked(event) {
        if (event) {
            this.reSet();
            this.stockExchangeCreateShow = true;
        }
    }
    stockExchangeSaved(event) {
        if (event) {
            this.reSet();
            this.stockExchangeListShow = true;
        }
    }
    createNewIPOClicked(event) {
        if (event) {
            this.reSet();
            this.ipoCreateShow = true;
        }
    }
    IPOSaved(event) {
        if (event) {
            this.reSet();
            this.ipoListShow = true;
        }
    }
};
AdminLandingPageComponent = __decorate([
    Component({
        selector: 'app-admin-landing-page',
        templateUrl: './admin-landing-page.component.html',
        styleUrls: ['./admin-landing-page.component.css']
    })
], AdminLandingPageComponent);
export { AdminLandingPageComponent };
//# sourceMappingURL=admin-landing-page.component.js.map