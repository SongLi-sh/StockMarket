import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-ipo-create',
  templateUrl: './admin-ipo-create.component.html',
  styleUrls: ['./admin-ipo-create.component.css']
})
export class AdminIpoCreateComponent implements OnInit {
  @Output() private IPOSaved = new EventEmitter()
  public companyList : any[] = []
  public stockExchangeList : any[] = []
  public companyName : string = ''
  public stockExchangeName : string = ''
  public pricePerShare : string = ''
  public totalNoOfShares : string = ''
  public openDateTime : Date
  public remarks : string = ''


  constructor() { }

  ngOnInit(): void {
  }
  getCompanyName(event){}
  getStockExchangeName(event){}
  openDateTimeChange(event){}
  save(){}
}
