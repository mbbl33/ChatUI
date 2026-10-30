import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { ChatBubbleComponent } from './chat-bubble.component';

describe('ChatBubbleComponent', () => {
  let component: ChatBubbleComponent;
  let fixture: ComponentFixture<ChatBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatBubbleComponent],
      imports: [IonicModule.forRoot()],
    });

    fixture = TestBed.createComponent(ChatBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
