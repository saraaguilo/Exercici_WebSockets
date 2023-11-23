import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';
import { AppComponent } from '../app.component';
import { ChatComponent } from '../component/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
