import { useCategoriesQuery } from '../../api/use-categories-query'
import { Skeleton } from '@/shared/ui/kit/skeleton' // Импортируйте ваш компонент скелетона
import { CategoriesItem } from './categories-item'

export const CategoriesList = () => {
	const { data: categories, isLoading } = useCategoriesQuery()

	return (
		<section
			aria-labelledby='categories-heading'
			className='my-4'
		>
			<h2
				id='categories-heading'
				className='text-2xl font-semibold mb-4'
			>
				Product categories
			</h2>

			<ul className='flex flex-wrap gap-2'>
				{isLoading ? (
					Array.from({ length: 6 }).map((_, index) => (
						<li key={index}>
							<Skeleton className='h-6 w-20 rounded-full' />
						</li>
					))
				) : (
					<>
						<li key='all'>
							<CategoriesItem category='all' />
						</li>
						{categories?.map(category => (
							<li key={category}>
								<CategoriesItem category={category} />
							</li>
						))}
					</>
				)}
			</ul>
		</section>
	)
}
