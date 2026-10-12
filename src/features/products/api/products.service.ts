import { http } from '@/shared/api/http.service';
import type {
  Product,
  ProductsFilters,
  ProductsResponse,
} from '@/features/products/types/products.types';

const productsEndpoint = '/products';

export const productsService = {
  getList: async (params?: ProductsFilters): Promise<ProductsResponse> => {
    const { data } = await http.get<ProductsResponse>(productsEndpoint, {
      params,
    });
    return data;
  },

  getListByCategory: async (
    category: string,
    params?: ProductsFilters,
  ): Promise<ProductsResponse> => {
    const { data } = await http.get<ProductsResponse>(
      `${productsEndpoint}/category/${category}`,
      { params },
    );
    return data;
  },

  getSingle: async (id: number): Promise<Product> => {
    const { data } = await http.get<Product>(`${productsEndpoint}/${id}`);
    return data;
  },

  getCategoriesList: async (): Promise<string[]> => {
    const { data } = await http.get<string[]>(
      `${productsEndpoint}/category-list`,
    );
    return data;
  },
};
