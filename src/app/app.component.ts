import { DRIVE_BASE_IMAGE_URL } from './core/constants/drive-base';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, RouterOutlet, FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'digital-bond';
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
}
