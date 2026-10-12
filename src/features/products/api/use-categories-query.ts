import { useQuery } from '@tanstack/react-query'
import { categoriesKeys } from './query-key.factory'
import { productsService } from './products.service'

export const useCategoriesQuery = () => {
	return useQuery({
		queryKey: categoriesKeys.list(),
		queryFn: () => productsService.getCategoriesList(),
	})
}
