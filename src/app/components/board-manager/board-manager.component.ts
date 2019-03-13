import { Component, OnInit } from '@angular/core';

import { BoardService } from  '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {

  title:string;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.boardService.addNewBoard(this.title);
    this.boardService.deActivateManager();
  }

}
