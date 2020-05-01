import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptService } from 'src/app/services/encrypt.service';
import { EmailValidationService } from 'src/app/services/email-validation.service';
import axios from 'axios'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public username : string = ''
  public placeholder:string = ''
  public prefixCode:any
  public suffixCode:any
  public encryptKey:string = 'fsd'


  constructor( public router : Router,public encryptService: EncryptService, public emailValidationService: EmailValidationService) { }

  ngOnInit(): void {
  }

  usernameBlur(){
    this.placeholder = 'input signup email'
    this.emailValidationService.emailValidation(this.username)
  }

  submit(){
    if(this.emailValidationService.emailValidation(this.username)){
      axios.post('', { //the specific url of validation should be ready when microservice part is done.
        username: this.username
      })
      .then(
        (response : any) => {
          this.prefixCode = response.data.prefixCode
          let encryptedPrefixCode = this.encryptService.aesEncrypt(this.prefixCode)
          this.suffixCode = response.data.suffixCode
          let encryptedSuffixCode = this.encryptService.aesEncrypt(this.suffixCode)
          this.router.navigateByUrl(this.router.createUrlTree(
            ['/user/veri/code'], 
            {queryParams: 
              {
                'prefixCode': encryptedPrefixCode, 
                'suffixCode': encryptedSuffixCode,
                'username': this.username
              }
            }), 
          )
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    } 
  }
}
