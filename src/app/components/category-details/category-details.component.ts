import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="category-details">
      <h2>{{ category }}</h2>
      @if (subtitle) {
        <p class="subtitle">{{ subtitle }}</p>
      }
      <div class="items-grid">
        @for (item of items; track item.name) {
          <div class="item-card">
            <img [src]="'https://dummyimage.com/200x150/000/fff&text=' + item.name" [alt]="item.name">
            <div class="item-content">
              <h3>{{ item.name }}</h3>
              <p class="price">{{ item.price }}€</p>
              @if (item.description) {
                <p class="description">{{ item.description }}</p>
              }
              @if (item.pieces) {
                <p class="pieces">{{ item.pieces }} pièces</p>
              }
              @if (item.items) {
                <div class="sub-items">
                  <p>Contenu :</p>
                  <ul>
                    @for (subItem of item.items; track subItem) {
                      <li>{{ subItem }}</li>
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .category-details {
      padding: 20px;
      
      h2 {
        text-align: center;
        margin-bottom: 10px;
        font-size: 32px;
        color: #333;
      }

      .subtitle {
        text-align: center;
        color: #666;
        margin-bottom: 30px;
        font-style: italic;
      }

      .items-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        padding: 20px;
      }

      .item-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s;

        &:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .item-content {
          padding: 16px;
        }

        h3 {
          margin: 0 0 8px;
          font-size: 20px;
          color: #333;
        }

        .price {
          font-size: 18px;
          color: #e44d26;
          font-weight: bold;
          margin: 8px 0;
        }

        .description {
          color: #666;
          font-size: 14px;
          margin: 8px 0;
        }

        .pieces {
          color: #666;
          font-size: 14px;
          font-style: italic;
          margin: 8px 0;
        }

        .sub-items {
          margin-top: 12px;
          
          p {
            color: #333;
            font-weight: bold;
            margin-bottom: 4px;
          }

          ul {
            list-style-type: none;
            padding-left: 12px;
            margin: 0;

            li {
              color: #666;
              font-size: 14px;
              margin: 2px 0;
              &:before {
                content: "•";
                color: #e44d26;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  `]
})
export class CategoryDetailsComponent {
  @Input() category!: string;
  @Input() subtitle?: string;
  @Input() items: MenuItem[] = [];
}
