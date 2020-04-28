import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {
  public companyListShow : boolean = false
  @Output() private createNewCompanyClicked = new EventEmitter()
  public companyList : any[] = []
   
  constructor() { }

  ngOnInit(): void {
  }
  createNewCompany(){}
}
