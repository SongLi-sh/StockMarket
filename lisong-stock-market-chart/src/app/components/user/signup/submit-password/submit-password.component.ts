import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'

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

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  signup() {
    if (this.isPolicyAgreed && this.password == this.password2) {
      alert('You just registered a new accout ! Please sign in !')
      this.router.navigateByUrl('user/signin')
    } else {
      var regWarning = $('#regWarning')
      regWarning.addClass()
      regWarning.text('password is not same')
      regWarning.css('color','red')
    }
  }
}
