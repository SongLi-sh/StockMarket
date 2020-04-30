import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Axios from 'axios';

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
    Axios.get("")//the specific url should be ready when its corresponding microservice is done
    .then(
      (response:any)=>{
       this.ipoList = response.data.ipoList
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
  }
  createNewIPO(){
    this.createNewIPOClicked.emit(true)
  }
}
