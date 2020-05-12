import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import axios from 'axios'

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent implements OnInit {
  public username : string = ''
  public newPwd : string = ''
  public newPwd2 : string = ''
  
  constructor(public router : Router, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.username = params['username']
    })
  }
  reset(){
    if(this.newPwd.length > 0 && this.newPwd2.length > 0){
      if(this.newPwd == this.newPwd2){
        axios.put("http://localhost:7001/user/pwd/", {
        username: this.username,
        password: this.newPwd
      })
      .then(
        (response : any) => {
          this.router.navigateByUrl('user/signin')
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
      } else {
      var regiWarn = $('#regiWarn')
      regiWarn.addClass('fa fa-times')
      regiWarn.text('password inconsistent')
      regiWarn.css('color', 'red')
      }
    } else {
      var regiWarn = $('#regiWarn')
      regiWarn.addClass('fa fa-times')
      regiWarn.text('password could not blank')
      regiWarn.css('color', 'red')
    }
  }
}
