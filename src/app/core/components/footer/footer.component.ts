import { Component } from '@angular/core';
import { DRIVE_BASE_IMAGE_URL } from '../../constants/drive-base';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
