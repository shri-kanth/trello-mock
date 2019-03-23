import { Component, OnInit } from '@angular/core';

import { BoardService } from '../../services/board.service'; 

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  isBoardsPopUpActive:Boolean;
  isCreatePopUpActive:Boolean;
  isInfoPopUpActive:Boolean;
  isNotificationPopUpActive:Boolean;
  isProfilePopUpActive:Boolean;

  constructor(
  	private boardService: BoardService
  ) {}

  ngOnInit() {
    this.isBoardsPopUpActive = false;
    this.isCreatePopUpActive = false;
    this.isInfoPopUpActive = false;
    this.isNotificationPopUpActive = false;
    this.isProfilePopUpActive = false;
  }

  isManagerActive():Boolean{
    return this.boardService.isManagerActive;
  }

}
