import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.css']
})
export class DialogNewComponent implements OnInit {

  events: any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.events = [
      {status: '20. Query', date: '05/07/2022 06:37 PM', LASTUPDBY : 'rajeev', image: 'game-controller.jpg', LASTCMT: "Insurance Copy Missing"},
      {status: '20. Query', date: '06/07/2022 10:25 AM', LASTUPDBY : 'buyer', LASTCMT: "Please find attached document as required"},
      {status: '40. Confirm', date: '06/07/2022 12:10 PM',LASTUPDBY : 'ops_team', LASTCMT: "Pre Ship Check Completed, Proceed for CHA"},
      {status: '50. Sent to CHA', date: '06/07/2022 04:30 PM', LASTUPDBY : 'clf_team', LASTCMT: "Please Clearn Shipment and Provide Checklist"},
      {status: '60. Checklist for Approval', date: '07/07/2022 03:34 PM', LASTUPDBY : 'cha', LASTCMT: "07.07.2022 CHECKLIST SENT FOR APPROVAL"},
      {status: '65. Checklist Approved', date: '08/07/2022 09:15 AM', LASTUPDBY : 'buyer', LASTCMT: "07.07.2022 CHECKLIST SENT FOR APPROVAL"},
      {status: '71. Shipment Arrived', date: '09/07/2022 10:30 AM', LASTUPDBY : 'cha', LASTCMT: "08.07.2022 SHPT ARRIVED (NIGHT)"},
      {status: '55. Shipment on Hold', date: '09/07/2022 12:30 PM', LASTUPDBY : 'cha', LASTCMT: "09.07.2022  BONDING FORMALITIES IS PENDING DUE TO INSURANCE POLICY SHORTFALL NO SUFFICIENT BALANCE AVAILABLE."},
      {status: '55. Shipment on Hold', date: '11/07/2022 04:10 PM', LASTUPDBY : 'cha', LASTCMT: "11.07.2022 SHPT ON HOLD FOR MARINE INSURANCE POLICY "},
      {status: '55. Shipment on Hold', date: '12/07/2022 05:05 PM', LASTUPDBY : 'cha', LASTCMT: "12.07.2022 SHPT ON HOLD FOR MARINE INSURANCE POLICY "},
      {status: '55. Shipment on Hold', date: '13/07/2022 02:10 PM', LASTUPDBY : 'buyer', LASTCMT: "please find attached marine insurance policy"},
      {status: '71. Shipment Arrived', date: '14/07/2022 09:02 AM', LASTUPDBY : 'clf_team', LASTCMT: "please expedite "},
      {status: '80. BOE Filed', date: '14/07/2022 11:08 AM', LASTUPDBY : 'cha', LASTCMT: "14.07.2022 MARINE INSURANCE POLICY RECEIVED AND SUBMITTED IN FILE TO CUSTOMS ACCEPTANCE."},
      {status: '90. Shipment Cleared', date: '15/07/2022 1:58 PM', LASTUPDBY : 'cha', LASTCMT: "15.07.2022 SHIPMENT CLEARED"},
  ];

  this.events.reverse();

  }

}
