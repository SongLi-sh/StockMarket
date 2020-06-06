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


  constructor(public router : Router, public encrypteService: EncryptService, public httpService: HttpService) { }

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

  axios
  //.post("http://localhost:7001/user/signin", {
    .post("http://172.17.0.2:7001/user/signin", {
    username: this.username,
    password: this.password
  })
  .then(
    (response:any)=>{
      if (response.data != null) {
        console.log(response)

        if (response.data.resetPwd == true) {
          this.router.navigateByUrl(
            this.router.createUrlTree(["/user/reset/pwd"], {
              queryParams: {
                username: this.username
              }
            })
          );
        }

        if (response.data.userType == "admin") {
          this.router.navigateByUrl(
            this.router.createUrlTree(["/admin/land"], {
              queryParams: {
                username: this.username
              }
            })
          );
        }

        if (response.data.userType == "user") {
          this.router.navigateByUrl(
            this.router.createUrlTree(["/user/land"], {
              queryParams: {
                username: this.username
              }
            })
          );
        }


      }

    }

  )
  .catch(error => {
          console.log(error);
        });

  return false
  }
}
