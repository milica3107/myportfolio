import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarContentComponent } from '../main-content/navbar-content/navbar-content.component';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {
  projects = [{
    title: 'Join',
    image: 'assets/images/join.png',
    technologies: ['HTML', 'CSS', 'Firebase', 'JavaScript'],
    descriptionKey: 'join_description',
    github: 'https://github.com/milica3107/Join-main',
    liveTest: 'https://milica-pesic.de/Join/index.html',
    color: '#F9AF42',
  },
  {
    title: 'El Pollo Loco',
    image: 'assets/images/elpolloloco.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    descriptionKey: 'elpolloloco_description',
    github: 'https://github.com/milica3107/El_Pollo_Loco',
    liveTest: 'https://milica-pesic.de/El_Pollo_Loco/index.html',
    color: '#213830',
  },

  {
    title: 'New Project ',
    image: 'assets/images/coming-soon.jpg',
    technologies: ['HTML', 'SCSS', 'Angular', 'TypeScript'],
    descriptionKey: 'new_project_description',
    github: '',
    liveTest: '',
    color: '#F9AF42',
  },
];

currentIndex = 0;
animate = false;

nextProject() {
  this.triggerAnimation(() => {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  });
}

previousProject() {
  this.triggerAnimation(() => {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  });
}

triggerAnimation(changeProject: () => void) {
  this.animate = true;
  setTimeout(() => {
    changeProject();
    this.animate = false;
  }, 500); 
}

constructor(public translationService: TranslationService) {}
getDescription(project: any): string {
  return this.translationService.translate(project.descriptionKey);
}
}