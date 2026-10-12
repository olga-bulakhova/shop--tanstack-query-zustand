import { ROUTES } from '@/shared/model/routes'
import { createBrowserRouter, redirect } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: ROUTES.PRODUCTS,
		lazy: () => import('@/features/products/products-list.page'),
	},
	{
		path: ROUTES.PRODUCTS_CATEGORY,
		lazy: () => import('@/features/products/products-list-category.page'),
	},
	{
		path: ROUTES.PRODUCT,
		lazy: () => import('@/features/products/product.page'),
	},
	{
		path: ROUTES.CART,
		lazy: () => import('@/features/cart/cart.page'),
	},
	{
		path: ROUTES.HOME,
		loader: () => redirect(ROUTES.PRODUCTS),
	},
	{
		path: '*',
		loader: () => redirect(ROUTES.PRODUCTS),
	},
])
