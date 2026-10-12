import { useQuery } from '@tanstack/react-query'
import { productsKeys } from './query-key.factory'
import { productsService } from './products.service'

export const useProductQuery = (productId: number) => {
	return useQuery({
		queryKey: productsKeys.single(productId),
		queryFn: () => productsService.getSingle(productId),
		enabled: !!productId && !isNaN(productId) && productId > 0,
	})
}
