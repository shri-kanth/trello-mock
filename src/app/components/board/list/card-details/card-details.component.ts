import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() card:Card;

  @Output() cardDetailsEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private cardService:CardService) { }

  ngOnInit() {
  }

  close():void{
    this.cardDetailsEventEmitter.emit(this.card);
    console.log("SENT CARD DETAILS EVENT");
  }

  onCardTitleUpdateEvent(event):void{
    console.log("ON BLUR EVENT");
    this.cardService
      .updateCardTitle(this.card.id, event.target.value)
      .subscribe(card => {
        this.card = card;
      });
  }

  cardDetailsContentEventReceiver(event):void{
    console.log("ON DETAILS CONTENT EVENT");
    this.cardService
      .getCardById(this.card.id)
      .subscribe(card => {
        this.card = card;
      });
  }

}
