import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  companySearch(){}
  updatePwd(){
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/reset/password'],{queryParams : {username : this.username}}
      )
    )   
  }
  logout(){}
  profile(){
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/profile'],{queryParams : {username : this.username}}
        )
      )
  }
  IPOSClick(){
    this.ipoShow = true
  }
  compareCompanyClick(){}
  compareSectorClick(){}
  companyListClick(){}
  promptClick(key){}
  
}
