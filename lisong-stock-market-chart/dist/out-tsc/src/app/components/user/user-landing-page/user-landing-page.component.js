import { __decorate } from "tslib";
import { Component } from '@angular/core';
import axios from 'axios';
let UserLandingPageComponent = class UserLandingPageComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = '';
        this.companySearchText = '';
        this.searchResults = [];
        this.suggestResults = [];
        this.promptShow = false;
        this.companyListShow = true;
        this.searchTxtReadyonly = false;
        this.searchDisabled = false;
        this.companyOrSector = '';
        this.compareChartsShow = false;
        this.ipoShow = false;
        this.searchTxtReadonly = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            this.username = params['username'];
        });
    }
    companySearch() {
        axios.post("http://localhost:7002/company/search", {
            companySearchText: this.companySearchText
        })
            .then((response) => {
            this.searchResults = response.data.companies;
        })
            .catch((error) => {
            console.log(error);
        });
    }
    updatePwd() {
        this.router.navigateByUrl(this.router.createUrlTree(['user/reset/password'], { queryParams: { username: this.username } }));
    }
    logout() {
        alert("logout username:" + this.username);
        axios.post("http://localhost:7001/user/logout/", {
            username: this.username
        })
            .then((response) => {
            if (response.data.loginStatus) {
                this.router.navigateByUrl('/user/signin');
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
    profile() {
        this.router.navigateByUrl(this.router.createUrlTree(['user/profile'], { queryParams: { username: this.username } }));
    }
    IPOSClick() {
        this.searchTxtReadonly = true;
        this.searchDisabled = true;
        this.companyListShow = false;
        this.compareChartsShow = false;
        this.ipoShow = true;
    }
    compareCompanyClick() {
        this.compareChartsShow = true;
        this.searchTxtReadonly = true;
        this.searchDisabled = true;
        this.companyListShow = false;
        this.companyOrSector = 'Company';
        this.ipoShow = false;
    }
    compareSectorClick() {
        this.compareChartsShow = true;
        this.searchTxtReadonly = true;
        this.searchDisabled = true;
        this.companyListShow = false;
        this.companyOrSector = 'Sector';
        this.ipoShow = false;
    }
    companyListClick() {
        this.searchTxtReadonly = false;
        this.searchDisabled = false;
        this.companyListShow = true;
        this.compareChartsShow = false;
        this.ipoShow = false;
    }
    promptClick(key) {
        this.companySearchText = this.suggestResults[key].companyName;
        this.companySearch();
        this.promptShow = false;
    }
};
UserLandingPageComponent = __decorate([
    Component({
        selector: 'app-user-landing-page',
        templateUrl: './user-landing-page.component.html',
        styleUrls: ['./user-landing-page.component.css']
    })
], UserLandingPageComponent);
export { UserLandingPageComponent };
//# sourceMappingURL=user-landing-page.component.js.map