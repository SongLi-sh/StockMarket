import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-admin-upload-summary',
  templateUrl: './admin-upload-summary.component.html',
  styleUrls: ['./admin-upload-summary.component.css']
})
export class AdminUploadSummaryComponent implements OnInit {
  public companyName : any
  public stockExchange:any
  public NoOfRecordsImported:any
  public fromDate:any
  public toDate:any
  public isOKClicked: boolean = false

  @Output() private okClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    let companyCode = localStorage.getItem("companyCode")
    axios.post("",{// the specific url should be ready when microservice is implemented.
      companyCode:companyCode
    })
    .then(
      (response)=>{
        this.companyName = response.data.companyName
    })
    .catch(
      (error)=>{
        console.log(error)
      }
    )
    this.stockExchange = localStorage.getItem("stockExchange")
    this.NoOfRecordsImported = localStorage.getItem("NoOfRecordsImported")
    this.fromDate = localStorage.getItem("fromDate")
    this.toDate = localStorage.getItem("toDate")
  }

}
