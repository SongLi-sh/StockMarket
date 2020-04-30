import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminStockExchangeListComponent } from '../admin-stock-exchange-list/admin-stock-exchange-list.component';
import axios from 'axios'


@Component({
  selector: 'app-admin-import-excel',
  templateUrl: './admin-import-excel.component.html',
  styleUrls: ['./admin-import-excel.component.css']
})
export class AdminImportExcelComponent implements OnInit {
  @Output() private uploadClicked = new EventEmitter()
  public execelUploaded : boolean = false
  public selectedFile : any

  constructor() { }

  ngOnInit(): void {
  }
  handleExcel(event){
    this.selectedFile = event.target.files[0]
  }
  upload(){
   if (!this.selectedFile) {
      alert('please select an file to upload.')
   }
  var formData = new FormData()
  formData.append('file', this.selectedFile)
  axios.post(
    '', //the specific url should be provided by microservice service
    formData,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  })
  .then(
    (response : any) => {
    this.execelUploadDateToUploadSummary(response)
    this.execelUploaded = true
    this.uploadClicked.emit(this.execelUploaded)
    }
  ).catch(
    (error)=>{
      console.log(error)
    }
  )
  }
  execelUploadDateToUploadSummary(response : any){
    let companyCode = response.data.summaryOfUpload[0].companyName
    let stockExchange =response.data.summaryOfUpload[0].stockExchange
    let NoOfRecordsImported = response.data.summaryOfUpload[0].NoOfRecordsImported
    let fromDate = response.data.summaryOfUpload[0].date + " " + response.data.summaryOfUpload[0].time
    let  toDate = response.data.summaryOfUpload[1].date + " " + response.data.summaryOfUpload[1].time
    
    localStorage.setItem("companyCode", companyCode)
    localStorage.setItem("stockExchange", stockExchange)
    localStorage.setItem("NoOfRecordsImported", NoOfRecordsImported)
    localStorage.setItem("fromDate", fromDate)
    localStorage.setItem("toDate", toDate)
  }
}
