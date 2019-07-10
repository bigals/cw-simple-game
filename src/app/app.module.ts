import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

//Top-Level Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Route Modules
import { AboutComponent } from './about/about.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { HomeComponent } from './home/home.component';
import { NewGameComponent } from './new-game/new-game.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadGameComponent } from './load-game/load-game.component';

//Services
import { RollService } from './services/roll.service';

@NgModule({
  declarations: [
    AppComponent,
    GamePlayComponent,
    AboutComponent,
    HomeComponent,
    NewGameComponent,
    LoadGameComponent,
    NotFoundComponent
  ],
  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,

    //Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    RollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
