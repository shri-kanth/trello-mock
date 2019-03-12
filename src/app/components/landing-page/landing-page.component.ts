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

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  	 this.boardService.getAllBoards().subscribe(boards => {
      this.boards = boards;
    });
  }

}
