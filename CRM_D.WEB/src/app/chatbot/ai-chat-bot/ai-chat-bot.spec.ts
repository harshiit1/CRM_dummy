import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatBot } from './ai-chat-bot';

describe('AiChatBot', () => {
  let component: AiChatBot;
  let fixture: ComponentFixture<AiChatBot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiChatBot],
    }).compileComponents();

    fixture = TestBed.createComponent(AiChatBot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
