import { Component } from '@angular/core';
import { DRIVE_BASE_IMAGE_URL } from '../../constants/drive-base';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
