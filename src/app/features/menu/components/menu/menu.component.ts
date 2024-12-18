import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryCardComponent } from '../../../../components/category-card/category-card.component';
import { CategoryDetailsComponent } from '../../../../components/category-details/category-details.component';
import { MenuService } from '../../../../core/services/menu.service';
import { Observable } from 'rxjs';
import { MenuCategory, MenuSubCategory } from '../../../../core/models/menu.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CategoryCardComponent,
    CategoryDetailsComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  categories$!: Observable<[string, MenuCategory][]>;
  selectedCategory$!: Observable<string | null>;

  constructor(
    private readonly menuService: MenuService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.initializeObservables();
  }

  private initializeObservables(): void {
    this.categories$ = this.menuService.getCategories();
    this.selectedCategory$ = this.menuService.selectedCategory$;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        this.menuService.setSelectedCategory(category);
      }
    });
  }

  getSubcategories(categoryId: string): [string, MenuSubCategory][] {
    return this.menuService.getSubcategoriesByCategory(categoryId);
  }

  showSubcategory(categoryId: string, subcategoryId: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: categoryId, subcategory: subcategoryId },
      queryParamsHandling: 'merge'
    });
  }

  closeDetails(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null, subcategory: null },
      queryParamsHandling: 'merge'
    });
    this.menuService.setSelectedCategory(null);
  }

  getSelectedCategoryDetails(categoryId: string): MenuCategory | undefined {
    return this.menuService.getCategoryById(categoryId);
  }
}
