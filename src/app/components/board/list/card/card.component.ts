import { Component, OnInit, Input } from '@angular/core';

import { Card } from 'src/app/models/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 isActive:Boolean;

 @Input() card:Card;

  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.isActive = false;
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

}
