import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Board } from '../models/Board';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  isManagerActive:Boolean = false;

  constructor(
    private storageService:StorageService
  ) { }

  getAllBoards():Observable<Board[]>{
    return of(<Board[]>this.storageService.getAll(StorageService.BOARD_ENTITY,null)); 
  }

  getBoardById(id:number):Observable<Board>{
    return of(<Board>this.storageService.get(StorageService.BOARD_ENTITY,String(id)));
  }

  getRecentlyViewedBoards():Observable<Board[]>{
    return of(<Board[]>this.storageService.getAll(StorageService.BOARD_ENTITY,null)); 
  }

  addNewBoard(title:string):Observable<Board>{
    let board = new Board();
    board.title = title;
    return of(<Board>this.storageService.saveOrUpdate(StorageService.BOARD_ENTITY,board));
  }

  deleteBoard(id:Number):Observable<Board>{
    let board = undefined;
    // let board = this.mockBoardArray.find(b => b.id === id);
    // this.mockBoardArray = this.mockBoardArray.filter(b => b.id != id);
    return of(board);
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }

}
