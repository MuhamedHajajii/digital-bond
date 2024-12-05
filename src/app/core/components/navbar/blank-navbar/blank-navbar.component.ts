import { Component } from '@angular/core';
import { DRIVE_BASE_IMAGE_URL } from '../../../constants/drive-base';

@Component({
  selector: 'app-blank-navbar',
  standalone: true,
  imports: [],
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.scss',
})
export class BlankNavbarComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
