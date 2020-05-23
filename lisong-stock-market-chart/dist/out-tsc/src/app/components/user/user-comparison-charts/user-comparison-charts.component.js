import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import axios from 'axios';
let UserComparisonChartsComponent = class UserComparisonChartsComponent {
    constructor() {
        this.companyOrSector = '';
        this.companyList = [];
        this.stockExchangeList = [];
        this.backgroundColor = '';
        this.selectedCompanyName = '';
        this.selectedStockExchangeName = '';
        this.periodSize = '';
        this.periodUnit = '';
        this.timeline = [];
        this.priceStack = [];
        this.addDisabled = true;
        this.chartSeries = [];
        this.seriesJson = {};
        this.chartLegend = [];
    }
    ngOnInit() {
        this.companyList = this.companyList.slice(this.companyList.length + 1);
        axios.get("http://localhost:7002/company/list")
            .then((response) => {
            this.companyList = response.data.companies;
        })
            .catch((error) => {
            console.log(error);
        });
        this.stockExchangeList = this.stockExchangeList.slice(this.stockExchangeList.length + 1);
        axios.get("http://localhost:7004/stock-exchange/list")
            .then((response) => {
            this.stockExchangeList = response.data.stockExchanges;
        })
            .catch((error) => {
            console.log(error);
        });
    }
    generateMap() {
        this.addDisabled = false;
        this.backgroundColor = 'white';
        var main = document.getElementById('main');
        this.myChart = echarts.init(main);
        axios.post("http://localhost:7002/company/compare", {
            compnanyName: this.selectedCompanyName,
            selectedStockExchangeName: this.selectedStockExchangeName,
            fromPeriod: this.fromPeriod,
            toPeriod: this.toPeriod,
            periodSize: this.periodSize,
            periodUnit: this.periodUnit
        })
            .then((response) => {
            for (let json of response.data.stockPriceDetails) {
                this.timeline.push(json.currentDate + " " + json.currentTime);
                this.priceStack.push(json.currentPrice);
            }
            this.seriesJson = {
                name: this.selectedCompanyName,
                type: 'line',
                data: this.priceStack,
                markPoint: {
                    data: [
                        { type: 'max', name: 'max' },
                        { type: 'min', name: 'min' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'average' }
                    ]
                }
            },
                this.chartSeries.push(this.seriesJson);
            this.chartLegend.push(this.selectedCompanyName);
            this.myChart.setOption({
                title: {
                    text: 'company Compare Charts'
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            show: true
                        },
                        magicType: {
                            type: ['bar', 'line']
                        }
                    }
                },
                legend: {
                    data: this.chartLegend
                },
                xAxis: {
                    data: this.timeline
                },
                yAxis: {},
                series: this.chartSeries
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }
    getCompanyName(e) {
        this.selectedCompanyName = e.target.value;
    }
    getStockExchangeName(e) {
        this.selectedStockExchangeName = e.target.value;
    }
    fromPeriodChange(e) {
        this.fromPeriod = e.target.value;
    }
    toPeriodChange(e) {
        this.toPeriod = e.target.value;
    }
    periodUnitChange(e) {
        this.periodUnit = e.target.value;
    }
    add() {
        this.timeline = this.timeline.slice(this.timeline.length + 1);
        this.priceStack = this.priceStack.slice(this.priceStack.length + 1);
        axios.post("http://localhost:7002/company/compare", {
            compnanyName: this.selectedCompanyName,
            selectedStockExchangeName: this.selectedStockExchangeName,
            fromPeriod: this.fromPeriod,
            toPeriod: this.toPeriod,
            periodSize: this.periodSize,
            periodUnit: this.periodUnit
        })
            .then((response) => {
            for (let json of response.data.stockPriceDetails) {
                this.timeline.push(json.currentDate + " " + json.currentTime);
                this.priceStack.push(json.currentPrice);
            }
            this.seriesJson = {
                name: this.selectedCompanyName,
                type: 'line',
                data: this.priceStack,
                markPoint: {
                    data: [
                        { type: 'max', name: 'max' },
                        { type: 'min', name: 'min' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'average' }
                    ]
                }
            },
                this.chartSeries.push(this.seriesJson);
            this.chartLegend.push(this.selectedCompanyName);
            this.myChart.setOption({
                legend: {
                    data: this.chartLegend
                },
                series: this.chartSeries
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
__decorate([
    Input()
], UserComparisonChartsComponent.prototype, "companyOrSector", void 0);
UserComparisonChartsComponent = __decorate([
    Component({
        selector: 'app-user-comparison-charts',
        templateUrl: './user-comparison-charts.component.html',
        styleUrls: ['./user-comparison-charts.component.css']
    })
], UserComparisonChartsComponent);
export { UserComparisonChartsComponent };
//# sourceMappingURL=user-comparison-charts.component.js.map