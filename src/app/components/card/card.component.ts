import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../models/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 @Input() card:Card;

  constructor(private cardService:CardService) { }

  ngOnInit() {
  }

  onDelete():void{
    this.cardService.deleteCard(this.card);
  }

}
