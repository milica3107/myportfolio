import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarContentComponent } from '../main-content/navbar-content/navbar-content.component';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../translation.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ImpressumComponent } from '../impressum/impressum.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent, FormsModule, RouterModule, RouterOutlet,
    ImpressumComponent, PrivacyPolicyComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;
  showNameError: boolean = false;
  showEmailError: boolean = false;
  showMessageError: boolean = false;
  isNameFocused: boolean = false;
  isEmailFocused: boolean = false;

  @ViewChild('privacy') privacyCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLInputElement>;

  isChecked = false;
  showPrivacyMessage = false;
  showMessage = false;


  toggleButton() {
    this.isChecked = !this.isChecked;
    this.isChecked = this.privacyCheckbox.nativeElement.checked;
    this.showPrivacyMessage = !this.isChecked;
  }

  onSubmit(contactForm: any) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.email)) {
      this.showEmailError = true; 
      return; 
    }

    if (!contactForm.valid) {
      this.showNameError = !this.name;
      this.showEmailError = !this.email;
      this.showMessageError = !this.message;
    } else {
      this.showNameError = false;
      this.showEmailError = false;
      this.showMessageError = false;

      this.showMessage = true;
      this.addMessageToFirestore();

      contactForm.resetForm();
      this.name = '';
      this.email = '';
      this.message = '';

      setTimeout(() => {
        this.showMessage = false;
      }, 5000);
    }
  }

  async addMessageToFirestore() {
    try {
      await addDoc(collection(this.firestore, 'messages'), {
        name: this.name,
        email: this.email,
        message: this.message,
      });
    } catch (e) {
    }
  }

  onLabelClick(field: string) {
    if (field === 'name' && !this.name) {
      this.showNameError = true;
    }
    if (field === 'email' && !this.email) {
      this.showEmailError = true;
    }
    if (field === 'message' && !this.message) {
      this.showMessageError = true;
    }
  }

  focusInput(field: string) {
    if (field === 'name') {
      document.getElementById('name')?.focus();
    } else if (field === 'email') {
      document.getElementById('email')?.focus();
    } else if (field === 'message') {
      document.getElementById('message')?.focus();
    }
  }

  onInputFocus(field: string) {
    if (field === 'name') {
      this.showNameError = false;
      this.isNameFocused = true;
    }
    if (field === 'email') {
      this.showEmailError = false;
      this.isEmailFocused = true;
    }

    if (field === 'message') {
      this.showMessageError = false;
    }
  }

  onInputBlur(field: string) {
    if (field === 'name' && !this.name) {
      this.showNameError = true;
    }
    if (field === 'email' && !this.email) {
      this.showEmailError = true;
    }
    if (field === 'message' && !this.message) {
      this.showMessageError = true;
    }
  }

  constructor(private firestore: Firestore, public translationService: TranslationService) { }

}