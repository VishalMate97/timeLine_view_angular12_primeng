import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Customer, Representative } from "./customer";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';
import { TempserviceService } from './tempservice.service';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogNewComponent } from './dialog-new/dialog-new.component';
import { DatePipe } from '@angular/common';
// import * as cloneDeep from 'lodash';
// import _ from 'lodash';
// const cloneDeep = require('lodash/cloneDeep');
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(public dialogService: DialogService, public datepipe: DatePipe) {}

  ngOnInit() {

    var myString = "2022-10-18 17:31:00.797";
    let newDate : Date = new Date(myString);
    this.datepipe.transform(newDate, 'yyyy/MM/dd, h:mm a')

    

   console.log(this.datepipe.transform(newDate, 'yyyy/MM/dd, h:mm a'));
  }
  
  display: boolean = false;

  showDialog() {
    const ref = this.dialogService.open(DialogNewComponent, {
      header: 'Notification TimeLine View',
      width: '45%',
      height: '80%'
  });
  }
  
}
