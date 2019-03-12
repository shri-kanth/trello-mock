import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Board } from '../models/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getAllBoards():Observable<Board[]>{
  	console.log("Fetching All Boards");
    this.initialize();
  	return of(this.mockBoardArray);
  }

  getBoardById(id:number):Observable<Board>{
    console.log("Fetching Board by ID : "+id);
    this.initialize();
    return of(this.mockBoardArray.find(b => b.id == id));
  }

  mockBoardArray:Board[];

  initialize() {
    if(this.mockBoardArray === undefined || this.mockBoardArray.length == 0){
      this.mockBoardArray = [ 
        {
          id: 0,
          title: "Awesome Board"
        },
        {
          id: 1,
          title: "Board 2"
        }
      ]
    }
  }
}
