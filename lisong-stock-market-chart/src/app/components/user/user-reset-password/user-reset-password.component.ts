import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent implements OnInit {
  public username : string = ''
  public newPwd : string = ''
  public newPwd2 : string = ''
  
  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  reset(){
    this.router.navigateByUrl('user/signin')
  }
}
