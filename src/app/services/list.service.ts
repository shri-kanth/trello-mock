import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { List } from '../models/List';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  isManagerActive:Boolean = false;

  constructor(
    private storageService:StorageService
  ) { }

  getListsByBoardId(boardId:number):Observable<List[]>{
  	return of(<List[]>this.storageService.getAll(StorageService.LIST_ENTITY,String(boardId)));
  }

  addNewList(boardId:number, title:string):Observable<List>{
    let newList = new List();
    newList.title = title;
    newList.boardId = boardId;
    return of(<List>this.storageService.saveOrUpdate(StorageService.LIST_ENTITY,newList));
  }

  deleteList(list:List):Observable<void>{
    return of(this.storageService.delete(StorageService.LIST_ENTITY,list));
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }

}
