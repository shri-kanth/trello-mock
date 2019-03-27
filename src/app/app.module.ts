import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { FontAwesomeIconLoader } from './utils/font-awesome-icon-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RecentlyViewedBoardsComponent } from './components/recently-viewed-boards/recently-viewed-boards.component';
import { PersonalBoardsComponent } from './components/personal-boards/personal-boards.component';
import { CreatePopUpComponent } from './components/create-pop-up/create-pop-up.component';
import { BoardsPopUpComponent } from './components/boards-pop-up/boards-pop-up.component';
import { InfoPopUpComponent } from './components/info-pop-up/info-pop-up.component';
import { ProfilePopUpComponent } from './components/profile-pop-up/profile-pop-up.component';
import { NotificationPopUpComponent } from './components/notification-pop-up/notification-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    LandingPageComponent,
    AddBoardComponent,
    AddListComponent,
    AddCardComponent,
    SidebarComponent,
    RecentlyViewedBoardsComponent,
    PersonalBoardsComponent,
    CreatePopUpComponent,
    BoardsPopUpComponent,
    InfoPopUpComponent,
    ProfilePopUpComponent,
    NotificationPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    OverlayModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    new FontAwesomeIconLoader().iconsArray.forEach(icon => library.add(icon));
  }
}
