import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarContentComponent } from '../main-content/navbar-content/navbar-content.component';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-references-content',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent],
  templateUrl: './references-content.component.html',
  styleUrl: './references-content.component.scss'
})
export class ReferencesContentComponent {
  references = [
    {
      name: 'Tanja Schulz',
      text: 'text_reference1',
      role: 'Frontend Developer',
      profileLink: 'Zum Linkedin profile >>',
      showImage: false
    },
    {
      name: 'Hans Janisch',
      text: 'text_reference2',
      role: 'Team Partner',
      profileLink: 'Zum Linkedin profile >>',
      showImage: false

    },
    {
      name: 'Anton Fischer',
      text: 'text_reference3',
      role: 'Team Partner',
      profileLink: 'Zum Linkedin profile >>',
      showImage: false
    }
  ];
  
  onMouseOver(index: number) {
    this.references[index].showImage = true; 
  }

  onMouseOut(index: number) {
    this.references[index].showImage = false; 
  }

  constructor(public translationService: TranslationService) {}

  getDescription(project: any): string {
    return this.translationService.translate(project.text);
}
}