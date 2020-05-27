import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-user-company-list',
  templateUrl: './user-company-list.component.html',
  styleUrls: ['./user-company-list.component.css']
})
export class UserCompanyListComponent implements OnInit {
  @Input() searchResults : any[] = []
  public companyList : any[] = []

  constructor() { }

  ngOnInit(): void {
    this.companyList = this.companyList.slice(this.companyList.length+1)
    //axios.get("http://localhost:7002/company/list")
    axios.get("http://localhost:9000/ibm/company/list")
    .then(
      (response:any)=>{
        for (let json of response.data.companies){
          let tmpJson = {
            companyName: json.companyName,
            turnOver:json.turnOver,
            CEO:json.CEO,
            boardChairman: json.boardChairman,
            sector:json.sector,
            briefWriteup:json.briefWriteup,
            latestStockPrice: json.currentPrice,
            logo:atob(json.logo)
          }
          this.companyList.push(tmpJson)
        }
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.companyList = this.companyList.slice(this.companyList.length+1)
    for (let json of this.searchResults){
      let tmpJson = {
        companyName: json.companyName,
        turnOver:json.turnOver,
        CEO:json.CEO,
        boardChairman: json.boardChairman,
        sector:json.sector,
        briefWriteup:json.briefWriteup,
        latestStockPrice: json.currentPrice,
        logo:atob(json.logo)
      }
      this.companyList.push(tmpJson)
    }
  }
}
