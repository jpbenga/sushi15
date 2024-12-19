import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../core/services/menu.service';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../core/models/menu.interface';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MenuItemsComponent implements OnInit {
  items: MenuItem[] = [];
  categoryTitle: string = '';
  subcategoryTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        // Trouver la catégorie principale
        const categories = ['sushisSashimis', 'makisRolls', 'bolsPlats', 'dessertsBoissons'];
        for (const mainCategory of categories) {
          const subcategories = this.menuService.getSubcategoriesByCategory(mainCategory);
          const foundSubcategory = subcategories.find(([id]) => id === category);
          if (foundSubcategory) {
            this.items = this.menuService.getMenuItemsBySubcategory(mainCategory, category);
            this.categoryTitle = this.menuService.getMenuTitle(mainCategory);
            this.subcategoryTitle = this.menuService.getSubcategoryTitle(mainCategory, category);
            break;
          }
        }
      }
    });
  }
}
