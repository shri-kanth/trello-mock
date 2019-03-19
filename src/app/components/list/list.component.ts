import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  @Input() listIdArray: Number[];

  isAddCardManagerActive:Boolean;

  cards:Card[];

  private LIST_ID_PREFIX:string = 'list-id';
  
  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.isAddCardManagerActive = false;
  	this.cardService
      .getCardsByListId(this.list.id)
      .subscribe(cards => 
        {
          this.cards = cards;
        });
  }

  onAddNewCard() {
    this.isAddCardManagerActive = true; 
  }

  cardManagerEventEmitter(cardEvent){
    if(cardEvent && cardEvent.listId == this.list.id){   
      this.cardService
      .getCardsByListId(this.list.id)
      .subscribe(cards => 
        {
          this.cards = cards;
        });
      this.isAddCardManagerActive = false;
      console.log(this);
    }else{
      console.log("Recieved Cancel List Message");
      this.isAddCardManagerActive = false;
      console.log(this);
    }
  }
  
  dropCard(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  getListId():string{
    return this.LIST_ID_PREFIX+'-'+this.list.id;
  }

  getConnectedList():string[]{
    return this.listIdArray
                .filter(id => id != this.list.id)
                .map(id => this.LIST_ID_PREFIX+'-'+id);
  }
}
