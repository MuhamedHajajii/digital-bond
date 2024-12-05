import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DRIVE_BASE_IMAGE_URL } from './../../../core/constants/drive-base';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
