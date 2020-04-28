import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-comparison-charts',
  templateUrl: './user-comparison-charts.component.html',
  styleUrls: ['./user-comparison-charts.component.css']
})
export class UserComparisonChartsComponent implements OnInit {
  @Input() companyOrSector : string = ''
  public companyList : any[] = []
  public stockExchangeList : any[] = []
  public backgroundColor : string = ''
  public selectedCompanyName : string = ''
  public selectedStockExchangeName : string = ''
  public periodSize : string = ''

  constructor() { }

  ngOnInit(): void {
  }
  
  generateMap() {}
  getCompanyName(e){}
  getStockExchangeName(e){}
  fromPeriodChange(e){}
  toPeriodChange(e){}
  periodUnitChange(e){}
  add(){}

}
