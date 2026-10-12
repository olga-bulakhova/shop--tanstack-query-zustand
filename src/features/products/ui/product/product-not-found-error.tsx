import { BackButton } from '@/shared/ui/back-button'

export const ProductNotFoundError = () => {
	return (
		<div className='flex flex-col items-center gap-4 text-center py-20'>
			<h2 className='text-2xl font-semibold text-gray-700'>Товар не найден</h2>
			<p className='text-gray-500'>Возможно, ссылка устарела или товар был удален.</p>
			<BackButton fallbackPath='/products' />
		</div>
	)
}
