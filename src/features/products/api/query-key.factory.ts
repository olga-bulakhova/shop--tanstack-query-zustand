import type { ProductsFilters } from '@/features/products/types/products.types';

export const productsKeys = {
  all: ['products'] as const,
  list: () => [...productsKeys.all, 'list'] as const,
  filteredList: (filters: ProductsFilters) =>
    [...productsKeys.list(), filters] as const,
  filteredListWithCategory: (category: string, filters: ProductsFilters) =>
    [...productsKeys.filteredList(filters), category] as const,
  single: (id: number) => [...productsKeys.all, 'single', id] as const,
};

export const categoriesKeys = {
  all: ['categories'] as const,
  list: () => [...categoriesKeys.all, 'list'] as const,
};
