import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ListService } from  '../../services/list.service';
import { List } from '../../models/List';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @Input() board:Board;

  @Output() addListEventEmitter: EventEmitter<any> = new EventEmitter();
 
  title:string; 

  constructor(private listService:ListService) { }

  ngOnInit() {
  }

  onSubmit():void {
    this.listService
      .addNewList(this.board.id,this.title)
      .subscribe(newList => this.addListEventEmitter.emit(newList));
  }

  onCancel():void{
    this.title = undefined;
    this.addListEventEmitter.emit(null);
  }

}
