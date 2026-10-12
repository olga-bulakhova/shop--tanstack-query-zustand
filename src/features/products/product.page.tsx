import { useParams } from 'react-router-dom'
import { Layout } from '@/layout/layout'
import { useProductQuery } from './api/use-product.query'
import { ProductPageSkeleton } from './ui/product/product-page-skeleton'
import { ProductNotFoundError } from './ui/product/product-not-found-error'
import { ProductDetailCard } from './ui/product/product-detail-card'

const ProductPage = () => {
	const { productId } = useParams<{ productId: string }>()
	const id = Number(productId)

	const { data: product, isLoading, isError } = useProductQuery(id)

	const renderContent = () => {
		if (isLoading) {
			return <ProductPageSkeleton />
		}

		if (isError || !product || isNaN(id)) {
			return <ProductNotFoundError />
		}

		return <ProductDetailCard product={product} />
	}

	return (
		<Layout sidebarContent={<div>sidebar</div>}>
			<div className='mt-10'>{renderContent()}</div>
		</Layout>
	)
}

export const Component = ProductPage
