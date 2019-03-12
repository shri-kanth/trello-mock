import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../models/Board';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {

  @Input() board : Board;

  constructor() { }

  ngOnInit() {
  }

}
