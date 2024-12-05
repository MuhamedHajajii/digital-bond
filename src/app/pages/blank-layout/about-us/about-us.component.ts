import { Component } from '@angular/core';
import { DRIVE_BASE_IMAGE_URL } from '../../../core/constants/drive-base';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
