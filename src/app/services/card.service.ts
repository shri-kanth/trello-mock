import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from '../models/Card';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  isManagerActive:Boolean = false;

  constructor(private storageService:StorageService) { }

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

  deleteCard(card:Card):Observable<void>{
    return of(this.storageService.delete(StorageService.CARD_ENTITY,card));
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }

}
