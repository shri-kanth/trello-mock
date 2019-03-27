import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CardService } from  'src/app/services/card.service';
import { List } from 'src/app/models/List';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  @Input() list:List;

  @Output() addCardEventEmitter: EventEmitter<any> = new EventEmitter();
 
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
    this.addCardEventEmitter.emit(newCard);
  }

  onCancel(){
    this.title = undefined;
    this.description = undefined;
    this.addCardEventEmitter.emit(null);
  }

}
