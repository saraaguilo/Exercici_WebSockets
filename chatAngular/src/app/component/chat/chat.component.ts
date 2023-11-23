import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] // Cambiado de styleUrl a styleUrls
})

export class ChatComponent implements OnInit{
//[x: string]: any;
  text = '';
  constructor(public chat:ChatService){}
    ngOnInit(): void{}
    sendMessage(){
      let messageInfo = {
        text: this.text,
        messageType: 1
      };
      this.chat.sendMessage(messageInfo);
      this.text = "";
    }
}
  


