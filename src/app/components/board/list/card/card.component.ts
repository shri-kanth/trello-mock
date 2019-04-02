import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Card } from 'src/app/models/Card';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 isActive:Boolean;
 isCardDetailsActive: Boolean;

 @Input() card:Card;

 @Output() cardEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.isActive = false;
    this.isCardDetailsActive = false;
  }

  onDelete():void{
    this.cardService.deleteCard(this.card);
  }

  toggleCardLabelDisplay():void{
    this.cardService.cardLabelDisplayActive = !this.cardService.cardLabelDisplayActive;
  }

  isCardLabelDisplayActive():Boolean{
    return this.cardService.cardLabelDisplayActive;
  }

  cardDetailsEventReciever(cardDetailsEvent:any):void{
    console.log("RECEIVED CARD DETAILS EVENT");
    console.log(cardDetailsEvent);
    if(cardDetailsEvent){
      if(cardDetailsEvent.id == this.card.id){
        this.cardService
          .getCardById(this.card.id)
          .subscribe(card => {
            this.card = card;
            this.cardEventEmitter.emit(this.card);
          })
      }   
    }
    this.isCardDetailsActive = false;
  }

}
