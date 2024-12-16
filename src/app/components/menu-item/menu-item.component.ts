import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
