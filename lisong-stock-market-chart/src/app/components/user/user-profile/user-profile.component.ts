import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import axios from 'axios'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public username : string = ''
  public contactNo : string = ''
  

  constructor(public router : Router, public activatedRoute : ActivatedRoute) { }
  ngOnInit():void{
    this.activatedRoute.queryParams.subscribe(
    (params)=>{
      this.username = params['username']
      }
    )
  }
  update(){
    //the specific url of backend should be ready when microservice part is done
    axios.put("",{
      username: this.username,
      contactNo: this.contactNo
    })
    .then(
      (response:any)=>{
        if(response.data.contactNo){
          this.router.navigateByUrl(this.router.createUrlTree(
            ['user/land'],{
              queryParams:{
                username:this.username
              }
            }
          ))
        }
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  cancel(){
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['user/land'],{
          queryParams:{
            username:this.username
          }
        }
      )
    )
  }

}
