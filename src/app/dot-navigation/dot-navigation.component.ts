import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dot-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dot-navigation.component.html',
  styleUrl: './dot-navigation.component.scss'
})
export class DotNavigationComponent {
  sections = [
    { id: 'home', link: '#home' },
    { id: 'about', link: '#about' },
    { id: 'core', link: '#core' },
    { id: 'projects', link: '#projects' },
    { id: 'othersay', link: '#othersay' },
    { id: 'contact', link: '#contact' }
  ];

  activeIndex = 0;
  isCoreCompetence = false;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    let index = this.sections.length;

    while (--index) {
      const element = document.getElementById(this.sections[index].id);

     
      if (element && window.scrollY + 100 >= element.offsetTop) {
        break;
      }
    }

    this.activeIndex = index;
    this.isCoreCompetence = this.sections[this.activeIndex].id === 'core';
  }
  setActiveSection(index: number): void {
    this.activeIndex = index;
    const targetSection = document.getElementById(this.sections[index].id);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}