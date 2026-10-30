import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../model/ChatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage implements OnInit {

  protected sessionTitle: string = 'Dummy Title';
  protected messages: ChatMessage[] = [
    ChatMessage.createDefaultUserMessage('Hello!'),
    ChatMessage.createDefaultBotMessage('Hi there!'),
    ChatMessage.createDefaultSystemMessage('System message here.')
  ];

  constructor() { }

  ngOnInit() {
  }

  sendUserMessage(message: string) {
    this.messages.push(ChatMessage.createDefaultUserMessage(message, { timestamp: new Date() }));
    this.sendBotMessage('This is an automated response.');
  }

  sendBotMessage(message: string) {
    this.messages.push(ChatMessage.createDefaultBotMessage(message, { metadata: { timestamp: new Date() } }));
  }

}
