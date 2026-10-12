import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
	PRODUCTS: '/products',
	PRODUCTS_CATEGORY: '/products/category/:category',
	PRODUCT: '/products/:productId',
	CART: '/cart',
} as const

export type PathParams = {
	[ROUTES.PRODUCT]: {
		productId: string
		category: string
	}
}

declare module 'react-router-dom' {
	interface Register {
		params: PathParams
	}
}
