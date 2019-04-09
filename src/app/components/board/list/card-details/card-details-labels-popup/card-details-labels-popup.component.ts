import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-details-labels-popup',
  templateUrl: './card-details-labels-popup.component.html',
  styleUrls: ['./card-details-labels-popup.component.css']
})
export class CardDetailsLabelsPopupComponent implements OnInit {

  @Output() labelsPopupEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close(event):void{
    console.log("HERE 1");
    event.stopPropagation();
    this.labelsPopupEventEmitter.emit(null);
  }

}
