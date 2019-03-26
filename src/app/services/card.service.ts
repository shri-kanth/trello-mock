import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from '../models/Card';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  activeCardManagerListIdArray:Number[];

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

  activateManager(listId:number){
    let alreadyPresent = false;
    if(this.activeCardManagerListIdArray){
      let index = this.activeCardManagerListIdArray.indexOf(listId); 
      if(index > -1){
        alreadyPresent =true;
      }
    }else{
      this.activeCardManagerListIdArray = [];
    }
    if(!alreadyPresent){
      this.activeCardManagerListIdArray.push(listId);
    }
  }

  deActivateManager(listId:number){
    if(this.activeCardManagerListIdArray){
      let index = this.activeCardManagerListIdArray.indexOf(listId); 
      if(index > -1){
        this.activeCardManagerListIdArray.splice(index,1);
      }
    }
  }

  isManagerActive(listId:number){
    if(this.activeCardManagerListIdArray){
      return this.activeCardManagerListIdArray.indexOf(listId) > -1;
    }else{
      return false;
    }
    
  }

}
