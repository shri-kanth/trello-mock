import { Component, OnInit, Input } from '@angular/core';

import { List } from '../../models/List';
import { Card } from '../../models/Card';

import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: List;

  cards:Card[];
  
  constructor(private cardService:CardService) { }

  ngOnInit() {
  	this.cardService
      .getCardsByListId(this.list.id)
      .subscribe(cards => 
        {
          this.cards = cards;
        });
  }
}
