import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.css']
})
export class DialogNewComponent implements OnInit {

  events: any[] = [];
  data: timelineModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      { status: '55. Shipment on Hold', date: '05/07/2022 07:40 PM', LASTUPDBY: 'buyer', LASTCMT: "please find attached marine insurance policy" },
      { status: '20. Query', date: '05/07/2022 06:37 PM', LASTUPDBY: 'rajeev', LASTCMT: "Insurance Copy Missing" },
      { status: '20. Query', date: '06/07/2022 10:25 AM', LASTUPDBY: 'buyer', LASTCMT: "Please find attached document as required" },
      { status: '40. Confirm', date: '06/07/2022 12:10 PM', LASTUPDBY: 'ops_team', LASTCMT: "Pre Ship Check Completed, Proceed for CHA" },
      { status: '50. Sent to CHA', date: '06/07/2022 04:30 PM', LASTUPDBY: 'clf_team', LASTCMT: "Please Clearn Shipment and Provide Checklist" },
      { status: '60. Checklist for Approval', date: '07/07/2022 03:34 PM', LASTUPDBY: 'cha', LASTCMT: "CHECKLIST SENT FOR APPROVAL" },
      { status: '65. Checklist Approved', date: '08/07/2022 09:15 AM', LASTUPDBY: 'buyer', LASTCMT: "CHECKLIST SENT FOR APPROVAL" },
      { status: '71. Shipment Arrived', date: '09/07/2022 10:30 AM', LASTUPDBY: 'cha', LASTCMT: "SHPT ARRIVED (NIGHT)" },
      { status: '55. Shipment on Hold', date: '09/07/2022 12:30 PM', LASTUPDBY: 'cha', LASTCMT: "BONDING FORMALITIES IS PENDING DUE TO INSURANCE POLICY SHORTFALL NO SUFFICIENT BALANCE AVAILABLE." },
      { status: '55. Shipment on Hold', date: '11/07/2022 04:10 PM', LASTUPDBY: 'cha', LASTCMT: "SHPT ON HOLD FOR MARINE INSURANCE POLICY " },
      { status: '55. Shipment on Hold', date: '12/07/2022 05:05 PM', LASTUPDBY: 'cha', LASTCMT: "SHPT ON HOLD FOR MARINE INSURANCE POLICY " },
      { status: '55. Shipment on Hold', date: '13/07/2022 02:10 PM', LASTUPDBY: 'buyer', LASTCMT: "please find attached marine insurance policy" },
      { status: '71. Shipment Arrived', date: '14/07/2022 09:02 AM', LASTUPDBY: 'clf_team', LASTCMT: "please expedite " },
      { status: '80. BOE Filed', date: '14/07/2022 11:08 AM', LASTUPDBY: 'cha', LASTCMT: "1MARINE INSURANCE POLICY RECEIVED AND SUBMITTED IN FILE TO CUSTOMS ACCEPTANCE." },
      { status: '90. Shipment Cleared', date: '15/07/2022 1:58 PM', LASTUPDBY: 'cha', LASTCMT: "SHIPMENT CLEARED" },
    ];

    this.events.reverse();

    var childData: timelineChildModel;
    var mineData: timelineModel;

    var counter = 0;
    for (var item of this.events) {

      childData = {};
      mineData = {};

      childData.date = item.date;
      childData.LASTUPDBY = item.LASTUPDBY;
      childData.LASTCMT = item.LASTCMT;

      mineData.status = item.status;
      mineData.children = [];
      // mineData.children.push(childData);

      if (counter == 0) {
        mineData.children.push(childData);
        this.data.push(mineData);
      }
      else if (counter > 0 && this.data.length != undefined && this.data.length > 0) {
        if (item.status == this.data[this.data.length - 1].status) {
          this.data[this.data.length - 1].children?.push(childData);
        } else {
          mineData.children.push(childData);
          this.data.push(mineData)
        }
      }

      counter++;
    }
    console.log(this.data);

  }

}


export class timelineModel {
  status?: String;
  children?: timelineChildModel[];
}

export class timelineChildModel {
  date?: String;
  LASTUPDBY?: String;
  LASTCMT?: String;
}
