import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

type Role = 'user' | 'bot';

interface Replies {
  default: string[];
  lead: string[];
  revenue: string[];
  customer: string[];
}

@Component({
  selector: 'app-ai-chat-bot',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ai-chat-bot.html',
  styleUrl: './ai-chat-bot.scss',
})
export class AiChatBotComponent implements AfterViewInit {
  @ViewChild('chatBody') chatBody!: ElementRef<HTMLDivElement>;
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLInputElement>;

  isOpen = false;
  showQuickReplies = true;

  messages: { text: string; role: Role; typing?: boolean }[] = [
    {
      text: `Hi! I'm your CRM assistant. I can help you with customers, leads,
      revenue, and more. What would you like to know?`,
      role: 'bot',
    },
  ];

  replies: Replies = {
    default: [
      'I can help with that! Could you be more specific?',
      'Let me look into that for you.',
      "Great question — here's a quick summary based on your CRM data.",
    ],
    lead: [
      'You have 389 active leads this month. New leads are up 65%, and 21 have closed as won.',
      "Your top lead this month is Acme Corp — they're in the Proposal stage with $42K potential.",
    ],
    revenue: [
      'Monthly revenue is $94.2K, up 8.3% from last month.',
      'Revenue has been climbing since March. June was your strongest month.',
    ],
    customer: [
      'Your newest customers: TechFlow Inc, Bravo Media, Sunrise Health.',
      "You've added 12 new customers this month.",
    ],
  };

  ngAfterViewInit() {
    this.scrollBottom();
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.chatInput.nativeElement.focus(), 0);
    }
  }

  closePanel() {
    this.isOpen = false;
  }

  sendMessage(text: string) {
    text = text.trim();
    if (!text) return;

    this.showQuickReplies = false;

    this.messages.push({ text, role: 'user' });
    this.scrollBottom();

    // typing indicator
    const typingMsg = { text: '', role: 'bot' as Role, typing: true };
    this.messages.push(typingMsg);

    setTimeout(
      () => {
        this.messages = this.messages.filter((m) => m !== typingMsg);
        this.messages.push({
          text: this.getReply(text),
          role: 'bot',
        });
        this.scrollBottom();
      },
      900 + Math.random() * 400,
    );
  }

  quickReply(msg: string) {
    this.sendMessage(msg);
  }

  getReply(msg: string): string {
    const m = msg.toLowerCase();

    if (m.includes('lead')) {
      return this.random(this.replies.lead);
    }
    if (m.includes('revenue') || m.includes('trend')) {
      return this.random(this.replies.revenue);
    }
    if (m.includes('customer')) {
      return this.random(this.replies.customer);
    }
    return this.random(this.replies.default);
  }

  random(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  scrollBottom() {
    setTimeout(() => {
      const el = this.chatBody?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
}
