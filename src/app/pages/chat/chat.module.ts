import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { ChatFooterComponent } from '../../components/chat-footer/chat-footer.component';
import { ChatBubbleComponent } from '../../components/chat-bubble/chat-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    ChatFooterComponent,
    ChatBubbleComponent
  ],
  declarations: [ChatPage],
  exports: [ChatPage]
})
export class ChatPageModule {}
