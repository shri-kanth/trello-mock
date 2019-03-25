import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CardService } from  '../../services/card.service';
import { List } from '../../models/List';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css']
})
export class CardManagerComponent implements OnInit {

  @Input() list:List;

  @Output() cardManagerSubmitEventEmitter: EventEmitter<any> = new EventEmitter();

  @Output() cardManagerCancelEventEmitter: EventEmitter<any> = new EventEmitter();
 
  title:string;

  description:string;

  constructor(private cardService:CardService) { }

  ngOnInit() {
  }

  onSubmit() {
    let newCard;
    this.cardService
      .addNewCard(this.list.id,this.title,this.description)
      .subscribe(card => newCard = card);
    this.cardManagerSubmitEventEmitter.emit(newCard);
  }

  onCancel(){
    this.title = undefined;
    this.description = undefined;
    this.cardManagerCancelEventEmitter.emit(null);
  }

}
