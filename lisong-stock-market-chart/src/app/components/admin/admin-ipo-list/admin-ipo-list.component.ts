import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-ipo-list',
  templateUrl: './admin-ipo-list.component.html',
  styleUrls: ['./admin-ipo-list.component.css']
})
export class AdminIpoListComponent implements OnInit {
  public ipoList : any[] = []
  @Output() private createNewIPOClicked = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  createNewIPO(){}
}
