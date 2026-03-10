import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  protected readonly testimonials: Testimonial[] = [
    {
      name: 'Rajesh Mehta',
      role: 'Managing Director',
      company: 'Mehta Traders',
      text: 'Acchub Capital has completely transformed how we manage our finances. Their team is responsive, accurate, and deeply knowledgeable. Filing taxes has never been this stress-free!',
      initials: 'RM',
      color: '#0f2d52',
    },
    {
      name: 'Priya Sharma',
      role: 'CEO',
      company: 'InnoTech Solutions',
      text: 'The GST compliance support from Acchub is exceptional. They proactively flag issues before they become problems. Highly recommend their services to any growing business.',
      initials: 'PS',
      color: '#e8a020',
    },
    {
      name: 'Amit Joshi',
      role: 'Founder',
      company: 'Joshi Enterprises',
      text: 'Getting a business loan always seemed daunting until Acchub handled our project finance. The CMA data and bank liaison was seamless. We secured funding within weeks!',
      initials: 'AJ',
      color: '#1a4a7a',
    },
    {
      name: 'Sunita Kulkarni',
      role: 'Director',
      company: 'SKC Manufacturing',
      text: 'Their MIS reporting has given us clear visibility into our profitability and cost centers. Decisions that used to take days now take hours. Outstanding professional service.',
      initials: 'SK',
      color: '#0d3a6e',
    },
  ];
}
