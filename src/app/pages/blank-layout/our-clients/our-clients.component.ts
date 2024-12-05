import { Component } from '@angular/core';
import { OurProjectsComponent } from '../our-projects/our-projects.component';
import { CustomersReviewsComponent } from './customers-reviews/customers-reviews.component';
import { ClientsComponent } from './clients/clients.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CustomersReviewsComponent, ClientsComponent, OurPartnersComponent],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.scss',
})
export class OurClientsComponent {}
