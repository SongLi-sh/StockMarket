import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import axios from 'axios'

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
  public username : string = ''
  public companySearchText = ''
  public searchResults : any[] = []
  public suggestResults : any[] = []
  public promptShow : boolean = false
  public companyListShow : boolean = true
  public searchTxtReadyonly : boolean = false
  public searchDisabled : boolean = false
  public companyOrSector : string = ''
  public compareChartsShow : boolean = false
  public ipoShow : boolean = false
  public searchTxtReadonly: boolean = false

  constructor(public router : Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.username = params['username']
      }
    )
  }
  companySearch(){
    axios.post("http://localhost:7002/company/search",
    {
      companySearchText: this.companySearchText
    })
    .then(
      (response:any)=>{
        this.searchResults = response.data.companies
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  updatePwd(){
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/reset/password'],{queryParams : {username : this.username}}
      )
    )   
  }
  
  logout(){
    axios.post("http://localhost:7001/user/logout/",{
      username:this.username
    })
    .then(
      (response:any)=>{
        if(response.data.loginStatus){
          this.router.navigateByUrl('user/signin')
        }
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  profile(){
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/profile'],{queryParams : {username : this.username}}
        )
      )
  }
  IPOSClick(){
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.compareChartsShow = false
    this.ipoShow = true
  }
  compareCompanyClick(){
    this.compareChartsShow = true
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.companyOrSector = 'Company'
    this.ipoShow = false
  }
  compareSectorClick(){
    this.compareChartsShow = true
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.companyOrSector = 'Sector'
    this.ipoShow = false
  }
  companyListClick(){
    this.searchTxtReadonly = false
    this.searchDisabled = false
    this.companyListShow = true
    this.compareChartsShow = false
    this.ipoShow = false 
  }
  promptClick(key){
    this.companySearchText = this.suggestResults[key].companyName
    this.companySearch()
    this.promptShow = false

  }
  
}
