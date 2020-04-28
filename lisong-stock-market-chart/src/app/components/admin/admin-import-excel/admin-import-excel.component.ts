import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-import-excel',
  templateUrl: './admin-import-excel.component.html',
  styleUrls: ['./admin-import-excel.component.css']
})
export class AdminImportExcelComponent implements OnInit {
  @Output() private uploadClicked = new EventEmitter()
  public execelUploaded : boolean = false
  public selectedFile : any

  constructor() { }

  ngOnInit(): void {
  }
  handleExcel(event){}
  upload(){}
  execelUploadDateToUploadSummary(response : any){}
}
