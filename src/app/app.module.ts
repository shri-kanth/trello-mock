import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { CreateNewBoardItemComponent } from './components/create-new-board-item/create-new-board-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    LandingPageComponent,
    BoardItemComponent,
    CreateNewBoardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
