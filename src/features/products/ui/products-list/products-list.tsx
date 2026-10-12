import { ContentList } from '@/shared/ui/content-list'
import { useProductsInfiniteQuery } from '../../api/use-products.query'
import { ProductCard } from './product-card'

const PRODUCT_SKELETON = <div className='w-full h-[300px] bg-gray-100 rounded-lg' />

interface ProductsListProps {
	limit: number
	category?: string
}

export const ProductsList = ({ limit, category }: ProductsListProps) => {
	const { products, isLoading, isFetchingNextPage, hasNextPage, cursorRef } = useProductsInfiniteQuery(category, limit)

	return (
		<div className='flex flex-col gap-4'>
			<ContentList
				data={products}
				renderItem={product => <ProductCard product={product} />}
				emptyMessage='No products found'
				isLoading={isLoading}
				skeleton={PRODUCT_SKELETON}
				listClassName='grid gap-x-5 gap-y-7 pt-[30px] pb-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
				rowKey={product => product.id}
			/>

			{hasNextPage && (
				<div
					ref={cursorRef}
					className='w-full flex justify-center py-6'
				>
					{isFetchingNextPage && <div className='text-gray-500 animate-pulse'>Загрузка...</div>}
				</div>
			)}
		</div>
	)
}
