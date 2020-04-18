import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameTetrisComponent } from './game-tetris/game-tetris.component';

@NgModule({
  declarations: [AppComponent, GameTetrisComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
