import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { List } from '../models/List';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  isManagerActive:Boolean = false;

  constructor() { }

  getListsByBoardId(boardId:number):Observable<List[]>{
  	console.log("Fetching Lists for BoardId : "+boardId);
    this.initialize();
  	return of(this.mockListArray.filter(list => list.boardId == boardId));
  }

  addNewList(boardId:number, title:string):Observable<List>{
    let list = {
      id: this.mockListArray.length+1,
      title: title,
      boardId: boardId
    }
    this.mockListArray.push(list);
    return of(list);
  }

  deleteList(id:Number):Observable<List>{
    let list = this.mockListArray.find(l => l.id === id);
    this.mockListArray = this.mockListArray.filter(l => l.id != id);
    return of(list);
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }

  mockListArray:List[];

  initialize() {
    if(this.mockListArray === undefined || this.mockListArray.length == 0){
      this.mockListArray = [ 
        {
          id: 0,
          boardId: 0,
          title: "List 1"
        },
        {
          id: 1,
          boardId: 0,
          title: "List 2"
        },
        {
          id: 2,
          boardId: 0,
          title: "List 3"
        },
        {
          id: 3,
          boardId: 1,
          title: "List 1a"
        },
        {
          id: 4,
          boardId: 1,
          title: "List 2a"
        },
        {
          id: 5,
          boardId: 1,
          title: "List 3a"
        }
      ];
    }
  }

}
