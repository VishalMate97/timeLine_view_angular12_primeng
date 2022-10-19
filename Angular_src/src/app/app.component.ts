import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Customer, Representative } from "./customer";
import { MessageService } from "primeng/api";
import { Table } from 'primeng/table';
import { TempserviceService } from './tempservice.service';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogNewComponent } from './dialog-new/dialog-new.component';
// import * as cloneDeep from 'lodash';
// import _ from 'lodash';
// const cloneDeep = require('lodash/cloneDeep');
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(public dialogService: DialogService) {}

  ngOnInit() {
   
  }
  
  display: boolean = false;

  showDialog() {
    const ref = this.dialogService.open(DialogNewComponent, {
      header: 'Notification TimeLine View',
      width: '60%',
      height: '80%'
  });
  }
  
}
