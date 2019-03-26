import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { List } from '../models/List';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  activeListManagerBoardIdArray:number[];

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

  activateManager(boardId:number){
    let alreadyPresent = false;
    if(this.activeListManagerBoardIdArray){
      let index = this.activeListManagerBoardIdArray.indexOf(boardId); 
      if(index > -1){
        alreadyPresent =true;
      }
    }else{
      this.activeListManagerBoardIdArray = [];
    }
    if(!alreadyPresent){
      this.activeListManagerBoardIdArray.push(boardId);
    }
  }

  deActivateManager(boardId:number){
    console.log("DEACTIVE MANAGER Before");
    console.log(this.activeListManagerBoardIdArray);
    if(this.activeListManagerBoardIdArray){
      let index = this.activeListManagerBoardIdArray.indexOf(boardId); 
      if(index > -1){
        this.activeListManagerBoardIdArray.splice(index,1);
      }
    }
    console.log("DEACTIVE MANAGER");
    console.log(this.activeListManagerBoardIdArray);
  }

  isManagerActive(boardId:number){
    console.log("IS ACTIVE MANAGER");
    console.log(this.activeListManagerBoardIdArray);
    if(this.activeListManagerBoardIdArray){
      return this.activeListManagerBoardIdArray.indexOf(boardId) > -1;
    }else{
      return false;
    }
    
  }

}
