import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-admin-stock-exchange-list',
  templateUrl: './admin-stock-exchange-list.component.html',
  styleUrls: ['./admin-stock-exchange-list.component.css']
})
export class AdminStockExchangeListComponent implements OnInit {
  public stockExchangeList : any[] =[]
  @Output() private newStockExchangeClicked = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    axios.get("")//the specific url should be ready when microservice part is ready.
    .then(
      (response:any)=>{
      this.stockExchangeList = response.date.stockExchanges
    })
    .catch(
      (error)=>{
        console.log(error)
    })
  }

  createStockExchange(){
    this.newStockExchangeClicked.emit(true)
  }
}
