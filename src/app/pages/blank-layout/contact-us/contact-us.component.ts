import { DRIVE_BASE_IMAGE_URL } from './../../../core/constants/drive-base';
import { Component, Renderer2 } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CountryISO,
  NgxIntlTelInputModule,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import Swal from 'sweetalert2';
import { MessagesFormService } from '../../../core/services/messages/messages-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, NgxIntlTelInputModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  DRIVE_BASE_IMAGE_URL = DRIVE_BASE_IMAGE_URL;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  startValidation: boolean = false;

  /**
   * Constructs the ContactUsComponent.
   *
   * @param _MessagesFormService Service class used to send the contact form
   *                             to the server using the Google Apps Script.
   */
  constructor(private _MessagesFormService: MessagesFormService) {}

  PhoneNumberFormat = PhoneNumberFormat;
  clintMessageForm: FormGroup = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    clientEmail: new FormControl('', [Validators.required, Validators.email]),
    clientPhone: new FormControl('', [Validators.required]),
    clientSubject: new FormControl('', [Validators.required]),
    clientMessage: new FormControl('', [Validators.required]),
  });

  /**
   * Validates the contact form.
   * If the form is valid, it returns true and resets the validation flag.
   * If the form is invalid, it returns false and sets the validation flag to true.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  onSubmitStartValidation(): boolean {
    if (this.clintMessageForm.valid) {
      this.startValidation = false;
      return true;
    }
    this.startValidation = true;
    return false;
  }

  /**
   * Handles the submission of the contact form.
   * Logs the form data to the console and displays a success message.
   */
  onMessageSubmit() {
    if (this.onSubmitStartValidation())
      this._MessagesFormService
        .sendMessage(this.clintMessageForm.value)
        .subscribe({
          next: (response) => {
            this.clintMessageForm.reset();
            this.showSuccessMessage();
          },
        });
  }

  /**
   * Shows a success message to the user after they have successfully sent
   * a message using the contact form.
   */
  showSuccessMessage() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      imageUrl:
        'https://lh3.googleusercontent.com/d/1q4N8KNQMMJv0sAoy4GINjI-a-GAoWmWV',
      padding: '50px',
      imageWidth: 250,
      text: 'Your message has been sent successfully!',
    });
  }
}
