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
          id: 1,
          listId: 0,
          title: "Card 2",
          description: "Test Card" 
        },
        {
          id: 2,
          listId: 1,
          title: "Card gkmgtk",
          description: "Test Card" 
        },
        {
          id: 3,
          listId: 1,
          title: "Card ggitigiottttt",
          description: "Test Card" 
        },
        {
          id: 4,
          listId: 1,
          title: "Card dgnfjkgnf",
          description: "Test Card" 
        },
        {
          id: 5,
          listId: 2,
          title: "Card gmfkmgk2",
          description: "Test Card" 
        },
        {
          id: 6,
          listId: 2,
          title: "Card gnfjngjfngj",
          description: "Test Card" 
        },
        {
          id: 7,
          listId: 0,
          title: "Card First of You",
          description: "Test Card" 
        },
        {
          id: 8,
          listId: 3,
          title: "Card 1",
          description: "Test Card" 
        },
        {
          id: 9,
          listId: 3,
          title: "Card 2",
          description: "Test Card" 
        },
        {
          id: 10,
          listId: 4,
          title: "Card gkmgtk",
          description: "Test Card" 
        },
        {
          id: 11,
          listId: 5,
          title: "Card ggitigiottttt",
          description: "Test Card" 
        },
        {
          id: 12,
          listId: 5,
          title: "Card dgnfjkgnf",
          description: "Test Card" 
        },
        {
          id: 13,
          listId: 3,
          title: "Card gmfkmgk2",
          description: "Test Card" 
        },
        {
          id: 14,
          listId: 5,
          title: "Card gnfjngjfngj",
          description: "Test Card" 
        },
        {
          id: 15,
          listId: 4,
          title: "Card First of You",
          description: "Test Card" 
        }
      ];
    }
  }
}
