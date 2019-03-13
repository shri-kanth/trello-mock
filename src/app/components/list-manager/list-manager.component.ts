import { Component, OnInit, Input } from '@angular/core';

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
 
  title:string;

  constructor(private listService:ListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.listService.addNewList(this.board.id,this.title);
    this.listService.deActivateManager();
  }

}
