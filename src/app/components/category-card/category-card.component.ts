import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="category-card" (click)="onClick()">
      <img [src]="imageUrl" [alt]="category">
      <div class="card-content">
        <h2>{{ category }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .category-card {
      width: 300px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.2s;
      background: white;
    }
    .category-card:hover {
      transform: translateY(-5px);
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 16px;
    }
    h2 {
      margin: 0 0 8px;
      font-size: 24px;
      color: #333;
    }
    p {
      margin: 0;
      color: #666;
    }
  `]
})
export class CategoryCardComponent {
  @Input() category!: string;
  @Input() items: MenuItem[] = [];
  @Input() imageUrl: string = 'https://dummyimage.com/300x200/000/fff';
  @Input() description: string = '';

  onClick() {
    // L'événement de clic est géré directement par le template parent
  }
}
