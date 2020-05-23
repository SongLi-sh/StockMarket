import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import axios from 'axios';
let AdminStockExchangeListComponent = class AdminStockExchangeListComponent {
    constructor() {
        this.stockExchangeList = [];
        this.newStockExchangeClicked = new EventEmitter();
    }
    ngOnInit() {
        axios.get('http://localhost:7004/stock-exchange/list')
            .then((response) => {
            this.stockExchangeList = response.date.stockExchanges;
        })
            .catch((error) => {
            console.log(error);
        });
    }
    createStockExchange() {
        this.newStockExchangeClicked.emit(true);
    }
};
__decorate([
    Output()
], AdminStockExchangeListComponent.prototype, "newStockExchangeClicked", void 0);
AdminStockExchangeListComponent = __decorate([
    Component({
        selector: 'app-admin-stock-exchange-list',
        templateUrl: './admin-stock-exchange-list.component.html',
        styleUrls: ['./admin-stock-exchange-list.component.css']
    })
], AdminStockExchangeListComponent);
export { AdminStockExchangeListComponent };
//# sourceMappingURL=admin-stock-exchange-list.component.js.map