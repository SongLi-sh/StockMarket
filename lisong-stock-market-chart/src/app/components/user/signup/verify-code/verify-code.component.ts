import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { EncryptService } from 'src/app/services/encrypt.service';


@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
  public username : string = ''
  public suffixCode : any 
  public prefixCode : any
  public digit6 : string =''
  public placeholder : string = '6 gigits code'

  constructor(public router:Router,public activeRoute : ActivatedRoute, public encrptService: EncryptService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (params:any)=>{
        let encryptedPrefixCode = params['prefixCode']
        this.prefixCode = this.encrptService.aesDecrypt(encryptedPrefixCode)
        
        let encryptedSuffixCode = params['suffixCode']
        this.suffixCode = this.encrptService.aesDecrypt(encryptedSuffixCode)
        this.username = params['username']
      }
    )
  }

  gigit6Focus(){
    this.placeholder = ''
  }

  gidit6Blur(){
    this.placeholder = '6 gigits code'
  }

  verify() {
   if(this.digit6 == this.suffixCode){
    this.router.navigateByUrl(
      this.router.createUrlTree([
        'user/signup/submitpassword'
      ],{
        queryParams:{
          'username':this.username
        }
      })
    )
   }else{
     console.log('verfiy failed')
   }
  }
}
