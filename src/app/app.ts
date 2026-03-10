import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { AboutComponent } from './components/about/about.component';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, AboutComponent, Testimonials, Contact, Footer, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
