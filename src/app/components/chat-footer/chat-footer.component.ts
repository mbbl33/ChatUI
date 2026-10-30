import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular/lazy';
import { CommonModule } from '@angular/common';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss'],
  host: {
    '[class.disabled]': 'disabled'
  },
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ChatFooterComponent  implements OnInit {
  String = String;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Type a message...';
  @Input() noteOptions: {
    message: string;
    color: string;
  } = { message: 'test note', color: '' };
  @Input() recomendedMessages: string[] = [
    'Hello!',
    'How are you?',
    'Goodbye!',
    'Extra long Test Message : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ];
  @Output() sendMessage = new EventEmitter<string>();

  @ViewChild('inputElement', { static: false }) inputElement: IonInput | undefined;

  constructor() { }

  ngOnInit() {}

  onSendMessage(message: string) {
    if (!this.disabled && message.trim() !== '') {
      this.sendMessage.emit(message);
      if (this.inputElement) {
        this.inputElement.value = '';
      }
    }
  }

  onRecommendedMessageClick(message: string) {
    this.onSendMessage(message);
  }

  onInputEnter(event: KeyboardEvent, messageInputValue: string) {
    if (event.key === 'Enter' && !this.disabled) {
      this.onSendMessage(messageInputValue);
    }
  }

}
