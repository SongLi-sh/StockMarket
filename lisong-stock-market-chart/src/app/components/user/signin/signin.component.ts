import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import * as $ from 'jquery';
import axios from 'axios'
import { EncryptService } from 'src/app/services/encrypt.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  public username : string =''
  public password : string = ''


  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  
  userLogin() {
    this.loginValidation()
  }

  loginValidation() : boolean {
  if (!this.username || !this.password) {
    let loginWarn = $('#loginWarn')
    loginWarn.addClass('fa fa-times')
    loginWarn.text('username or password can not be empty')
    loginWarn.css('color','red')
    return false
  }
  if (this.username == 'normal' && this.password == '123') {
    alert('normal user login pass')

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/land'],
        {
          queryParams : {username : this.username}
        }
        )
    )
  } 
  if(this.username == 'admin' && this.password == '123') {
    alert('admin usre login pass')
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['admin/land'],
        {
          queryParams : {username : this.username}
        }
        ) 
    )
  }

  return false
  }
}
