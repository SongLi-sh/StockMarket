import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import axios from 'axios'

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

  constructor(public router : Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.username = params["username"]
      }
    )
  }
  reSet(){
    this.companyCreateShow = false
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
    this.ipoListShow = false
    this.ipoCreateShow = false    
  }

  updatePwd(){}
  logout(){
    axios.post("http://localhost:7001/user/logout/",{
      username: this.username
    })
    .then(
      (response:any)=>{
        if(response.data.loginStatus == false){
          this.router.navigateByUrl('user/signin')
        }
    })
    .catch(
      error =>{
        console.log(error)
      }
    )
  }
  profile(){}
  importDataClick(){
      this.reSet()
      this.importExcelShow = true 
  }
  manageCompanyClick(){
    this.reSet()
    this.companyListShow=true
  }
  manageExchangeClick(){
    this.reSet()
    this.stockExchangeListShow=true
  }
  updateIPODetailsClick(){
    this.reSet()
    this.ipoListShow = true
  }
  uploadClicked(event){
    if (event) {
      this.reSet()
      this.uploadSummaryShow = true
    }
  }
  okClicked(event){
    if (event) {
      this.reSet()
      this.importExcelShow = true
    }
  }
  companySaved(event){
    if (event) {
      this.reSet()
      this.companyListShow = true

    }
  }
  createNewCompanyClicked(event){
    if (event) {
      this.reSet()
      this.companyCreateShow = true

    }
  }
  newStockExchangeClicked(event){
    if(event){
      this.reSet()
      this.stockExchangeCreateShow = true
    }
  }
  stockExchangeSaved(event){
    if(event){
      this.reSet()
      this.stockExchangeListShow = true
    }
  }
  createNewIPOClicked(event){
    if(event){
      this.reSet()
      this.ipoCreateShow = true
    }
  }
  IPOSaved(event){
    if(event){
      this.reSet()
      this.ipoListShow = true
    }
  }
  
}
