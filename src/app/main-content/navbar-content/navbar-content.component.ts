import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-navbar-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent {
  isMenuOpen = false;
  showImageIndex: number | null = null;
  currentLanguage: string = 'en';

  @Input() navbarClass: string = 'header';

  menuIcon: string = 'assets/images/menu.png';
  githubIcon: string = 'assets/images/github.png';
  linkedinIcon: string = 'assets/images/linkedin.png';
  mailIcon: string = 'assets/images/mail.png';
  ENIcon: string = 'assets/images/EN.png';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onMouseOver(index: number): void {
    this.showImageIndex = index;
  }

  onMouseOut(): void {
    this.showImageIndex = null;
  }

  constructor(public translationService: TranslationService) {
    this.currentLanguage = this.translationService.getCurrentLang();
  }

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translationService.switchLanguage(this.currentLanguage);
  }
  
  smoothScrollTo(targetId: string): void {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}