import { Component, OnInit, Input, ViewChild ,ElementRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { List } from 'src/app/models/List';
import { Card } from 'src/app/models/Card';

import { CardService } from 'src/app/services/card.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('cardListWrapper') cardListWrapper: ElementRef;

  @Input() list: List;

  @Input() listIdArray: Number[];

  isAddCardActive:Boolean;

  cards:Card[];

  private LIST_ID_PREFIX:string = 'list-id';
  
  constructor(
    private listService:ListService,
    private cardService:CardService
  ) { }

  ngOnInit() {
    this.isAddCardActive = false;
  	this.cardService
      .getCardsByListId(this.list.id)
      .subscribe(cards => 
        {
          this.cards = cards;
        });
  }

  onAddNewCard() {
    console.log(this.cardListWrapper.nativeElement.scrollTop);
    console.log(this.cardListWrapper.nativeElement.scrollHeight);
    this.isAddCardActive = true;
    console.log(this.cardListWrapper.nativeElement.scrollTop);
    console.log(this.cardListWrapper.nativeElement.scrollHeight);
    if(this.cardListWrapper){
      this.cardListWrapper.nativeElement.scrollTop = 50;
      console.log(this.cardListWrapper.nativeElement.scrollTop);
    }
    this.cardListWrapper.nativeElement.scrollIntoView(false)
    console.log(this.cardListWrapper);
    console.log(this.cardListWrapper.nativeElement.scrollTop);
    console.log(this.cardListWrapper.nativeElement.scrollHeight);
  }

  onDelete(){
    this.cards.forEach(card => this.cardService.deleteCard(card));
    this.listService.deleteList(this.list);
  }

  addCardEventReciever(cardEvent){
    if(cardEvent){
      if(cardEvent.listId == this.list.id){
        this.cardService
      .getCardsByListId(this.list.id)
      .subscribe(cards => {
          this.cards = cards;
        });
      }   
    }
    this.isAddCardActive = false;
  }

  cardEventReciever(cardEvent){
    console.log("CARD EVENT RECEIEVED IN LIST");
    console.log(cardEvent);
    if(cardEvent){
      if(cardEvent.listId == this.list.id){
        this.cardService
          .getCardsByListId(this.list.id)
          .subscribe(cards => {
            this.cards = cards;
          });
      }   
    }
    this.isAddCardActive = false;
  }
  
  dropCard(event: CdkDragDrop<Card[]>) {
    let card = <Card> event.previousContainer.data[event.previousIndex];
    let previousListId = Number(this.getIdFromListId(event.previousContainer.id));
    let presentListId = Number(this.getIdFromListId(event.container.id));
    let previousIndex = event.previousIndex;
    let presentIndex = event.currentIndex;
    this.cardService.updateCardPosition(card,previousListId,presentListId,previousIndex,presentIndex).subscribe(() => {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
          
      }
    });
  }

  getListId():string{
    return this.LIST_ID_PREFIX+'-'+this.list.id;
  }

  getIdFromListId(listId:String):string{
    return listId.split("-").pop();
  }

  getConnectedList():string[]{
    return this.listIdArray
                .filter(id => id != this.list.id)
                .map(id => this.LIST_ID_PREFIX+'-'+id);
  }
}
