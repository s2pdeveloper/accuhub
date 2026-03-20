import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Testimonial {
  name: string;
  // role: string;
  company: string;
  text: string;
  initials: string;
  color: string;
  logo?: string;
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
      name: 'Anil Sangewar',
      company: 'Civil Design Studio',
      text: 'We have significantly improved customer engagement and lead management for our builder and developer projects. The platform has streamlined our communication, making it easier to connect with clients and convert inquiries into successful deals.',
      initials: 'AS',
      color: '#0f2d52',
      logo: 'assets/images/testimonials/civil-design-studio.jpeg',
    },
    {
      name: 'Sunita Wazalwar',
      company: 'Ramkrishna Authentic Veg',
      text: 'Our restaurant has seen a noticeable boost in customer engagement and repeat orders. The system helps us manage customer interactions efficiently and enhances the overall dining experience for our customers.',
      initials: 'SW',
      color: '#e8a020',
      logo: 'assets/images/testimonials/ramkrishna-av.jpeg',
    },
    {
      name: 'Shruti Wazalwar',
      company: `Mannu's Missal Co.`,
      text: 'This solution has helped us attract more customers and improve our service experience. Managing orders and engaging with customers has become much easier, leading to better customer satisfaction and business growth.',
      initials: 'SW',
      color: '#1a4a7a',
      logo: 'assets/images/testimonials/mmc.jpeg',
    },
    {
      name: 'Amit Patel',
      company: 'Smart Flyer Holiday Pvt Ltd',
      text: 'The platform has made ticket booking and tour package management seamless. It has improved our customer interaction, increased booking efficiency, and helped us deliver a smoother travel experience to our clients.',
      initials: 'AP',
      color: '#0d3a6e',
      logo: 'assets/images/testimonials/smart-flyer.png',
    },
  ];
}
