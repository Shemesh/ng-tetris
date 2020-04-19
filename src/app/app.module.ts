import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameTetrisComponent } from './game-tetris/game-tetris.component';
import { HomeThingComponent } from './home-thing/home-thing.component';

@NgModule({
  declarations: [AppComponent, GameTetrisComponent, HomeThingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
