export const MENU_ROUTES = {
  MENU: 'menu',
  CATEGORY: ':categoryId',
  SUBCATEGORY: ':subcategoryId'
} as const;

export const MENU_PATHS = {
  CATEGORY: (categoryId: string) => `/menu/${categoryId}`,
  SUBCATEGORY: (categoryId: string, subcategoryId: string) => `/menu/${categoryId}/${subcategoryId}`
} as const;

export const DEFAULT_CURRENCY = '€';
export const DEFAULT_LOCALE = 'fr-FR';
