import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem, Supplements } from '../../core/models/menu.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input() categoryId!: string;
  @Input() subcategoryId!: string;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() items: MenuItem[] = [];
  @Input() supplements?: Supplements;
  @Output() selected = new EventEmitter<void>();

  onSelect(): void {
    this.selected.emit();
  }
}
