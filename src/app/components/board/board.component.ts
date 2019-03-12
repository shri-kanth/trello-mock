import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(
  	private route: ActivatedRoute,
  	private boardService: BoardService,
    private listService: ListService,
  	private location: Location
  ) {}

  ngOnInit() {	
  	this.setActiveBoard();
    this.setLists(this.board);
  }

  setActiveBoard():void {
  	const id = this.route.snapshot.paramMap.get('id');
  	console.log("Active Board ID : "+id);
  	this.boardService.getBoardById(Number(id)).subscribe(board => this.board = board);
  }

  setLists(board:Board):void{
    this.listService.getListsByBoardId(board.id).subscribe(lists =>{
        this.lists = lists;
    });
  }

}
