import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarContentComponent } from '../main-content/navbar-content/navbar-content.component';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-core-content',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent],
  templateUrl: './core-content.component.html',
  styleUrl: './core-content.component.scss'
})
export class CoreContentComponent {
  showSkills = false;
  isPopupOpen = false;

  toggleMenu(): void {
    this.isPopupOpen = !this.isPopupOpen;  
  }

  closeMenu(): void {
    this.isPopupOpen = false;
  }

  constructor(public translationService: TranslationService) {}
}
