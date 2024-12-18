import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MenuCategory, MenuItem, MenuSubCategory } from '../models/menu.interface';
import { menuData } from '../../data/sushi-menu-data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private selectedCategorySubject = new BehaviorSubject<string | null>(null);

  get selectedCategory$(): Observable<string | null> {
    return this.selectedCategorySubject.asObservable();
  }

  getCategories(): Observable<[string, MenuCategory][]> {
    return new Observable(observer => {
      observer.next(Object.entries(menuData));
      observer.complete();
    });
  }

  getCategoryById(categoryId: string): MenuCategory | undefined {
    return menuData[categoryId];
  }

  getSubcategoriesByCategory(categoryId: string): [string, MenuSubCategory][] {
    const category = menuData[categoryId];
    return category ? Object.entries(category.subcategories) : [];
  }

  getMenuItemsBySubcategory(categoryId: string, subcategoryId: string): MenuItem[] {
    const category = menuData[categoryId];
    const subcategory = category?.subcategories[subcategoryId];
    return subcategory?.items || [];
  }

  setSelectedCategory(categoryId: string | null): void {
    this.selectedCategorySubject.next(categoryId);
  }

  getMenuTitle(categoryId: string): string {
    return menuData[categoryId]?.title || '';
  }

  getSubcategoryTitle(categoryId: string, subcategoryId: string): string {
    return menuData[categoryId]?.subcategories[subcategoryId]?.title || '';
  }

  getSubcategorySubtitle(categoryId: string, subcategoryId: string): string {
    return menuData[categoryId]?.subcategories[subcategoryId]?.subtitle || '';
  }
}
