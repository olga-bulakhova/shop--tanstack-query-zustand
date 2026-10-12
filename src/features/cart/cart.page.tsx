import { Layout } from '@/layout/layout'
import { Button } from '@/shared/ui/kit/button'
import { useCart } from './api/use-cart'
import { CartHeader } from './ui/cart-header'
import { CartList } from './ui/cart-list'

const CartPage = () => {
	const { cartList, clear, recalculateCart } = useCart()

	const cartSummary = recalculateCart()
	const isCartEmpty = cartList.length === 0

	return (
		<Layout sidebarContent={<div>sidebar</div>}>
			<div className='flex items-center justify-between mt-7'>
				<div className='flex items-center gap-4'>
					<h2 className='text-[20px] font-bold'>Cart</h2>
					{!isCartEmpty && (
						<Button
							variant='link'
							onClick={clear}
							className='text-brand-secondary'
						>
							Clear the cart
						</Button>
					)}
				</div>
			</div>

			<div className='my-5 border border-[#aec2ea] rounded-[20px] overflow-hidden bg-white'>
				<CartHeader summary={cartSummary} />
				<CartList cartList={cartList} />
			</div>
		</Layout>
	)
}

export const Component = CartPage
