import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirstcontentComponent } from './firstcontent/firstcontent.component';
import { DotNavigationComponent } from '../dot-navigation/dot-navigation.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, FirstcontentComponent, DotNavigationComponent, NavbarContentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(public translationService: TranslationService) {}
}
