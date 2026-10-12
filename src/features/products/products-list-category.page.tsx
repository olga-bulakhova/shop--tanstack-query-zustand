import { Layout } from '@/layout/layout'
import { useParams } from 'react-router-dom'
import { CategoriesList } from './ui/categories/categories-list'
import { ProductsList } from './ui/products-list/products-list'

const ProductsListCategoryPage = () => {
	const { category = '' } = useParams<{ category: string }>()

	if (!category) return null
	
	return (
		<Layout sidebarContent={<div>sidebar</div>}>
			<CategoriesList />
			<ProductsList
				limit={28}
				category={category}
			/>
		</Layout>
	)
}

export const Component = ProductsListCategoryPage
