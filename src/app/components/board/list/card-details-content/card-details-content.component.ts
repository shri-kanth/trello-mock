import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/Card';

import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.css']
})
export class CardDetailsContentComponent implements OnInit {

  @Output() cardDetailsContentEventEmitter:EventEmitter<any> = new EventEmitter();
  
  @Input() card:Card;

  cardDescription:string;

  isDescriptionEditorActive:Boolean;

  isDescriptionUpdated:Boolean;

  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.isDescriptionEditorActive = false;
    this.isDescriptionUpdated = false;
    this.cardDescription = this.card.description;
  }

  activateDescriptionEditor():void{
    console.log("CARD DESCRIPTION EDITOR ACTIVATED");
    this.isDescriptionEditorActive = true;
  }

  onUpdateCardDescription():void{
    console.log("CARD DESCRIPTION UPDATED");
    console.log(this.cardDescription);
    this.isDescriptionUpdated = true;
  }

  onUpdateCardDescriptionConfirmation():void{
    console.log("##  CARD DESCRIPTION UPDATE EVENTS");
    this.cardService
      .updateCardDescription(this.card.id,this.cardDescription)
      .subscribe(card => {
        this.card = card;
        this.card.description;
        this.isDescriptionUpdated = false;
        this.isDescriptionEditorActive = false;
        this.cardDetailsContentEventEmitter.emit(this.card);
      });
  }

  onUpdateCardDescriptionCancel():void{
    console.log("##  CARD DESCRIPTION UPDATE EVENTS CANCEL");
    this.cardDescription = this.card.description;
    this.isDescriptionUpdated = false;
    this.isDescriptionEditorActive = false;
  }
}
