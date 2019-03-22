import { Component, OnInit } from '@angular/core';

import { BoardService } from  '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-personal-boards',
  templateUrl: './personal-boards.component.html',
  styleUrls: ['./personal-boards.component.css']
})
export class PersonalBoardsComponent implements OnInit {

  boards:Board[];

  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.boardService.getAllBoards().subscribe(boards => {
      this.boards = boards;
    });
  }

  onCreateNewBoard():void{
    this.boardService.activateManager();
  }

}
