import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from '../models/Card';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardLabelDisplayActive:boolean;

  constructor(private storageService:StorageService) {
    this.cardLabelDisplayActive = false;
   }

  getCardsByListId(listId:number):Observable<Card[]>{
  	return of(<Card[]>this.storageService.getAll(StorageService.CARD_ENTITY,String(listId)));
  }

  addNewCard(listId:number, title:string, description:string):Observable<Card>{
    let newCard = new Card();
    newCard.title = title;
    newCard.description = description;
    newCard.listId = listId;
    return of(<Card>this.storageService.saveOrUpdate(StorageService.CARD_ENTITY,newCard));
  }

  updateCardPosition(card:Card,
    prevoiusListId:number,presentListId:number,
    previousIndex:number,presentIndex:number):Observable<Card>{
    return of(<Card>this.storageService
                          .updatePosition(StorageService.CARD_ENTITY,
                            card,String(prevoiusListId),String(presentListId),
                            previousIndex,presentIndex));
  }

  deleteCard(card:Card):Observable<void>{
    return of(this.storageService.delete(StorageService.CARD_ENTITY,card));
  }
  
}
