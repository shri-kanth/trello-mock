import { Component, OnInit } from '@angular/core';

import { BoardService } from  '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  boards:Board[];

  isAddBoardManagerActive:Boolean;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
     this.isAddBoardManagerActive = false;
  	 this.boardService.getAllBoards().subscribe(boards => {
      this.boards = boards;
    });
  }

  onCreateNewBoard():void{
    this.isAddBoardManagerActive = true;
  }

  boardManagerEventEmitter(boardEvent):void{
    console.log("Recieved Board Message");
    if(boardEvent){
      this.boardService.getAllBoards().subscribe(boards => {
        this.boards = boards;
      });   
    }else if(boardEvent === undefined){
      console.log("Recieved Cancel Board Message");
      this.isAddBoardManagerActive = false; 
    }
       
  }

}
