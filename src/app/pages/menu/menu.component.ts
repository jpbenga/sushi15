import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../core/services/menu.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MenuCategory } from '../../core/models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MenuComponent implements OnInit {
  categories$!: Observable<[string, MenuCategory][]>;

  constructor(
    private readonly menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories$ = this.menuService.getCategories();
  }

  navigateToSubcategory(subcategoryId: string): void {
    if (subcategoryId) {
      this.router.navigate(['/menu/items'], { queryParams: { category: subcategoryId } });
    }
  }

  getSubcategoriesByCategory(categoryId: string) {
    return this.menuService.getSubcategoriesByCategory(categoryId);
  }
}