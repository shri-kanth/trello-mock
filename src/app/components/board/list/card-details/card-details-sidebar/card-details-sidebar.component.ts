import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details-sidebar',
  templateUrl: './card-details-sidebar.component.html',
  styleUrls: ['./card-details-sidebar.component.css']
})
export class CardDetailsSidebarComponent implements OnInit {

  isLabelPopUpActive:boolean;

  constructor() { }

  ngOnInit() {
    this.isLabelPopUpActive = false;
  }

  labelsPopupEventReciever(event):void{
    console.log("HERE 2");
    this.isLabelPopUpActive = false;
  }

}
