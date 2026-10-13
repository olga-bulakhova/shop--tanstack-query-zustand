import { Layout } from '@/layout/layout';
import { Button } from '@/shared/ui/kit/button';
import { CartHeader } from './ui/cart-header';
import { cartActions, useCartMetrics, useCartList } from './api/use-cart-store';
import { CartList } from './ui/cart-list';

const CartPage = () => {
  const cartList = useCartList();
  const cartMetrics = useCartMetrics();

  const isCartEmpty = cartList.length === 0;

  return (
    <Layout sidebarContent={<div>sidebar</div>}>
      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] font-bold">Cart</h2>
          {!isCartEmpty && (
            <Button
              variant="link"
              onClick={cartActions.clear}
              className="text-brand-secondary"
            >
              Clear the cart
            </Button>
          )}
        </div>
      </div>

      <div className="my-5 overflow-hidden rounded-[20px] border border-[#aec2ea] bg-white">
        <CartHeader summary={cartMetrics} />
        <CartList cartList={cartList} />
      </div>
    </Layout>
  );
};

export const Component = CartPage;
