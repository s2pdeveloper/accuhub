import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type ChatStep = 'welcome' | 'service' | 'name' | 'phone' | 'done';

export interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

const SERVICES = [
  'Accounting & Bookkeeping',
  'GST Filing & Compliance',
  'Income Tax Returns',
  'Company Registration',
  'Financial Advisory',
  'Payroll Processing',
  'Other',
];

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chatbot {
  protected isOpen = signal(false);
  protected step = signal<ChatStep>('welcome');
  protected messages = signal<ChatMessage[]>([
    {
      from: 'bot',
      text: "Hi there! 👋 I'm Acchub's virtual assistant. How can I help you today?",
    },
    {
      from: 'bot',
      text: "Please select the service you're interested in:",
    },
  ]);
  protected inputValue = signal('');
  protected selectedService = signal('');
  protected userName = signal('');
  protected hasUnread = signal(true);

  readonly services = SERVICES;

  protected showServiceButtons = computed(
    () => this.step() === 'service' || this.step() === 'welcome',
  );
  protected showInput = computed(() => this.step() === 'name' || this.step() === 'phone');

  toggle(): void {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.hasUnread.set(false);
    }
  }

  selectService(service: string): void {
    this.selectedService.set(service);
    this.pushMessage('user', service);
    this.step.set('name');
    setTimeout(() => {
      this.pushMessage(
        'bot',
        `Great choice! We'd love to help you with ${service}. May I know your name?`,
      );
    }, 400);
  }

  sendMessage(): void {
    const text = this.inputValue().trim();
    if (!text) return;

    this.pushMessage('user', text);
    this.inputValue.set('');

    if (this.step() === 'name') {
      this.userName.set(text);
      this.step.set('phone');
      setTimeout(() => {
        this.pushMessage(
          'bot',
          `Nice to meet you, ${text}! 😊 Could you share your phone number or email so our team can reach you?`,
        );
      }, 400);
    } else if (this.step() === 'phone') {
      this.step.set('done');
      setTimeout(() => {
        this.pushMessage(
          'bot',
          `Thank you, ${this.userName()}! ✅ Your enquiry for "${this.selectedService()}" has been noted. Our team will contact you shortly at the details provided.`,
        );
        setTimeout(() => {
          this.pushMessage(
            'bot',
            'You can also reach us directly:\n📞 +91 90281 00765\n📧 Acchub@gmail.com\n📍 Shriram Tower, LIC Square, Nagpur',
          );
        }, 600);
      }, 400);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  restart(): void {
    this.step.set('welcome');
    this.selectedService.set('');
    this.userName.set('');
    this.inputValue.set('');
    this.messages.set([
      {
        from: 'bot',
        text: "Hi there! 👋 I'm Acchub's virtual assistant. How can I help you today?",
      },
      { from: 'bot', text: "Please select the service you're interested in:" },
    ]);
  }

  private pushMessage(from: 'bot' | 'user', text: string): void {
    this.messages.update((msgs) => [...msgs, { from, text }]);
  }
}
