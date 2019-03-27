import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { List } from '../models/List';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

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

  updateListPosition(list:List,
    previousIndex:number,presentIndex:number):Observable<List>{
    return of(<List>this.storageService
                          .updatePosition(StorageService.LIST_ENTITY,
                            list,String(list.boardId),String(list.boardId),
                            previousIndex,presentIndex));
  }

  deleteList(list:List):Observable<void>{
    return of(this.storageService.delete(StorageService.LIST_ENTITY,list));
  }

}
