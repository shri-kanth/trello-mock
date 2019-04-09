import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/board/list/list.component';
import { CardComponent } from './components/board/list/card/card.component';
import { BoardsPageComponent } from './components/landing-screen/boards-page/boards-page.component';
import { AddBoardComponent } from './components/common/add-board/add-board.component';
import { AddListComponent } from './components/board/add-list/add-list.component';
import { AddCardComponent } from './components/board/list/add-card/add-card.component';
import { FontAwesomeIconLoader } from './utils/font-awesome-icon-loader';
import { SidebarComponent } from './components/landing-screen/sidebar/sidebar.component';
import { RecentlyViewedBoardsComponent } from './components/landing-screen/boards-page/recently-viewed-boards/recently-viewed-boards.component';
import { PersonalBoardsComponent } from './components/landing-screen/boards-page/personal-boards/personal-boards.component';
import { CreatePopUpComponent } from './components/common/create-pop-up/create-pop-up.component';
import { BoardsPopUpComponent } from './components/common/boards-pop-up/boards-pop-up.component';
import { InfoPopUpComponent } from './components/common/info-pop-up/info-pop-up.component';
import { ProfilePopUpComponent } from './components/common/profile-pop-up/profile-pop-up.component';
import { NotificationPopUpComponent } from './components/common/notification-pop-up/notification-pop-up.component';
import { BoardMenuComponent } from './components/board/board-menu/board-menu.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { CardDetailsComponent } from './components/board/list/card-details/card-details.component';
import { CardDetailsSidebarComponent } from './components/board/list/card-details/card-details-sidebar/card-details-sidebar.component';
import { CardDetailsContentComponent } from './components/board/list/card-details/card-details-content/card-details-content.component';
import { CardDetailsLabelsPopupComponent } from './components/board/list/card-details/card-details-labels-popup/card-details-labels-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    BoardsPageComponent,
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
    NotificationPopUpComponent,
    BoardMenuComponent,
    LandingScreenComponent,
    CardDetailsComponent,
    CardDetailsSidebarComponent,
    CardDetailsContentComponent,
    CardDetailsLabelsPopupComponent
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
