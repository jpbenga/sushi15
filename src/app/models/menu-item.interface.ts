export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  category: 'nigiri' | 'california' | 'spring';
}
