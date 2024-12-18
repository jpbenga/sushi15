export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  pieces?: number;
  items?: string[];
}

export interface MenuSubCategory {
  title: string;
  subtitle?: string;
  description?: string;
  items: MenuItem[];
  supplements?: {
    price: number;
    options: string[];
  };
}

export interface MenuCategory {
  title: string;
  description?: string;
  subtitle?: string;
  subcategories: {
    [key: string]: MenuSubCategory;
  };
}

export type MenuData = {
  [key: string]: MenuCategory;
};

export interface MenuSection {
  title: string;
  categories: string[];
}

export interface Supplements {
  price: number;
  options: string[];
}
