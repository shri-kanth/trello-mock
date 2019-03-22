import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Board } from '../models/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  isManagerActive:Boolean = false;

  constructor() { }

  getAllBoards():Observable<Board[]>{
    this.initialize();
  	return of(this.mockBoardArray);
  }

  getBoardById(id:number):Observable<Board>{
    console.log("Fetching Board by ID : "+id);
    this.initialize();
    return of(this.mockBoardArray.find(b => b.id == id));
  }

  getRecentlyViewedBoards():Observable<Board[]>{
    this.initialize();
  	return of(this.mockBoardArray);
  }

  addNewBoard(title:string):Observable<Board>{
    let board = {
      id: this.mockBoardArray.length+1,
      title: title
    }
    this.mockBoardArray.push(board);
    return of(board);
  }

  deleteBoard(id:Number):Observable<Board>{
    let board = this.mockBoardArray.find(b => b.id === id);
    this.mockBoardArray = this.mockBoardArray.filter(b => b.id != id);
    return of(board);
  }

  activateManager():void{
    this.isManagerActive = true;
  }

  deActivateManager():void{
    this.isManagerActive = false;
  }

  mockBoardArray:Board[];

  initialize() {
    if(this.mockBoardArray === undefined || this.mockBoardArray.length == 0){
      this.mockBoardArray = [ 
        {
          id: 0,
          title: "Test Board"
        }
      ]
    }
  }
}