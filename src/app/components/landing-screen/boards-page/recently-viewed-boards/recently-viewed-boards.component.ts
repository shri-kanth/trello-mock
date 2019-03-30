import { Component, OnInit } from '@angular/core';

import { BoardService } from  'src/app/services/board.service';
import { Board } from 'src/app/models/Board';

@Component({
  selector: 'app-recently-viewed-boards',
  templateUrl: './recently-viewed-boards.component.html',
  styleUrls: ['./recently-viewed-boards.component.css']
})
export class RecentlyViewedBoardsComponent implements OnInit {

  recentlyViewedBoards:Board[];

  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.boardService.getRecentlyViewedBoards().subscribe(boards => {
      this.recentlyViewedBoards = boards;
    });
  }

}
