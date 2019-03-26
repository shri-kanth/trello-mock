import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { BoardService } from '../../services/board.service'; 
import { ListService } from '../../services/list.service'; 

import { Board } from '../../models/Board';
import { List } from '../../models/List';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board:Board;

  lists:List[];

  isListManagerActive:Boolean;

  constructor(
  	private route: ActivatedRoute,
  	private boardService: BoardService,
    private listService: ListService,
  	private location: Location
  ) {}

  ngOnInit() {	
  	const id = this.route.snapshot.paramMap.get('id');
    this.isListManagerActive = false;
    this.boardService.getBoardById(Number(id)).subscribe(board => this.board = board);
    this.listService.getListsByBoardId(this.board.id).subscribe(lists =>{
        this.lists = lists;
    });
  }

  onAddNewList() {
    this.isListManagerActive = true; 
  }

  listManagerEventEmitter(listEvent: any){
    console.log("Recieved List Message");
    if(listEvent){
      if(listEvent.boardId && listEvent.boardId == this.board.id){
        this.listService.getListsByBoardId(this.board.id).subscribe(lists =>{
          this.lists = lists;
        });
        this.isListManagerActive = false; 
      }   
    }else{
      console.log("Recieved Cancel List Message");
      this.isListManagerActive = false; 
    }
  }

  dropList(event: CdkDragDrop<List[]>) {
    let list = <List> event.previousContainer.data[event.previousIndex];
    let previousIndex = event.previousIndex;
    let presentIndex = event.currentIndex;
    this.listService.updateListPosition(list,previousIndex,presentIndex).subscribe(() => {
      moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    })
  }

  getListIdArray():Number[]{
    return this.lists.map(list => list.id);
  }

}
