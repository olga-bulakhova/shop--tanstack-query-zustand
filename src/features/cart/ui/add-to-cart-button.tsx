import type { Product } from '@/features/products/types/products.types';
import { Button } from '@/shared/ui/kit/button';
import type { ComponentProps } from 'react';
import { useCart } from '../api/use-cart';

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
  const { cartList, addProduct } = useCart();

  const isInCart = cartList.some((item) => item.id === product.id);

  return (
    <Button
      variant={variant}
      size={size}
      className="w-full transition-colors"
      onClick={() => addProduct(product)}
    >
      {isInCart ? 'In cart' : 'Add to cart'}
    </Button>
  );
};
