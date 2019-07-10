import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadGameComponent } from './load-game/load-game.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundModule } from './not-found/not-found.module';
import { GamePlayModule } from './game-play/game-play.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { NewGameModule } from './new-game/new-game.module';
import { LoadGameModule } from './load-game/load-game.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'load-game',
    component: LoadGameComponent
  },
  {
    path: 'new-game',
    component: NewGameComponent
  },
  {
    path: 'game:id',
    component: GamePlayComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
