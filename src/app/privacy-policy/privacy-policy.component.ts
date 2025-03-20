import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

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
