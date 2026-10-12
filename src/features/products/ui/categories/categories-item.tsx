import { ROUTES } from '@/shared/model/routes'
import { Badge } from '@/shared/ui/kit/badge'
import { titleFormat } from '@/shared/utils/title-format'
import { href, NavLink } from 'react-router-dom'

export const CategoriesItem = ({ category }: { category: string }) => {
	const url = category === 'all' ? ROUTES.PRODUCTS : href(ROUTES.PRODUCTS_CATEGORY, { category })

	const defaultStyles = 'bg-brand/10 text-brand border-brand/20 dark:bg-brand/20 dark:text-brand'
	const activeStyles = 'bg-brand text-white border-brand dark:bg-brand dark:text-white'

	return (
		<NavLink
			to={url}
			end={category === 'all'}
			className='block focus-visible:outline-none'
		>
			{({ isActive }) => (
				<Badge
					variant='outline'
					className={isActive ? activeStyles : defaultStyles}
				>
					{titleFormat(category)}
				</Badge>
			)}
		</NavLink>
	)
}
