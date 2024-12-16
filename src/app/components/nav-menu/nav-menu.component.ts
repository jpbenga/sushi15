import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuSection {
  title: string;
  categories: string[];
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  isMenuOpen = false;

  menuSections: MenuSection[] = [
    {
      title: 'Sushis & Sashimis',
      categories: [
        'Nigiri',
        'Sashimi',
        'Tataki',
        'California',
        'Fresh Rolls',
        'Spring Rolls',
        'Hosomaki',
        'Tobiko',
        'Crunchy'
      ]
    },
    {
      title: 'Entrées',
      categories: [
        'Soupes',
        'Salades',
        'Nems',
        'Gyouza',
        'Tempura',
        'Yakitoris'
      ]
    },
    {
      title: 'Plats & Bowls',
      categories: [
        'Chirashi',
        'Poke Bowl',
        'Nouilles Udon & Soba',
        'New Rolls'
      ]
    },
    {
      title: 'Spécialités',
      categories: [
        'French Touch',
        'Saumaconda',
        'Thonaconda',
        'Tiger',
        'Rainbow',
        'Snake',
        'Cesar',
        'Dragon Fire',
        'Crazy Tuna',
        'Chèvre Chili',
        'Crazy 2'
      ]
    }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
