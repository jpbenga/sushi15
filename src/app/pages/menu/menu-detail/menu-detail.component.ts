import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../core/services/menu.service';
import { SelectedSubcategory } from '../../../core/models/menu.interface';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  subcategory: SelectedSubcategory | null = null;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const subcategoryId = params['id'];
      if (subcategoryId) {
        this.loadSubcategoryDetails(subcategoryId);
      }
    });
  }

  private loadSubcategoryDetails(subcategoryId: string) {
    // Parcourir toutes les catégories pour trouver la sous-catégorie correspondante
    const categories = Object.keys(this.menuService.getCategoryById('') || {});
    
    for (const categoryId of categories) {
      const subcategories = this.menuService.getSubcategoriesByCategory(categoryId);
      const foundSubcategory = subcategories.find(([id]) => id === subcategoryId);
      
      if (foundSubcategory) {
        const [id, details] = foundSubcategory;
        this.subcategory = {
          id,
          details: {
            title: details.title,
            subtitle: details.subtitle,
            items: details.items || [],
            supplements: details.supplements
          }
        };
        break;
      }
    }
  }
}
