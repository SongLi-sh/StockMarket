import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminImportExcelComponent = class AdminImportExcelComponent {
    constructor() {
        this.uploadClicked = new EventEmitter();
        this.execelUploaded = false;
    }
    ngOnInit() {
    }
    handleExcel(event) {
        this.selectedFile = event.target.files[0];
    }
    upload() {
        if (!this.selectedFile) {
            alert('please select an file to upload.');
        }
        var formData = new FormData();
        formData.append('file', this.selectedFile);
        axios.post('http://localhost:7005/excel/import', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
            this.execelUploadDateToUploadSummary(response);
            this.execelUploaded = true;
            this.uploadClicked.emit(this.execelUploaded);
        }).catch((error) => {
            console.log(error);
        });
    }
    execelUploadDateToUploadSummary(response) {
        let companyCode = response.data.summaryOfUpload[0].companyName;
        let stockExchange = response.data.summaryOfUpload[0].stockExchange;
        let NoOfRecordsImported = response.data.summaryOfUpload[0].NoOfRecordsImported;
        let fromDate = response.data.summaryOfUpload[0].date + " " + response.data.summaryOfUpload[0].time;
        let toDate = response.data.summaryOfUpload[1].date + " " + response.data.summaryOfUpload[1].time;
        localStorage.setItem("companyCode", companyCode);
        localStorage.setItem("stockExchange", stockExchange);
        localStorage.setItem("NoOfRecordsImported", NoOfRecordsImported);
        localStorage.setItem("fromDate", fromDate);
        localStorage.setItem("toDate", toDate);
    }
};
__decorate([
    Output()
], AdminImportExcelComponent.prototype, "uploadClicked", void 0);
AdminImportExcelComponent = __decorate([
    Component({
        selector: 'app-admin-import-excel',
        templateUrl: './admin-import-excel.component.html',
        styleUrls: ['./admin-import-excel.component.css']
    })
], AdminImportExcelComponent);
export { AdminImportExcelComponent };
//# sourceMappingURL=admin-import-excel.component.js.map