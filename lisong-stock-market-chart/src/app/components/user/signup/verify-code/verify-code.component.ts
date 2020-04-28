import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
  public username : string = ''
  public suffixCode : any 
  public prefixCode : any

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  verify() {
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/signup/submitpassword'],{queryParams : {'username' : this.username}})
    )
  }
}
