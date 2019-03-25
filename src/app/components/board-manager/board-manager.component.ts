import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { BoardService } from  '../../services/board.service';

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
    
    this.boardService
      .addNewBoard(this.title)
      .subscribe(newBoard => this.boardManagerEventEmitter.emit(newBoard));

    this.boardService.deActivateManager();
  }

  onCancel(){
    this.title = undefined;
    this.boardService.deActivateManager();
  }

}
