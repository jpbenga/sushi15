import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';
import { MenuCategory } from '../../core/models/menu.interface';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {
  @Input() category!: MenuCategory;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}