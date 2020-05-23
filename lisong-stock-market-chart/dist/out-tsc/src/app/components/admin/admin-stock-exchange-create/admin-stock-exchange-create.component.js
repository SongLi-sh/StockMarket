import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminStockExchangeCreateComponent = class AdminStockExchangeCreateComponent {
    constructor() {
        this.stockExchangeName = '';
        this.stockExchangeBrief = '';
        this.stockExhangeAddress = '';
        this.stockExchangeRemarks = '';
        this.stockExchangeSaved = new EventEmitter();
    }
    ngOnInit() {
    }
    save() {
        axios.post('http://localhost:7004/stock-exchange/new', {
            stockExchangeName: this.stockExchangeName,
            stockExchangeBrief: this.stockExchangeBrief,
            stockExhangeAddress: this.stockExhangeAddress,
            stockExchangeRemarks: this.stockExchangeRemarks
        })
            .then((response) => {
            if (response.data.data == 'success') {
                this.stockExchangeSaved.emit(true);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
__decorate([
    Output()
], AdminStockExchangeCreateComponent.prototype, "stockExchangeSaved", void 0);
AdminStockExchangeCreateComponent = __decorate([
    Component({
        selector: 'app-admin-stock-exchange-create',
        templateUrl: './admin-stock-exchange-create.component.html',
        styleUrls: ['./admin-stock-exchange-create.component.css']
    })
], AdminStockExchangeCreateComponent);
export { AdminStockExchangeCreateComponent };
//# sourceMappingURL=admin-stock-exchange-create.component.js.map