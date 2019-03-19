import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { BoardService } from  '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {

  @Output() boardManagerEventEmitter: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  }

  onSubmit() {
    let newBoard;
    
    this.boardService
      .addNewBoard(this.title)
      .subscribe(board => newBoard = board);

    this.boardService.deActivateManager();
    
    this.boardManagerEventEmitter.emit(newBoard);
    console.log(newBoard);
    console.log("Board Create Event Emitted");
  }

  onCancel(){
    this.title = undefined;
    this.boardManagerEventEmitter.emit(undefined);
    console.log("Board Create Cancel Event Emitted");
  }

}
