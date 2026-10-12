import { AddToCartButton } from '@/features/cart';
import { ROUTES } from '@/shared/model/routes';
import type { Product } from '@/features/products/types/products.types';
import { Rating } from '@/shared/ui/rating';
import { Link } from 'react-router-dom';
import { href } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between gap-2 text-center">
      <Link
        to={href(ROUTES.PRODUCT, { productId: String(product.id) })}
        className="block"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="aspect-square w-full object-cover"
        />
        <div className="mt-2.5 text-sm text-[#2d2d2f]">{product.title}</div>
      </Link>

      <div>
        <div className="flex justify-center">
          <Rating value={product.rating} />
        </div>
        <div className="mt-2 mb-2.5 text-xl text-[#2967FF]">
          € {product.price}
        </div>
        <AddToCartButton product={product} variant="outline" />
      </div>
    </div>
  );
};
