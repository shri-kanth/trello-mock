import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BoardManagerComponent } from './components/board-manager/board-manager.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { CardManagerComponent } from './components/card-manager/card-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    LandingPageComponent,
    BoardManagerComponent,
    ListManagerComponent,
    CardManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    OverlayModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
