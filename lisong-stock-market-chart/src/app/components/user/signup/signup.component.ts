import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public username : String = ''
  constructor( public router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl(this.router.createUrlTree(
      ['user/signup/verifycode'],{queryParams : {
        'username' : this.username
      }}
    ))
  }
}
