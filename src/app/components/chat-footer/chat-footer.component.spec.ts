import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { ChatFooterComponent } from './chat-footer.component';

describe('ChatFooterComponent', () => {
  let component: ChatFooterComponent;
  let fixture: ComponentFixture<ChatFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatFooterComponent],
      imports: [IonicModule.forRoot()],
    });

    fixture = TestBed.createComponent(ChatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
