import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-user-company-list',
  templateUrl: './user-company-list.component.html',
  styleUrls: ['./user-company-list.component.css']
})
export class UserCompanyListComponent implements OnInit {
  @Input() searchResults : any[] = []
  public companyList : any[] = []

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
}
