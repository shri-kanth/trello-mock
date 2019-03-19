import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  isManagerActive:Boolean = false;

  constructor() { }

  getCardsByListId(listId:number):Observable<Card[]>{
  	console.log("Fetching Cards By List : "+listId);
    this.initialize();
  	return of(this.mockCardArray.filter(card => card.listId == listId));
  }

  addNewCard(listId:number, title:string, description:string):Observable<Card>{
    let card = {
      id: this.mockCardArray.length+1,
      title: title,
      listId: listId,
      description: description
    }
    this.mockCardArray.push(card);
    return of(card);
  }

  deleteCard(id:Number):Observable<Card>{
    let card = this.mockCardArray.find(c => c.id === id);
    this.mockCardArray = this.mockCardArray.filter(c => c.id != id);
    return of(card);
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }


  mockCardArray:Card[];

  initialize() {
    if(this.mockCardArray === undefined || this.mockCardArray.length == 0){
      this.mockCardArray = [
       {
          id: 0,
          listId: 0,
          title: "Card 1",
          description: "Test Card" 
        },
        {
          id: 2,
          listId: 1,
          title: "Card 1a",
          description: "Test Card" 
        },
        {
          id: 4,
          listId: 1,
          title: "Card 2a",
          description: "Test Card" 
        },
        {
          id: 7,
          listId: 0,
          title: "Card 2",
          description: "Test Card" 
        }
      ];
    }
  }
}
