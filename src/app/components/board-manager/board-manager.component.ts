import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { BoardService } from  '../../services/board.service';

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
    
    this.boardService
      .addNewBoard(this.title)
      .subscribe();

    this.boardService.deActivateManager();
  }

  onCancel(){
    this.title = undefined;
    this.boardService.deActivateManager();
  }

}
