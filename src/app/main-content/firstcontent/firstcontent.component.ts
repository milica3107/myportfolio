import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DotNavigationComponent } from '../../dot-navigation/dot-navigation.component';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-firstcontent',
  standalone: true,
  imports: [CommonModule, DotNavigationComponent],
  templateUrl: './firstcontent.component.html',
  styleUrl: './firstcontent.component.scss'
})
export class FirstcontentComponent {
  isMenuOpen = false;
  showImageIndex: number | null = null;
  currentLanguage: string = 'en';

  githubIcon: string = 'assets/images/github.png';
  linkedinIcon: string = 'assets/images/linkedin.png';
  mailIcon: string = 'assets/images/mail.png';
  ENIcon: string = 'assets/images/EN.png';
  menuIcon: string = 'assets/images/menu.png';

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
