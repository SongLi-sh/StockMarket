import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-company-create',
  templateUrl: './admin-company-create.component.html',
  styleUrls: ['./admin-company-create.component.css']
})
export class AdminCompanyCreateComponent implements OnInit {
  @Output() private companySaved = new EventEmitter()
  public companyName : string = ''
  public CEO : string = ''
  public boardChairman : string = ''
  public turnover : number
  public sector : string = ''
  public briefWriteup : string = ''
  public selectedFile : any
  public preview : string = ''

  constructor() { }

  ngOnInit(): void {
  }
  uploadFileChange(event){}
  save(){}
}
