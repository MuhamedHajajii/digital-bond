import { Component } from '@angular/core';
import { BlankNavbarComponent } from '../../core/components/navbar/blank-navbar/blank-navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CustomersReviewsComponent } from './our-clients/customers-reviews/customers-reviews.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { CareersComponent } from './careers/careers.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [
    BlankNavbarComponent,
    HeroSectionComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurServicesComponent,
    OurProjectsComponent,
    TestimonialsComponent,
    OurClientsComponent,
    CareersComponent,
  ],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {}
