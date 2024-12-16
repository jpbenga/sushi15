export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  pieces?: number;
  items?: string[];
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  description?: string;
  items: MenuItem[];
  supplements?: {
    price: number;
    options: string[];
  };
}
