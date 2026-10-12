export interface Dimensions {
	width: number
	height: number
	depth: number
}

export interface Review {
	rating: number
	comment: string
	date: string
	reviewerName: string
	reviewerEmail: string
}

export interface ProductMeta {
	createdAt: string
	updatedAt: string
	barcode: string
	qrCode: string
}

export interface Product {
	id: number
	title: string
	description: string
	category: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	tags: string[]
	brand?: string
	sku: string
	weight: number
	dimensions: Dimensions
	warrantyInformation: string
	shippingInformation: string
	availabilityStatus: 'In Stock' | 'Low Stock' | 'Out of Stock' | string
	reviews: Review[]
	returnPolicy: string
	minimumOrderQuantity: number
	meta: ProductMeta
	thumbnail: string
	images: string[]
}

export interface ProductsResponse {
	products: Product[]
	total: number
	skip: number
	limit: number
}

export interface ProductsFilters {
	limit?: number
	skip?: number
	sortBy?: string
	order?: string
}