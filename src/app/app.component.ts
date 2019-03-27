import { Component } from '@angular/core';

import { BoardService } from './services/board.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
