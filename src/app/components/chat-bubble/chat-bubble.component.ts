import { Component, OnInit, Input, signal } from '@angular/core';
import { ChatMessage, MessageSender } from '../../model/ChatMessage';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular/lazy';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ChatBubbleComponent implements OnInit {
  @Input({ required: true }) chatMessage!: ChatMessage;
  @Input() showTimestamp: boolean = false;

  protected cardColor = ''
  constructor() { }

  ngOnInit() {
    this.initColor('');
  }

  private initColor(color: string) {
    if (this.chatMessage.hasSpecialColor()) {
      this.cardColor = this.chatMessage.specialColor!;
      return;
    }

    switch (this.chatMessage.sender) {
      case 'USER':
        this.cardColor = 'primary';
        break;
      case 'BOT':
        this.cardColor = 'light';
        break;
      case 'SYSTEM':
        this.cardColor = 'medium';
        break;
    }
  }

}
