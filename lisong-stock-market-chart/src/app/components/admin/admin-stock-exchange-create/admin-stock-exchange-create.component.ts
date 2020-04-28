import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-stock-exchange-create',
  templateUrl: './admin-stock-exchange-create.component.html',
  styleUrls: ['./admin-stock-exchange-create.component.css']
})
export class AdminStockExchangeCreateComponent implements OnInit {
  public stockExchangeName : string = ''
  public stockExchangeBrief : string = ''
  public stockExhangeAddress : string = ''
  public stockExchangeRemarks : string = ''

  @Output() private stockExchangeSaved = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  save(){}
  
}
