import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';
import { AppComponent } from '../app.component';
import { ChatComponent } from '../component/chat/chat.component';

@NgModule({
  
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
