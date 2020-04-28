import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { R3ConstructorFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public username : string = ''
  public contactNo : string = ''
  

  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  cancel(){}
  update(){}

}
