import { ROUTES } from '@/shared/model/routes';
import { Logo } from '@/shared/ui/logo';
import { CartLink } from '@/features/cart';
import { useCartMetrics } from '@/features/cart/api/use-cart-store';

export const Header = () => {
  const cartMetrics = useCartMetrics();

  return (
    <header className="flex items-center justify-between py-3 pl-14 lg:pl-0">
      <Logo />
      <CartLink count={cartMetrics.totalQuantity} to={ROUTES.CART} />
    </header>
  );
};
