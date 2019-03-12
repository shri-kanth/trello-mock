import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
	{path: '', component: LandingPageComponent},
	{path: 'board/:id', component: BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
