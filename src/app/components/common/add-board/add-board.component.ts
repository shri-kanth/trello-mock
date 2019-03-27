import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { BoardService } from  'src/app/services/board.service';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.css']
})
export class AddBoardComponent implements OnInit {

  title:string;

  @Output() addBoardEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.boardService
      .addNewBoard(this.title)
      .subscribe(newBoard => this.addBoardEventEmitter.emit(newBoard));
  }

  onCancel(){
    this.title = undefined;
    this.addBoardEventEmitter.emit(null);
  }

}
