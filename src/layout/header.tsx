import { ROUTES } from '@/shared/model/routes';
import { Logo } from '@/shared/ui/logo';
import { CartLink, useCart } from '@/features/cart';

export const Header = () => {
  const { recalculateCart } = useCart();

  const { totalQuantity } = recalculateCart();

  return (
    <header className="flex items-center justify-between py-3 pl-14 lg:pl-0">
      <Logo />
      <CartLink count={totalQuantity} to={ROUTES.CART} />
    </header>
  );
};
