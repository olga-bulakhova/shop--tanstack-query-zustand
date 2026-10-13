import type { Product } from '@/features/products/types/products.types';
import { Button } from '@/shared/ui/kit/button';
import type { ComponentProps } from 'react';
import type { ICartItem } from '../types/cart.types';
import { cartActions, useCartList } from '../api/use-cart-store';

type ButtonVariant = ComponentProps<typeof Button>['variant'];
type ButtonSize = ComponentProps<typeof Button>['size'];

interface AddToCartButtonProps {
  product: Product;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const AddToCartButton = ({
  product,
  variant = 'default',
  size = 'default',
}: AddToCartButtonProps) => {
  const cartList = useCartList();

  const isInCart = cartList.some((item: ICartItem) => item.id === product.id);

  return (
    <Button
      variant={variant}
      size={size}
      className="w-full transition-colors"
      onClick={() => cartActions.addProduct(product)}
    >
      {isInCart ? 'In cart' : 'Add to cart'}
    </Button>
  );
};
