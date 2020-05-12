import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
import {ActivatedRoute} from '@angular/router'
import Axios from 'axios';

@Component({
  selector: 'app-submit-password',
  templateUrl: './submit-password.component.html',
  styleUrls: ['./submit-password.component.css']
})

export class SubmitPasswordComponent implements OnInit {
  public username : string = ''
  public password : string = ''
  public password2: string = ''
  public isPolicyAgreed : boolean = false
  public signupDisabled : boolean = true

  constructor(public router : Router,public activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(
      (params:any)=>{
        this.username = params['username']
      }
    )
  }
  signup() {
    if (this.isPolicyAgreed && this.password == this.password2) {
      Axios.post('http://localhost:7001/user/signup/pwd',
      {
        username: this.username,
        password: this.password
      })
      .then(
        (response:any)=>{
          this.router.navigateByUrl('user/signup')
        }
      )
    } else {
      var regWarning = $('#regWarning')
      regWarning.addClass('fa fa-times')
      regWarning.text('password is not same')
      regWarning.css('color','red')
    }
  }
}
