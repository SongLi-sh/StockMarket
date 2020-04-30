import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import axios from 'axios'

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
  save(){
    axios.post(
      "",// the specific url should be ready when microservice is ready.
      {
        stockExchangeName: this.stockExchangeName,
        stockExchangeBrief: this.stockExchangeBrief,
        stockExhangeAddress: this.stockExhangeAddress,
        stockExchangeRemarks: this.stockExchangeRemarks
      }
    )
    .then(
      (response:any)=>{
        if(response.data.data == 'success'){
          this.stockExchangeSaved.emit(true)
        }
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  
}
