import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: any = {};
  private currentLang: string;

  constructor(private http: HttpClient) {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.loadTranslations(this.currentLang);
  }

  loadTranslations(lang: string) {
    this.http.get(`assets/i18n/${lang}.json`).subscribe((data) => {
      this.translations = data;
      this.currentLang = lang;
      localStorage.setItem('language', lang); 
    });
  }

  translate(key: string): string {
    return this.translations[key] || key; 
  }

  switchLanguage(lang: string) {
    if (this.currentLang !== lang) {
      this.loadTranslations(lang);
    }
  }

  getCurrentLang() {
    return this.currentLang;
  }
}
