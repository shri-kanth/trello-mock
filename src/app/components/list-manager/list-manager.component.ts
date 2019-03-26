import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ListService } from  '../../services/list.service';
import { List } from '../../models/List';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  @Input() board:Board;

  @Output() listManagerEventEmitter: EventEmitter<any> = new EventEmitter();
 
  title:string; 

  constructor(private listService:ListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.listService
      .addNewList(this.board.id,this.title)
      .subscribe(newList => this.listManagerEventEmitter.emit(newList));
    console.log("List Create Event Emitted");
  }

  onCancel(){
    this.title = undefined;
    this.listManagerEventEmitter.emit(null);
    console.log("Cancel List Create Event Emitted");
  }

}
