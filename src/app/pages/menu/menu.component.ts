import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { CategoryDetailsComponent } from '../../components/category-details/category-details.component';
import { MenuItem, MenuCategory } from '../../models/menu-item.model';
import { menuData } from '../../data/sushi-menu-data';

interface MenuSection {
  title: string;
  categories: string[];
}

type MenuDataType = {
  [key: string]: MenuCategory;
};

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, CategoryDetailsComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedCategory: string | null = null;
  menuCategories = Object.entries(menuData as MenuDataType);

  menuSections: MenuSection[] = [
    {
      title: 'Sushis & Sashimis',
      categories: [
        'nigiri', 'sashimi', 'tataki', 'california',
        'freshrolls', 'springrolls', 'hosomaki', 'tobiko', 'crunchy'
      ]
    },
    {
      title: 'Entrées',
      categories: ['soupes', 'salades', 'nems', 'gyouza', 'tempura', 'yakitoris']
    },
    {
      title: 'Plats & Bowls',
      categories: ['chirashi', 'pokebowl', 'nouilles', 'newrolls']
    },
    {
      title: 'Spécialités',
      categories: [
        'frenchtouch', 'saumaconda', 'thonaconda', 'tiger',
        'rainbow', 'snake', 'cesar', 'dragonfire', 'crazytuna',
        'chevrechili', 'crazy2'
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'].toLowerCase();
      }
    });
  }

  getSectionCategories(sectionTitle: string): any[] {
    const section = this.menuSections.find(s => s.title === sectionTitle);
    if (!section) return [];
    
    return section.categories.map(categoryId => ({
      id: categoryId,
      ...menuData[categoryId as keyof typeof menuData]
    })).filter(category => category);
  }

  getImageUrl(categoryId: string): string {
    return `https://dummyimage.com/300x200/000/fff&text=${categoryId}`;
  }

  showCategory(categoryId: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: categoryId },
      queryParamsHandling: 'merge'
    });
    this.selectedCategory = categoryId;
  }

  closeDetails() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null },
      queryParamsHandling: 'merge'
    });
    this.selectedCategory = null;
  }

  getSelectedCategoryData(): MenuCategory | null {
    return this.selectedCategory ? (menuData as MenuDataType)[this.selectedCategory as keyof typeof menuData] : null;
  }

  getDescription(category: MenuCategory): string {
    return category.description || category.subtitle || '';
  }
}
