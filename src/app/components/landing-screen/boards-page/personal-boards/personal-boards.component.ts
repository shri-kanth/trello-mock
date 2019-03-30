import { Component, OnInit } from '@angular/core';

import { BoardService } from  'src/app/services/board.service';
import { Board } from 'src/app/models/Board';

@Component({
  selector: 'app-personal-boards',
  templateUrl: './personal-boards.component.html',
  styleUrls: ['./personal-boards.component.css']
})
export class PersonalBoardsComponent implements OnInit {

  boards:Board[];

  isAddBoardActive:Boolean;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.isAddBoardActive = false;
    this.boardService.getAllBoards().subscribe(boards => {
      this.boards = boards;
    });
  }

  onCreateNewBoard():void{
    this.isAddBoardActive = true;
  }

  addBoardEventReciever(newBoardEvent:any){
    if(newBoardEvent){
      this.boardService.getAllBoards().subscribe(boards => {
        this.boards = boards;
      });
    }
    this.isAddBoardActive = false;
  }

}
