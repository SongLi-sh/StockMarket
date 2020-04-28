import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-ipo-list',
  templateUrl: './user-ipo-list.component.html',
  styleUrls: ['./user-ipo-list.component.css']
})
export class UserIpoListComponent implements OnInit {
  public ipoList : any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
