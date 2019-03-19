import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { BoardService } from '../../services/board.service'; 
import { ListService } from '../../services/list.service'; 

import { Board } from '../../models/Board';
import { List } from '../../models/List';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board:Board;

  lists:List[];

  isAddListManagerActive:Boolean;

  constructor(
  	private route: ActivatedRoute,
  	private boardService: BoardService,
    private listService: ListService,
  	private location: Location
  ) {}

  ngOnInit() {	
  	const id = this.route.snapshot.paramMap.get('id');
    this.isAddListManagerActive = false;
    this.boardService.getBoardById(Number(id)).subscribe(board => this.board = board);
    this.listService.getListsByBoardId(this.board.id).subscribe(lists =>{
        this.lists = lists;
    });
  }

  onAddNewList() {
    this.isAddListManagerActive = true; 
  }

  listManagerEventEmitter(listEvent: any){
    console.log("Recieved List Message");
    if(listEvent && listEvent.boardId == this.board.id){
      this.listService.getListsByBoardId(this.board.id).subscribe(lists =>{
        this.lists = lists;
      });   
    }else if(listEvent === undefined){
      console.log("Recieved Cancel List Message");
      this.isAddListManagerActive = false; 
    }
  }

  dropList(event: CdkDragDrop<List[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }

  getListIdArray():Number[]{
    return this.lists.map(list => list.id);
  }

}
