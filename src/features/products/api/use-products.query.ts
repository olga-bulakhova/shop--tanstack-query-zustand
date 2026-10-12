import { useCallback, useRef, type RefCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { productsKeys } from './query-key.factory';
import { productsService } from './products.service';
import type { ProductsFilters } from '@/features/products/types/products.types';

export const useProductsInfiniteQuery = (
  category: string = '',
  limit: number = 30,
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: category
        ? productsKeys.filteredListWithCategory(category, { limit })
        : productsKeys.filteredList({ limit }),

      initialPageParam: 0,

      queryFn: ({ pageParam }) => {
        const fetchParams: ProductsFilters = {
          limit,
          skip: pageParam,
        };

        if (category === 'all' || !category) {
          return productsService.getList(fetchParams);
        }
        return productsService.getListByCategory(category, fetchParams);
      },

      getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit;
        return nextSkip < lastPage.total ? nextSkip : undefined;
      },
    });

  const cursorRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (!node || !hasNextPage || isFetchingNextPage) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage();
          }
        },
        { threshold: 0.1 },
      );

      observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  return {
    products,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    cursorRef,
  };
};
