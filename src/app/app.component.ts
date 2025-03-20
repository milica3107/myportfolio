import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { DotNavigationComponent } from './dot-navigation/dot-navigation.component';
import { NavbarContentComponent } from './main-content/navbar-content/navbar-content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import { CoreContentComponent } from './core-content/core-content.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { ReferencesContentComponent } from './references-content/references-content.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslationService } from './translation.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainContentComponent, DotNavigationComponent, NavbarContentComponent, 
    SecondContentComponent, CoreContentComponent, MyprojectsComponent, ReferencesContentComponent,
    ContactFormComponent, RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() navbarClass: string = 'header';
  title = 'myportfolio';
  currentRoute: string = '';

  constructor(public translationService: TranslationService, public router: Router) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url; 
    });
  }

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
