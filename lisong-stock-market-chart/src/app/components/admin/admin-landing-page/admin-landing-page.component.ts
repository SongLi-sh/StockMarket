import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {
  public importExcelShow : boolean = true
  public uploadSummaryShow : boolean = false
  public companyListShow : boolean = false
  public companyCreateShow : boolean = false
  public stockExchangeListShow : boolean = false
  public stockExchangeCreateShow : boolean = false
  public ipoListShow : boolean = false
  public ipoCreateShow : boolean = false
  public username : string = ''

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  updatePwd(){}
  logout(){}
  profile(){}
  importDataClick(){}
  manageCompanyClick(){}
  manageExchangeClick(){}
  updateIPODetailsClick(){}
  uploadClicked(event){
    if (event) {
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = true
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = false
    }

  }
  okClicked(event){
    if (event) {
      this.companyCreateShow = false
      this.importExcelShow = true
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = false
    }

  }
  companySaved(event){
    if (event) {
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = true
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = false
    }
  }
  createNewCompanyClicked(event){
    if (event) {
      this.companyCreateShow = true
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = false
    }
  }
  newStockExchangeClicked(event){}
  stockExchangeSaved(event){}
  createNewIPOClicked(event){}
  IPOSaved(event){}
  
}
