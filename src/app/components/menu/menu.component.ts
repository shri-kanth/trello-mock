import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../models/Board';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() board : Board;

  constructor() { }

  ngOnInit() {
  }

}
