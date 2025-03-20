import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarContentComponent } from '../main-content/navbar-content/navbar-content.component';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-second-content',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent],
  templateUrl: './second-content.component.html',
  styleUrl: './second-content.component.scss'
})
export class SecondContentComponent {
  showPopup = false;
  isPopupOpen = false;

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    this.isPopupOpen = !this.isPopupOpen;  
  }

  closeMenu(): void {
    this.isPopupOpen = false;
  }

  constructor(public translationService: TranslationService) {}
}
