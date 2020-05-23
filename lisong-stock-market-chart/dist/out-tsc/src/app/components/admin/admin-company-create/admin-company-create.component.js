import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminCompanyCreateComponent = class AdminCompanyCreateComponent {
    constructor() {
        this.companySaved = new EventEmitter();
        this.companyName = '';
        this.CEO = '';
        this.boardChairman = '';
        this.sector = '';
        this.briefWriteup = '';
        this.preview = '';
    }
    ngOnInit() {
    }
    uploadFileChange(event) {
        this.selectedFile = event.target.file[0];
        var reader = new FileReader();
        reader.onload = (e) => {
            this.preview = reader.result;
            console.log(this.preview);
        };
        reader.readAsDataURL(this.selectedFile);
    }
    save() {
        axios.post('http://localhost:7002/company/new', {
            companyName: this.companyName,
            CEO: this.CEO,
            boardChairman: this.boardChairman,
            turnover: this.turnover,
            sector: this.sector,
            briefWrteup: this.briefWriteup,
            logo: btoa(this.preview)
        })
            .then((response) => {
            if (response.data.data == 'success') {
                this.companySaved.emit(true);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
__decorate([
    Output()
], AdminCompanyCreateComponent.prototype, "companySaved", void 0);
AdminCompanyCreateComponent = __decorate([
    Component({
        selector: 'app-admin-company-create',
        templateUrl: './admin-company-create.component.html',
        styleUrls: ['./admin-company-create.component.css']
    })
], AdminCompanyCreateComponent);
export { AdminCompanyCreateComponent };
//# sourceMappingURL=admin-company-create.component.js.map