import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContactFormComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements OnInit {
  
  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }
  constructor(public translationService: TranslationService, public router: Router) {}

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}