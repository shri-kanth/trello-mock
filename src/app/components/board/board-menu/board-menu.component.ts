import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/models/Board';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.css']
})
export class BoardMenuComponent implements OnInit {

  @Input() board:Board;

  constructor() { }

  ngOnInit() {
  }

}
