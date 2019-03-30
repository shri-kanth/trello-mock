import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
	{path: '', component: LandingScreenComponent},
	{path: 'board/:id', component: BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
