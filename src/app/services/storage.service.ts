import { Injectable } from '@angular/core';

import { Board } from '../models/Board';
import { Entity } from '../models/Entity';
import { List } from '../models/List';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public static readonly BOARD_ENTITY:string = "board";
  
  public static readonly LIST_ENTITY:string = "list";
  
  public static readonly CARD_ENTITY:string = "card";
  
  private readonly IS_FIRST_TIME_USER:string = "isFirstTimeUser";

  private readonly BOARD_INDEX_KEY:string = "boardIndex";

  private readonly NEXT_BOARD_ID_KEY:string = "nextBoardId";

  private readonly BOARD_KEY_PREFIX:string = "board-";

  private readonly LIST_INDEX_SUFFIX:string = "-listIndex";

  private readonly NEXT_LIST_ID_KEY:string = "nextListId";

  private readonly LIST_KEY_PREFIX:string = "list-";

  private readonly CARD_INDEX_SUFFIX:string = "-cardIndex";

  private readonly NEXT_CARD_ID_KEY:string = "nextCardId";

  private readonly CARD_KEY_PREFIX:string = "card-";

  constructor() { 
    if(this.isFirstTimeUser()){
      this.initializeFirstTimeUser();
      this.updateFirstTimeUser();
    }
  }

  saveOrUpdate(entityType:string,entity:Entity):Entity{
    if(entity.id === undefined || entity.id === null){
      let id = this.getNextId(entityType);
      entity.id = (id === undefined || id === null) ? 0 : Number(id);
      this.addToIndex(entityType,entity);
      this.setNextId(entityType,String(entity.id+1));
    }
    localStorage.setItem(this.getKey(entityType,entity),JSON.stringify(entity));
    return this.get(entityType,String(entity.id));
  }

  get(entityType:string,id:string):Entity{
    switch(entityType){
      case StorageService.BOARD_ENTITY : return JSON.parse(localStorage.getItem(this.BOARD_KEY_PREFIX+id));
      case StorageService.LIST_ENTITY : return JSON.parse(localStorage.getItem(this.LIST_KEY_PREFIX+id));
      case StorageService.CARD_ENTITY : return JSON.parse(localStorage.getItem(this.CARD_KEY_PREFIX+id));
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    } 
  }

  getAll(entityType:string,parentId:string):Entity[]{
    let entityIndex = this.getIndex(entityType,parentId);
    let entityArray = [];
    entityIndex.forEach(id => {
      entityArray.push(this.get(entityType,id))
    });
    return entityArray;
  }

  delete(entityType:string,entity:Entity):void{
    this.removeFromIndex(entityType,entity);
    localStorage.removeItem(this.getKey(entityType,entity));
  }

  private initializeFirstTimeUser():void{
    let board = this.initializeBoardSetUp("Sample Board");
    
    let list1 = this.initializeListSetUp("Sample List 1",board.id);
    let card1 = this.initializeCardSetUp("Card 1","Test Description",list1.id);
    let card2 = this.initializeCardSetUp("Card 2","Test Description",list1.id);
    
    let list2 = this.initializeListSetUp("Sample List 2",board.id);
    let card1a = this.initializeCardSetUp("Card 1a","Test Description",list1.id);
    let card2a = this.initializeCardSetUp("Card 2a","Test Description",list1.id);
  }

  private initializeBoardSetUp(title:string):Board{
    let board = new Board();
    board.title = title;
    return <Board>this.saveOrUpdate(StorageService.BOARD_ENTITY,board);
  }

  private initializeListSetUp(title:string,boardId:number):List{
    let list = new List();
    list.title = title;
    list.boardId = boardId
    return <List>this.saveOrUpdate(StorageService.LIST_ENTITY,list);
  }

  private initializeCardSetUp(title:string,description:string,listId:number):Card{
    let card = new Card();
    card.title = title;
    card.description = description;
    card.listId = listId;
    return <Card>this.saveOrUpdate(StorageService.CARD_ENTITY,card);
  }
 
  private isFirstTimeUser():Boolean{
    return localStorage.getItem(this.IS_FIRST_TIME_USER) === undefined || localStorage.getItem(this.IS_FIRST_TIME_USER) === null ;
  }

  private updateFirstTimeUser():void{
    localStorage.setItem(this.IS_FIRST_TIME_USER,"false");
  }

  private addToIndex(entityType:string,entity:Entity):void{
    let index = this.getIndex(entityType,this.getParentId(entityType,entity));
    if(index.indexOf(String(entity.id)) > -1) {
        return;
    }else{
      index.push(String(entity.id));
      localStorage.setItem(this.getIndexKey(entityType,this.getParentId(entityType,entity),),JSON.stringify(index));
    }
  }

  private removeFromIndex(entityType:string,entity:Entity):void{
    let index = this.getIndex(entityType,this.getParentId(entityType,entity));
    if(index.indexOf(String(entity.id)) > -1) {
      index.splice(index.indexOf(String(entity.id)),1);
      localStorage.setItem(this.getIndexKey(entityType,this.getParentId(entityType,entity)),JSON.stringify(index));
    }else{
      return;
    }
  }

  private getParentId(entityType:string,entity:Entity):string{
    switch(entityType){
      case StorageService.BOARD_ENTITY : return null;
      case StorageService.LIST_ENTITY : 
        {
          const list = entity as List;
          return String(list.boardId);
        };
      case StorageService.CARD_ENTITY :  
        {
          const card = entity as Card;
          return String(card.listId);
        };
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    }
  }
 
  private getKey(entityType:string,entity:Entity):string{
    switch(entityType){
      case StorageService.BOARD_ENTITY : return this.BOARD_KEY_PREFIX+entity.id;
      case StorageService.LIST_ENTITY : return this.LIST_KEY_PREFIX+entity.id;
      case StorageService.CARD_ENTITY : return this.CARD_KEY_PREFIX+entity.id; 
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    }
  }

  private getIndex(entityType:string,parentId:string):string[]{
    let indexString = localStorage.getItem(this.getIndexKey(entityType,parentId));
    return (indexString === undefined  || indexString === null) ? [] : JSON.parse(indexString);
  }

  private getIndexKey(entityType:string,parentId:string){
    switch(entityType){
      case StorageService.BOARD_ENTITY : return this.BOARD_INDEX_KEY;
      case StorageService.LIST_ENTITY : return this.BOARD_KEY_PREFIX+parentId+this.LIST_INDEX_SUFFIX;
      case StorageService.CARD_ENTITY : return this.LIST_KEY_PREFIX+parentId+this.CARD_INDEX_SUFFIX; 
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    }
  }

  private getNextId(entityType:string):string{
    switch(entityType){
      case StorageService.BOARD_ENTITY : return localStorage.getItem(this.NEXT_BOARD_ID_KEY); 
      case StorageService.LIST_ENTITY : return localStorage.getItem(this.NEXT_LIST_ID_KEY); 
      case StorageService.CARD_ENTITY : return localStorage.getItem(this.NEXT_CARD_ID_KEY); 
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    }
  }

  private setNextId(entityType:string,id:string):void{
    switch(entityType){
      case StorageService.BOARD_ENTITY : localStorage.setItem(this.NEXT_BOARD_ID_KEY,id); return;
      case StorageService.LIST_ENTITY : localStorage.setItem(this.NEXT_LIST_ID_KEY,id); return;
      case StorageService.CARD_ENTITY : localStorage.setItem(this.NEXT_CARD_ID_KEY,id); return; 
      default : console.log("UNKNOWN ENITY TYPE : "+entityType);
    }
  }

}
